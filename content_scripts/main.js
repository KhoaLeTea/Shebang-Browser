import Bash from 'bash';

var container = document.querySelector('.bash');

bashSettings = function (bash, next) {
  bash.post('Hello!', 0, false, true, function () {
  })
}

// global bash instance
var bsh = new Bash(container, {
  computer: 'luciahuo',
  help: undefined,
  prompt: 'user@home:~$',
  name: undefined,
  function: bashSettings
  demo: false
});
