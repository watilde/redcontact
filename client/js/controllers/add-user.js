var $ = require('jquery')

module.exports = function () {
  $('#show-user-add').on('click', function () {
    var name = $('#user-add__name').val('')
    var phone = $('#user-add__phone').val('')
    var email = $('#user-add__email').val('')
  })
}
