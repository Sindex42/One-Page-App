var button = document.getElementById('button')

var textarea = document.getElementById('myTextarea')

var messages = document.getElementById('messageLog')

var message_array = []

button.onclick = function () {
  messages.innerText = textarea.value
  textarea.value = ""
}
