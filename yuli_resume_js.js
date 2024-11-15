document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    console.log("Menu icon clicked");

    // Debugging logs
    console.log("Page loaded");
    console.log("Menu Icon:", menuIcon);
    console.log("Navbar:", navbar);

    // Check if elements exist
    if (!menuIcon || !navbar) {
        console.error("Menu icon or navbar element not found.");
        return;
    }

    document.addEventListener("DOMContentLoaded", function () {
        const sendBtn = document.getElementById("send-btn");
        const userInput = document.getElementById("user-input");
        const chatLog = document.getElementById("chat-log");
    
        // Function to display messages in the chat log
        function addMessage(sender, message) {
            const messageDiv = document.createElement("div");
            messageDiv.textContent = `${sender}: ${message}`;
            chatLog.appendChild(messageDiv);
            chatLog.scrollTop = chatLog.scrollHeight;
        }
    
        // Function to call OpenAI API
        async function getBotResponse(message) {
            const apiKey = "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"; // Replace with your actual OpenAI API key
            const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    
            // Prepare the request body
            const requestBody = {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
                max_tokens: 150,
                temperature: 0.7
            };
    
            try {
                // Make the API call
                const response = await fetch(apiEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify(requestBody)
                });
    
                // Check if the response is OK
                if (!response.ok) {
                    console.error("Error with API response:", response.statusText);
                    return "Oops! Something went wrong. Please try again.";
                }
    
                const data = await response.json();
                if (data.choices && data.choices.length > 0) {
                    const botMessage = data.choices[0].message.content;
                    return botMessage.trim();
                } else {
                    console.error("No response from ChatGPT:", data);
                    return "Sorry, I couldn't get a response.";
                }
            } catch (error) {
                console.error("Error fetching response:", error);
                return "Sorry, I encountered an error.";
            }
        }
    
        // Event listener for the Send button
        sendBtn.addEventListener("click", async function () {
            const message = userInput.value.trim();
            if (message === "") return;
    
            // Display the user's message
            addMessage("You", message);
            userInput.value = "";
    
            // Fetch the bot's response and display it
            const botResponse = await getBotResponse(message);
            addMessage("Bot", botResponse);
        });
    
        // Event listener for pressing "Enter" to send the message
        userInput.addEventListener("keypress", async function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sendBtn.click();
            }
        });
    });
    


    // Function to play sound
    function playSound() {
        try {
            const audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
            audio.play();
        } catch (error) {
            console.error("Error playing sound:", error);
        }
    }

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('confetti');
        snowflake.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(snowflake);

        // Remove snowflake after animation
        setTimeout(() => snowflake.remove(), 3000);
    }

    // Function to toggle navbar and animate button
    function toggleMenu() {
        console.log("Hamburger button clicked");
        navbar.classList.toggle("active");
        guineaPigButton.classList.toggle("active");

        // Play sound and create snowflakes
        playSound();
        createSnowflake();

        // Change button text and style
        guineaPigButton.classList.add('animate-button');
        guineaPigButton.innerHTML = 'Wheek Wheek! 🎉';

        // Revert button state after 1.5 seconds
        setTimeout(() => {
            guineaPigButton.classList.remove('animate-button');
            guineaPigButton.innerHTML = `
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdulyS7DoJSGwK3jiUTN74-7KVuhyyRkrCA&usqp=CAU" alt="Guinea Pig">
                <span class="button-text">CLICK ME</span>
            `;
        }, 1500);
    }

    // Event listener for hamburger button
    guineaPigButton.addEventListener('click', toggleMenu);

    // Event listeners for navigation links to close the menu
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log("Navigation link clicked");
            navbar.classList.remove("active");
            guineaPigButton.classList.remove("active");
        });
    });
});



