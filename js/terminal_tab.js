// message send to background to get all the object
// message returns the history object
// bash.js

chrome.storage.sync.get('history', function(result) {
  alert(result)
});
