// replace_white.jsx
// Replaces pure white (#FFFFFF) pixels in every PNG in a folder, saving results
// to a parallel output folder that mirrors the input structure.
// Globals injected by run_replace_white.sh: targetFolder, outputFolder, replaceColor (hex)

#target photoshop

app.displayDialogs = DialogModes.NO;

function hexToRGB(hex) {
    hex = hex.replace(/^#/, '');
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

var logPath = outputFolder + "/replace_white_log.txt";

function log(msg) {
    var f = new File(logPath);
    f.lineFeed = "Unix";
    f.open("e");
    f.seek(0, 2);
    f.writeln(msg);
    f.close();
}

function mkdirp(folder) {
    if (!folder.exists) {
        mkdirp(folder.parent);
        folder.create();
    }
}

var rgb = hexToRGB(replaceColor);

var white = new SolidColor();
white.rgb.red = 255;
white.rgb.green = 255;
white.rgb.blue = 255;

var newColor = new SolidColor();
newColor.rgb.red = rgb.r;
newColor.rgb.green = rgb.g;
newColor.rgb.blue = rgb.b;

var processedCount = 0;
var skippedCount = 0;

function processFile(pngFile) {
    var relPath = pngFile.fsName.substring(targetFolder.length + 1);
    var outFile = new File(outputFolder + "/" + relPath);
    mkdirp(outFile.parent);

    var doc;
    try {
        doc = open(pngFile);

        try {
            doc.selection.selectByColor(white, 0, SelectionType.REPLACE, false);
            doc.selection.fill(newColor, ColorBlendMode.NORMAL, 100, false);
            doc.selection.deselect();
        } catch (selErr) {
            try { doc.selection.deselect(); } catch (e) {}
            doc.close(SaveOptions.DONOTSAVECHANGES);
            log("Skipped (no white): " + relPath);
            skippedCount++;
            return;
        }

        var pngOptions = new PNGSaveOptions();
        pngOptions.compression = 6;
        pngOptions.interlaced = false;
        doc.saveAs(outFile, pngOptions, true, Extension.LOWERCASE);
        doc.close(SaveOptions.DONOTSAVECHANGES);

        log("Saved: " + outFile.fsName);
        processedCount++;
    } catch (e) {
        if (doc) { try { doc.close(SaveOptions.DONOTSAVECHANGES); } catch (ce) {} }
        log("ERROR: " + relPath + " — " + e.message);
    }
}

function walkFolder(folder) {
    var items = folder.getFiles();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item instanceof Folder) {
            walkFolder(item);
        } else if (item instanceof File && /\.png$/i.test(item.name)) {
            processFile(item);
        }
    }
}

var root = new Folder(targetFolder);
var out = new Folder(outputFolder);
mkdirp(out);

// Create/clear the log now that outputFolder exists
var _init = new File(logPath);
_init.open("w");
_init.close();

if (!root.exists) {
    log("ERROR: Folder not found: " + targetFolder);
} else {
    walkFolder(root);
    log("Done. " + processedCount + " files saved to: " + outputFolder + " (" + skippedCount + " skipped, no white).");
}
