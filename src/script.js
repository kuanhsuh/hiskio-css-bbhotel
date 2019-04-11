console.log('testing')

// NavBar Toggle Class
$(document).ready (function() {
  var navlist = $('.nav-list')
  var navMenu = $('.nav-menu')
  var navContainer = $('.nav-container')

  navMenu.click(function () {
    navContainer.toggleClass("nav-show-menu")
  })
})