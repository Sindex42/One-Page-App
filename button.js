var button = document.getElementById('button')

var textarea = document.getElementById('myTextarea')

var messages = document.getElementById('messageLog')

var messageArray = []

function printMessages () { 
  for (var i = 0; i < messageArray.length; i++)
    {console.log('Hello')
      return messageArray[i]
    }
}

button.onclick = function () {
  messageArray.push(textarea.value)
  messages.innerText = printMessages()
  textarea.value = ""
}

