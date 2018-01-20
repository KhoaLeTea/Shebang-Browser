chrome.omnibox.setDefaultSuggestion({
  description: 'A FUCKING SUGGESTION'
});

var container = document.querySelector('.bash');
var bsh = new Bash(container, {
    name: 'grunt',
    prompt: '$',
    function: function(bash, next) {
        bash.post('Running "jshint:gruntfile" (jshint) task', 0, false, true);
        bash.post('>> 1 file lint free.', 500, false, true);
        bash.post('&nbsp;', 600);
        bash.post('Running "uglify:dist" (uglify) task', 700, false, true);
        bash.post('File "dist/scripts.min.js" created.', 1600, false, true);
        bash.post('Uncompressed size: 389 bytes.', 1800, false, true);
        bash.post('&nbsp;', 1900);
        bash.post('Done, without errors.', 2000, false, true, function() {
            return next();
        });
    }
});
