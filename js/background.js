console.log("Hello from the #!Browser");

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

});


var history = [];
var historySize = 0;

chrome.omnibox.onInputEntered.addListener(function (text, suggest) {
  history.append(text);
  historySize+=1;
  // the universal storage for all terminal inputs and outputs
  chrome.storage.sync.set({'history':
    history
  });
});
