const socket=io()

const clientTotal=document.getElementById('clients-total')
const messageContainer=document.getElementById('message-container')
const nameInput=document.getElementById('name-input')
const messageForm=document.getElementById('message-form')
const messageIntput=document.getElementById('message-input')


messageForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    sendMessage()
})
socket.on('clients-total',(data)=>{
    console.log(data)
    clientTotal.innerText=`Total Clients: ${data}`
})


function sendMessage(){
    if(messageIntput.value=='')return
    //console.log(messageIntput.value)
    const data={
        name:nameInput.value,
        message:messageIntput.value,
        dateTime:new Date()
    }

    socket.emit('message',data)
    addMessageToUI(true,data)
    messageIntput.value=''
}

socket.on('chat-message',(data)=>{
    //console.log(data)
    addMessageToUI(false,data)
})
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function addMessageToUI(isOwnMessage, data) {
    clearFeedback()
    const messageDateTime = getCurrentTime();
    const element = `
        <li class="${isOwnMessage ? 'message-right' : 'message-left'}">
            <p class="message">
                ${data.message}
                <span>${data.name} ● ${messageDateTime}</span>
            </p>
        </li>
    `;

    messageContainer.innerHTML += element;
    scrollToBottom()
}

function scrollToBottom()
{
    messageContainer.scrollTo(0,messageContainer.scrollHeight)
}

messageIntput.addEventListener('focus', (e) => {
    socket.emit('feedback', {
      feedback: `✍️ ${nameInput.value} is typing a message`,
    })
  })
  
  messageIntput.addEventListener('blur', (e) => {
    socket.emit('feedback', {
      feedback: '',
    })
  })

socket.on('ifeedback', (data) => {
    clearFeedback()
    const element = `
          <li class="message-feedback">
            <p class="feedback" id="feedback">${data.feedback}</p>
          </li>`
    messageContainer.innerHTML+=element
    console.log("ifeedback event ")
  })
  
  function clearFeedback() {
    document.querySelectorAll('li.message-feedback').forEach((element) => {
      element.parentNode.removeChild(element)
    })
  }