chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
  console.log('hello')
  if (text.search('coffee') > -1) {
        var suggestions = [];

        suggestions.push({ content: 'Coffee - Wikipedia', description: 'Coffee - Wikipedia' });
        suggestions.push({ content: 'Starbucks Coffee', description: 'Starbucks Coffee' });
        suggest(suggestions);
    }
});
