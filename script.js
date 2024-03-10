const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const apiKey = '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'; // Replace 'YOUR_API_KEY' with your actual ChatGPT API key

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    appendMessage('You', userMessage);
    userInput.value = '';
    sendRequestToChatGPT(userMessage);
  }
});

function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendRequestToChatGPT(userMessage) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a telemedicine chatbot.' },
          { role: 'user', content: userMessage }
        ]
      })
    });
    const data = await response.json();
    const botMessage = data.choices[0].message.text;
    appendMessage('Chatbot', botMessage);
  } catch (error) {
    console.error('Error:', error);
  }
}
