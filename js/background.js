console.log("Hello from the #!Browser");

var arr = [];
var historySize = 0;

chrome.omnibox.onInputEntered.addListener(function(text, disposition) {
  chrome.tabs.query({
      active: true,
      currentWindow: true
  }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          show: true,
          text: text
        },
        function(response) {
          console.log("message recieve status: " + response.response);
        });
  });
  arr.push(text);
  historySize = arr.length;
  // the universal storage for all terminal inputs and outputs
  chrome.storage.sync.set({'history':
    arr
  });
});
