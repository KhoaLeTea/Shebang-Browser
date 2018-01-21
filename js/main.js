<<<<<<< HEAD
$('body').append("<div class=\"outer bash\"><div class=\"moveable\"></div></div>");
$('.bash').append("<div class=\"window\"></div>");
$('.bash .window').append("<div class=\"header\"></div>");
=======
$('body').append('<div class="bash"></div>');
$('.bash').append('<div class="window"></div>');
$('.bash .window').append('<div class="header"></div>');
>>>>>>> 8194d20b97eb3169173c7250208a330ef72128af

$('.bash .window .header').append('<a href="#" class="bash-button close"></a>');
$('.bash .window .header').append(
  '<a href="#" class="bash-button disabled min"></a>'
);
$('.bash .window .header').append('<a href="#" class="bash-button max"></a>');
$('.bash .window .header').append('<br/>');
$('.bash .window').append('<div class="terminal"></div>');

$('.bash').hide();

var movable = document.querySelector('.bash .moveable');


// target elements with the "draggable" class
interact(movable)
.draggable({
    onmove: window.dragMoveListener,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    // keep the edges inside the parent
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },

    // minimum size
    restrictSize: {
      min: { width: 500, height: 300 },
    },

    inertia: true,
  });

  var container = document.querySelector('.bash');

// list of commands
var commands = {
  grunt: function(bash, next) {
    bash.post(
      'Running "jshint:gruntfile" (jshint) task',
      0,
      false,
      true,
      bash.post(
        '>> 1 file lint free.',
        500,
        false,
        true,
        bash.post(
          '&nbsp;',
          600,
          false,
          true,
          bash.post(
            'Running "uglify:dist" (uglify) task',
            700,
            false,
            true,
            bash.post(
              'Running "uglify:dist" (uglify) task',
              700,
              false,
              true,
              bash.post(
                'File "dist/scripts.min.js" created.',
                1600,
                false,
                true,
                bash.post(
                  'Uncompressed size: 389 bytes.',
                  1800,
                  false,
                  true,
                  bash.post(
                    '&nbsp;',
                    1900,
                    false,
                    true,
                    bash.post(
                      'Done, without errors.',
                      2000,
                      false,
                      true,
                      function() {
                        return next();
                      }
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  },
  ls: function(bash, next) {
    bash.post('Look at all of these directories', 0, false, true, function() {
      return next();
    });
  }
};

// new bash instance
var bsh = new Bash(container, {
  name: 'grunt',
  prompt: '$',
  commandList: commands
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.show) {
    $('.bash').show();
  }
  // make sure that the request is being executed inside of terminal
  var text = request.text;
  if (text in commands) {
    // get the corresponding response
    var commandFunction = commands[text];
    commandFunction(bsh, function() {
      bsh.reset();
    });
  }
  sendResponse({ status: 'Ok' });
});

$('.bash-button.close').click(function() {
  $('.bash').hide();
});

$('.bash-button.max').click(function() {
  $('.bash').hide();
  // something to transfer the bash history
  // terminal_tab = chrome.extension.getURL('terminal_tab.html');
  // console.log(chrome.extension.getURL('terminal_tab.html'));
  // window.open(terminal_tab);
  // send a message to background.js saying to open a new tab
  // background.js will open terminal_tab.html
  // somehow either terminal_tab (main.js) or background.js will pull chrome.storage.sync the bash history
  chrome.runtime.sendMessage({ tabOpened: true }, function() {
    console.log('sending message to open new tab');
  });
});
