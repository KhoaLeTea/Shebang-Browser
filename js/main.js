import Bash from './bash.js';

$('body').append("<div class=\"bash\"></div>");
$('.bash').append("<div class=\"window\"></div>");
$('.bash .window').append("<div class=\"header\"></div>");

$('.bash .window .header').append("<a href=\"#\" class=\"button max\"></a><br/>");
$('.bash .window').append("<div class=\"terminal\"></div>");

$('.bash').css('width', '500px');
$('.bash').css('position', 'fixed');
$('.bash').css('top', '5px');
$('.bash').css('right', '5px');
$('.bash').css('z-index', '99999');
$('.bash .button.max').css('float', 'right')
$('.bash').hide();

chrome.runtime.onMessage.addListener(request => {
  if (request.show) {
    $('.bash').show();
  }
  console.log(request.text);
  return Promise.resolve({response: "Ok"});
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
