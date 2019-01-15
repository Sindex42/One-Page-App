var button = document.getElementById('button')

var text = document.getElementById('textarea')

var messages = document.getElementById('printmessage')

button.onclick= function () {
  messages.innerText = text.innerText
}
