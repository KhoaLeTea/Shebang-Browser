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

chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {

    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.*' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
