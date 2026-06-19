// import_layers.jsx
// Rebuilds a PSD from a folder of exported PNG layers, recreating the group hierarchy.
// All layers are full-canvas size, so positions are preserved exactly via transparency.
// Run via File > Scripts > Browse... in Photoshop.

#target photoshop

app.displayDialogs = DialogModes.NO;

// ── CONFIGURE THESE ────────────────────────────────────────────────────────────
var ROOT    = "/Users/annkennedy/Documents/CYOD/Raw Spread PSDs/old/Spread_03-08_layers_old";
var OUT_PSD = "/Users/annkennedy/Documents/CYOD/Raw Spread PSDs/old/Spread_03-08_rebuilt.psd";
var W       = 3300;  // document width  (px)
var H       = 2550;  // document height (px)
var RES     = 300;   // resolution (dpi)
// ──────────────────────────────────────────────────────────────────────────────

var main = app.documents.add(
    new UnitValue(W, "px"), new UnitValue(H, "px"), RES,
    "Spread_03-08_rebuilt", NewDocumentMode.RGB, DocumentFill.TRANSPARENT
);

var ok = 0, fail = 0;

function placePNG(file, group) {
    try {
        var src = app.open(file);

        // Unlock if Photoshop opened it as a locked Background layer
        try { if (src.activeLayer.isBackground) src.activeLayer.isBackground = false; } catch(e) {}

        // Duplicate directly into the target group (or document root if no group).
        // Doing this in one step avoids a stale reference bug that happens when you
        // duplicate to root first and then try to move() after closing the source doc.
        var target    = (group !== null) ? group : main;
        var placement = (group !== null) ? ElementPlacement.INSIDE : ElementPlacement.PLACEATBEGINNING;
        var dup = src.layers[0].duplicate(target, placement);
        dup.name = file.name.replace(/\.png$/i, "");

        src.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument = main;
        ok++;
    } catch (e) {
        fail++;
        try { app.activeDocument = main; } catch(e2) {}
    }
}

function walk(folder, group) {
    var items = folder.getFiles();
    var files = [], dirs = [];

    for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if (it.name.charAt(0) === '.') continue; // skip .DS_Store, ._* etc.
        if (it instanceof Folder)                  dirs.push(it);
        else if (/\.png$/i.test(it.name))          files.push(it);
    }

    for (var f = 0; f < files.length; f++) {
        placePNG(files[f], group);
    }

    for (var d = 0; d < dirs.length; d++) {
        var container = (group !== null) ? group : main;
        var sub = container.layerSets.add();
        sub.name = dirs[d].name;
        walk(dirs[d], sub);
    }
}

walk(new Folder(ROOT), null);

var psdOpt = new PhotoshopSaveOptions();
psdOpt.layers = true;
psdOpt.embedColorProfile = true;
main.saveAs(new File(OUT_PSD), psdOpt, true, Extension.LOWERCASE);

alert("Done!\nImported: " + ok + "   Errors: " + fail + "\n\nSaved to:\n" + OUT_PSD);
