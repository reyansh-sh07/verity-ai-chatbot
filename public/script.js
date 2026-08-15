const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");
const welcomeMessage = document.getElementById("welcomeMessage");
const sendButton = document.getElementById("sendButton");

messageForm.addEventListener("submit", async (event) => {
event.preventDefault();
const message = messageInput.value.trim();
if (!message) {
  return;
  }
if (welcomeMessage) {
  welcomeMessage.remove();
  }
addMessage(message, "user-message");
messageInput.value = "";
sendButton.disabled = true;
const loadingMessage = addMessage(
  "Verity is thinking...",
  "ai-message loading",
);
try {
  const response = await fetch("/api/chat", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
body: JSON.stringify({
    message: message,
    }),
  });

const data = await response.json();

loadingMessage.remove();

if (!response.ok) {
    throw new Error(data.error || "Something went wrong.");
    }

addMessage(data.reply, "ai-message");
  } catch (error) {
    loadingMessage.remove();

    addMessage("Sorry, something went wrong. Please try again.", "ai-message");

console.error(error);
  } finally {
    sendButton.disabled = false;

  messageInput.focus();
  }
});

function addMessage(text, className) {
const messageElement = document.createElement("div");
messageElement.className = `message ${className}`;
messageElement.textContent = text;
chatBox.appendChild(messageElement);
chatBox.scrollTop = chatBox.scrollHeight;
return messageElement;
}
