var $ = require('jquery')
function Users () {
  this.store = []
}

Users.prototype.init = function () {
  var that = this
  return new Promise(function(resolve, reject) {
    $.get('/users', function (data) {
      that.store = data
      resolve(data)
    })
  })
}

Users.prototype.remove = function (id) {
  var that = this
  return new Promise(function(resolve, reject) {
    $.post('/users/remove', {id: id}, function () {
      resolve(true)
    })
  })
}

Users.prototype.search = function (word) {
  var that = this
  return new Promise(function(resolve, reject) {
    var users = []
    that.store.forEach(function (item) {
      if (item.name.indexOf(word) !== -1) users.push(item)
    })
    resolve(users)
  })
}

Users.prototype.new = function (data) {
  var that = this
  return new Promise(function(resolve, reject) {
    $.post('/users/new', data, function () {
      resolve()
    })
  })
}

Users.prototype.update = function (data) {
  var that = this
  return new Promise(function(resolve, reject) {
    $.post('/users/update', data, function () {
      resolve()
    })
  })
}

module.exports = Users
