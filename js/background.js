console.log("Hello from the #!Browser");

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
          console.log("received something");
          console.log(response.response);
        }).catch(onError);
  }).then();

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

// store the history
var history = [];
var historySize = 0;

chrome.omnibox.onInputEntered.addListener(function (text, suggest) {
  console.log(history)
  history.append(text);
  historySize+=1;
  // the universal storage for all terminal inputs and outputs
  chrome.storage.sync.set({'history':
    history
  });
});
