import '../css/style.css';

(function() {
  document.getElementsByTagName('h1')[0].innerHTML = 'Changed text';
  console.log('Hey hey'); // eslint-disable-line no-console
})();