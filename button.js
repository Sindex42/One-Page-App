var button = document.getElementById('button')
var myTextarea = document.getElementById('myTextarea')
var messageLog = document.getElementById('messageLog')

var messageArray = []

function printMessages () {
  return messageArray.reverse().join('<br />')
}

button.onclick = function () {
  messageArray.push(myTextarea.value)
  messageLog.innerHTML = printMessages()
  myTextarea.value = ''
}
