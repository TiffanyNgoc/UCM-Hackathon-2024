const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

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
  let botMessage;
  switch (userMessage.toLowerCase()) {
    case 'hi':
    case 'hello':
      botMessage = 'Hi there! How can I help you today?';
      break;
    case 'what services do you offer?':
      botMessage = 'We offer a range of tele-medicine services including virtual consultations, remote monitoring, prescription refills, and follow-up appointments. How can I assist you further?';
      break;
    case 'how do I get started?':
    case 'how do I start?':
      botMessage = 'To get started, simply sign up on our website and schedule your first virtual consultation with one of our healthcare professionals. Alternatively, you can contact our support team for assistance. Is there anything else you would like to know?';
      break;
    case 'do you accept insurance?':
      botMessage = 'Yes, we accept most major insurance plans. However, coverage may vary depending on your specific plan and provider. We recommend contacting your insurance company for more information.';
      break;
    case 'what are your operating hours?':
      botMessage = 'Our tele-medicine services are available 24/7, allowing you to access healthcare whenever you need it. Our support team is also available to assist you during regular business hours. How can I assist you further?';
      break;
    case 'thank you':
    case 'thanks':
      botMessage = 'You\'re welcome! If you have any more questions or need assistance, feel free to ask.';
      break;
    case 'what are common symptoms you treat?':
    case 'what are common symptoms?':
      botMessage = 'We provide care for a wide range of symptoms and conditions, including but not limited to: fever, cough, sore throat, shortness of breath, fatigue, body aches, headache, nausea, vomiting, diarrhea, and more. If you are experiencing any symptoms, please let me know, and I can provide further guidance.';
      break;
    case 'what should I do if I experience symptoms?':
    case 'I have symptoms':
      botMessage = 'If you are experiencing symptoms, it is important to seek medical advice. You can schedule a virtual consultation with one of our healthcare professionals who can assess your symptoms and provide guidance on next steps, including testing and treatment options.';
      break;
    case 'what should I do if I have a medical emergency?':
    case 'I have a medical emergency':
    case 'I have an medical emergency':
      botMessage = 'If you have a medical emergency, such as difficulty breathing, chest pain, sudden weakness, or loss of consciousness, please call emergency services immediately. Our tele-medicine services are not intended for emergency situations.';
      break;
    case 'what do I do if I don\'t feel well?':
    case 'what should I do if I feel sick?':
    case 'I feel sick':
      botMessage = 'If you are not feeling well, it is important to rest and stay hydrated. You can also schedule a virtual consultation with one of our healthcare professionals who can assess your symptoms and provide guidance on next steps.';
      break;
    case 'what should I do if I think I have COVID-19?':
      botMessage = 'If you suspect you have COVID-19, it is important to self-isolate and monitor your symptoms. You can schedule a virtual consultation with one of our healthcare professionals who can assess your symptoms and provide guidance on testing and quarantine protocols.';
      break;
    case 'what do I do if I have a fever?':
    case 'what should I do if I have a cough?':
    case 'what should I do if I have a sore throat?':
      botMessage = 'If you have a fever, cough, or sore throat, it is important to rest and drink plenty of fluids. You can also take over-the-counter medications to help alleviate symptoms. If your symptoms worsen or persist, please schedule a virtual consultation for further evaluation.';
      break;
    case 'how can I schedule a virtual consultation?':
    case 'I want to schedule a consultation':
    case 'Can I schedule an appointment':
    case 'I want to schedule an appointment':
      botMessage = 'You can schedule a virtual consultation through our website or mobile app. Simply create an account, choose a convenient appointment time, and one of our healthcare professionals will reach out to you at the scheduled time.';
      break;
    case 'what do I do if I need help?':
    case 'I need help':
      botMessage = 'If you need assistance or have any questions, feel free to ask! Our team is here to help you with any concerns you may have.';
      break;
    case 'what do I do if I don\'t know what to do?':
    case 'I don\'t know what to do':
    case 'I don\'t know':
      botMessage = 'If you\'re unsure about what to do, don\'t worry! Our team is here to guide you. Feel free to ask any questions, and we\'ll assist you in finding the right solution.';
      break;
    default:
      botMessage = 'I\'m sorry, I didn\'t quite understand that. Can you please rephrase or ask another question?';
      break;
  }
  appendMessage('Chatbot', botMessage);
}

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};
