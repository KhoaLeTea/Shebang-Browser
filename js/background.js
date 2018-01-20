console.log("Hello from the #!Browser");

// store the history
var arr = [];
var historySize = 0;

chrome.omnibox.onInputEntered.addListener(function(text) {
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
          console.log("message recieve status: " + response.status);
        });
  });

  console.log(arr)
  arr.push(text);
  historySize+=1;
  // the universal storage for all terminal inputs and outputs
  chrome.storage.sync.set({'history':
    arr
  });

});
