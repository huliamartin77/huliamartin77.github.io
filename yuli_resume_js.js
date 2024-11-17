document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatLog = document.getElementById("chat-log");
    const chatbotContainer = document.getElementById("chatbot-container");

    console.log("Chatbot script initialized");

    // Toggle Chatbot
    function toggleChatbot() {
        if (chatbotContainer.classList.contains("minimized")) {
            console.log("Opening chatbot");
            chatbotContainer.classList.remove("minimized");
        } else {
            console.log("Minimizing chatbot");
            chatbotContainer.classList.add("minimized");
        }
    }

    // Function to display messages
    function addMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = `${sender}: ${message}`;
        chatLog.appendChild(messageDiv);
        chatLog.scrollTop = chatLog.scrollHeight;
        console.log(`Message added from ${sender}: ${message}`);
    }

    async function getBotResponse(message) {
        console.log("Sending message to server:", message);
        try {
            const response = await fetch('https://huliamartin77-github-io-git-main-yulia-martins-projects.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
    
            console.log("Received response status:", response.status);
    
            if (!response.ok) {
                console.error('Error with API response:', response.statusText);
                return "Oops! Something went wrong. Please try again.";
            }
    
            const data = await response.json();
            console.log("Received data from server:", data);
            return data.response || "Sorry, I couldn't get a response.";
        } catch (error) {
            console.error("Error fetching response:", error);
            return "Sorry, I encountered an error.";
        }
    }

// Declare the flag to ensure greeting happens only once
let hasGreeted = false;

// Function to greet the user when the chatbox is opened
function greetUser() {
    if (!hasGreeted) {
        addMessage("Yulia's Resume Elves 🐹🎄", "✨ Hi! We are the magical resume elves! 🎅📜 Ask us anything about Yulia's resume, and we'll be happy to help! 🎁😊");
        hasGreeted = true; // Set the flag to true after greeting
    }
}

// Greet the user immediately when the chatbox is loaded
document.addEventListener('DOMContentLoaded', function () {
    greetUser(); // Greet the user as soon as the chatbox loads
});

// Event listener for sending messages
sendBtn.addEventListener("click", async function () {
    const message = userInput.value.trim();
    if (message === "") {
        console.log("No message entered");
        return;
    }

    // Add user's message to the chat
    addMessage("You", message);
    userInput.value = "";

    console.log("Fetching bot response...");
    const botResponse = await getBotResponse(message);
    addMessage("Yulia's Resume Elves 🐹", botResponse);
});


    // Press "Enter" to send a message
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            console.log("Enter key pressed");
            sendBtn.click();
        }
    });

    // Function to display messages
    function addMessage(sender, message) {
    const messageDiv = document.createElement("div");

    // Customize the sender names
    const senderName = sender === "You" ? "You" : "Yulia's Resume Elves";

    messageDiv.textContent = `${senderName}: ${message}`;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
    console.log(`Message added from ${senderName}: ${message}`);
}

    // Minimize chatbot on clicking outside
    document.addEventListener("click", function (event) {
        const isClickInsideChatbot = chatbotContainer.contains(event.target);
        const isClickOnSendBtn = sendBtn.contains(event.target);

        if (!isClickInsideChatbot && !isClickOnSendBtn) {
            console.log("Click outside chatbot detected. Minimizing...");
            chatbotContainer.classList.add("minimized");
        }
    });

    console.log("All event listeners attached");
});

