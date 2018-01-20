console.log("Hello from the #!Browser");


chrome.omnibox.setDefaultSuggestion({
  description: 'A FUCKING SUGGESTION'
});

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
  console.log('hello')
  if (text.search('coffee') > -1) {
        var suggestions = [];

        suggestions.push({ content: 'Coffee - Wikipedia', description: 'Coffee - Wikipedia' });
        suggestions.push({ content: 'Starbucks Coffee', description: 'Starbucks Coffee' });
        suggest(suggestions);
    }
});


chrome.omnibox.onInputEntered.addListener(function(text) {
    // chrome.tabs.create({url:"popup/popup.html"});
    console.log("help");
});
