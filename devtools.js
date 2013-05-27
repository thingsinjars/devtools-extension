// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("DemoPanel", "toast.png", "panel.html", function(panel) {});