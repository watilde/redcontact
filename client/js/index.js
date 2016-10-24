var $ = require('jquery')
var list = require('./controllers/list')
var addUser = require('./controllers/add-user')
var dialog = require('./helpers/dialog')

$(function () {
  // helpers
  dialog()
  // controllers
  list()
  addUser()
})
