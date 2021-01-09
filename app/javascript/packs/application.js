// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Internal imports, e.g:
import '../stylesheets/application.scss';
import '../components/type.js';
import Typed from 'typed.js';



document.addEventListener('turbolinks:load', () => {
  const button = document.getElementById('btn-spotify');
  setTimeout(() => {
    button.classList.remove('hidden');
  }, 6600);
  // Call your functions here, e.g:
});
