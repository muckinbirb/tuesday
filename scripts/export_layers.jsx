// export_layers.jsx
// Exports every leaf layer as a PNG by duplicating it into a temp document.
// This avoids the slow "hide all / save full canvas / restore" cycle.
// psdPath is injected as a global by run_export.sh.

#target photoshop

app.displayDialogs = DialogModes.NO;

var psdFile = new File(psdPath);
var logPath = psdFile.parent.fsName + "/" + psdFile.name.replace(/\.psd$/i, "") + "_export_log.txt";

// Create/clear the log file up front so the shell poller sees it immediately
var _init = new File(logPath);
_init.open("w");
_init.close();

function log(msg) {
    var f = new File(logPath);
    f.lineFeed = "Unix";
    f.open("e");
    f.seek(0, 2);
    f.writeln(msg);
    f.close();
}

if (!psdFile.exists) {
    log("ERROR: File not found: " + psdPath);
} else {
    var doc = open(psdFile);

    var psdName = psdFile.name.replace(/\.psd$/i, "");
    var outputRoot = new Folder(psdFile.parent.fsName + "/" + psdName + "_layers");
    if (!outputRoot.exists) outputRoot.create();

    var pngOptions = new PNGSaveOptions();
    pngOptions.compression = 6;
    pngOptions.interlaced = false;

    function exportLayerAsPNG(layer, outputFile) {
        var bounds = layer.bounds; // [left, top, right, bottom] as UnitValues
        var w = bounds[2].value - bounds[0].value;
        var h = bounds[3].value - bounds[1].value;

        // Skip layers with no visible content
        if (w <= 0 || h <= 0) {
            log("SKIPPED (empty): " + layer.name);
            return false;
        }

        // Create a full-size transparent doc, duplicate the layer in,
        // then crop to the layer's own bounds before saving.
        var tempDoc = app.documents.add(
            doc.width, doc.height, doc.resolution,
            "tmp", NewDocumentMode.RGB, DocumentFill.TRANSPARENT
        );
        app.activeDocument = doc;
        layer.duplicate(tempDoc, ElementPlacement.PLACEATBEGINNING);
        app.activeDocument = tempDoc;
        tempDoc.crop(bounds);
        tempDoc.saveAs(outputFile, pngOptions, true, Extension.LOWERCASE);
        tempDoc.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument = doc;
        return true;
    }

    function sanitizeName(name) {
        return name.replace(/[\/\\:*?"<>|]/g, "_");
    }

    var exportCount = 0;

    function walkLayers(container, currentFolder) {
        for (var i = 0; i < container.layers.length; i++) {
            var layer = container.layers[i];
            var safeName = sanitizeName(layer.name);

            if (layer.typename === "LayerSet") {
                var subfolder = new Folder(currentFolder.fsName + "/" + safeName);
                if (!subfolder.exists) subfolder.create();
                walkLayers(layer, subfolder);
            } else {
                var outFile = new File(currentFolder.fsName + "/" + safeName + ".png");
                // Resume: skip layers whose PNG already exists
                if (outFile.exists) {
                    log("Skipped (exists): " + outFile.fsName);
                    exportCount++;
                } else {
                    try {
                        if (exportLayerAsPNG(layer, outFile)) {
                            log("Exported: " + outFile.fsName);
                            exportCount++;
                        }
                    } catch (e) {
                        log("SKIPPED (error): " + layer.name + " — " + e.message);
                    }
                }
            }
        }
    }

    walkLayers(doc, outputRoot);
    log("Done. " + exportCount + " layers exported to: " + outputRoot.fsName);
}
