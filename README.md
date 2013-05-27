DevTools Extension Example
===

This is a small boilerplate project to be used as a starting point for developing a Chrome DevTools Extension.

Installation
===

 * Open [chrome://extensions](chrome://extensions)
 * Enable 'Developer Mode' checkbox
 * Click 'Load unpacked extensions...'
 * Select the `devtools-extension` folder

Usage
===

While on any page, launch the devtools, you should see a new tab called 'DemoPanel' which contains 3 buttons.

`Execute script in inspected page`
---

Uses `chrome.tabs.executeScript` to execute an inline script in the context of the page you're inspecting (via `background.html`).

`Insert script into inspected page`
---

Uses `chrome.tabs.executeScript` to append an external file (included in the extension folder) to the inspected page (via `background.html`).

`Insert button to send a message`
---

With the grace of a gorilla, replaces the entire DOM of the inspected page with a button which has an `onclick` attached. Clicking the button will send a message from the inspected page to the background.html. It is then relayed back to the DemoPanel where it changes the text on the button.

Background
===

While working on a feature for [GhostStory](https://github.com/thingsinjars/GhostStory), I found myself trying to figure out how Chrome DevTools Extensions worked. Seeing as it took the best part of a day to actually get the basics in place (even using the [docs](http://developer.chrome.com/extensions/devtools.html) and [samples](http://developer.chrome.com/extensions/samples.html)), I figure it might help to have a working example.
