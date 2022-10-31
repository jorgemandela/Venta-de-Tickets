/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
(function ($) {
  $(function () {
    $('.sidenav').sidenav()
  })
// eslint-disable-next-line no-undef
})(jQuery)
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select')
  var instances = M.FormSelect.init(elems, {})
})

// Or with jQuery
$(document).ready(function () {
  $('select').formSelect()
})
