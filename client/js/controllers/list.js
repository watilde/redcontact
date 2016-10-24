var $ = require('jquery')
var _ = require('lodash')
var itemTemplate = _.template(require('../views/item.html'))
var Users = require('../models/users')
var users = new Users()

module.exports = function () {
  $('#user-list').empty()
  users.init().then(function (_users) {
    $('#user-list').append(itemTemplate({users: _users}))
    componentHandler.upgradeDom()

    $('.show-user-info').on('click', function () {
      var index = $('.show-user-info').index(this)
      var $dialog = document.querySelector('#user-info--' + index)
      $dialog.showModal()
      $('#user-info--' + index).on('click', function () {
        $dialog.close()
      })

      $('.user-info__edit').on('click', function () {
        var dialog = document.querySelector('#user-edit')
        var id = $(this).data('id')
        var name = $(this).data('name')
        var phone = $(this).data('phone')
        var email = $(this).data('email')

        $('#user-edit__id').val(id)
        $('#user-edit__name').val(name)
        $('#user-edit__phone').val(phone)
        $('#user-edit__email').val(email)
        dialog.showModal()
      })

      $('#user-edit__close').on('click', function () {
        var dialog = document.querySelector('#user-edit')
        dialog.close()
      })
    })

    $('.user-info__delete').on('click', function () {
      var index = $('.user-info__delete').index(this)
      var id = $('#user-info--' + index).find('.user-info__id').attr('value')
      users.remove(id).then(function () {
        window.location.reload()
      })
    })
  })

  $('#user-add__save').on('click', function () {
    var name = $('#user-add__name').val()
    var phone = $('#user-add__phone').val()
    var email = $('#user-add__email').val()
    users.new({name: name, phone: phone, email: email}).then(function () {
      window.location.reload()
    })
  })

  $('#user-search').on('change', function () {
    var val = $(this).val()
    $('#user-list').empty()
    users.search(val).then(function (users) {
      $('#user-list').append(itemTemplate({users: users}))
    })
  })

  $('#user-edit__save').on('click', function () {
    var id = $('#user-edit__id').val()
    var name = $('#user-edit__name').val()
    var phone = $('#user-edit__phone').val()
    var email = $('#user-edit__email').val()
    users.update({id: id, name: name, phone: phone, email: email}).then(function () {
      window.location.reload()
    })
  })
}
