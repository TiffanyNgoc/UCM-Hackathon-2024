const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    appendMessage('You', userMessage);
    userInput.value = '';
    sendRequestToDialogflow(userMessage);
  }
});

function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendRequestToDialogflow(userMessage) {
  // Send user message to Dialogflow backend
  // Here you would typically make an API call to your Dialogflow agent

  // For demonstration, let's simulate a response from Dialogflow
  const botMessage = 'This is a response from the chatbot';
  appendMessage('Chatbot', botMessage);
}
