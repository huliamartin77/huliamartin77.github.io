import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all requests
const allowCors = (fn) => async (req, res) => {
    const allowedOrigins = [
        'https://huliamartin77.github.io',
        'https://huliamartin77-github-io.vercel.app',
        'https://huliamartin77-github-io-git-main-yulia-martins-projects.vercel.app',
        'https://huliamartin77-github-fr2r68ejf-yulia-martins-projects.vercel.app',
        'https://huliamartin77-github-je0azooqk-yulia-martins-projects.vercel.app'
    ];
    const origin = req.headers.origin;

    // Check if the origin is in the allowed list
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    return await fn(req, res);
};

// Load resume data
let resumeData;
try {
    resumeData = JSON.parse(fs.readFileSync('resumeData.json', 'utf-8'));
    console.log("Resume data loaded successfully");
} catch (error) {
    console.error("Error loading resume data:", error);
}

// Route to handle chat requests
const chatHandler = async (req, res) => {
    const userMessage = req.body.message;
    const apiKey = process.env.OPENAI_API_KEY;

    // Check if API key is available
    if (!apiKey) {
        console.error("API key is missing");
        return res.status(500).json({ error: "API key is missing" });
    }
    console.log("API key loaded successfully:", apiKey ? "Yes" : "No");
    console.log("Received user message:", userMessage);

    // Predefined responses based on your resume
    const lowerCaseMessage = userMessage.toLowerCase();

    // Custom responses using predefined keywords
    if (lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("technologies")) {
        return res.json({ response: "I am proficient in Python, JavaScript, C#, SQL, Selenium, Appium, Playwright, and tools like Postman, Cypress, and TestRail." });
    }

    if (lowerCaseMessage.includes("summary") || lowerCaseMessage.includes("profile")) {
        return res.json({ response: resumeData?.summary || "Profile information not available." });
    }

    if (lowerCaseMessage.includes("experience")) {
        return res.json({ response: resumeData?.experience?.join(', ') || "Experience details not available." });
    }

    if (lowerCaseMessage.includes("education")) {
        return res.json({ response: resumeData?.education || "Education details not available." });
    }

    if (lowerCaseMessage.includes("certifications")) {
        return res.json({ response: resumeData?.certifications || "No certifications found." });
    }

    if (lowerCaseMessage.includes("contact")) {
        return res.json({ response: resumeData?.contact || "Contact details not available." });
    }

    if (lowerCaseMessage.includes("hobbies") || lowerCaseMessage.includes("interests")) {
        return res.json({ response: resumeData?.hobbies || "I enjoy exploring new technologies, learning automation tools, and caring for my 14 guinea pigs!" });
    }

    if (lowerCaseMessage.includes("guinea pigs")) {
        return res.json({ response: "I have 14 adorable guinea pigs at home. Follow their adventures on Instagram @holisticguinea!" });
    }

    // Fallback to OpenAI API if no predefined response
    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 150,
        temperature: 0.7
    };

    try {
        console.log("Sending request to OpenAI API with body:", requestBody);

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log("Received response from OpenAI API:", data);

        if (!response.ok) {
            console.error('OpenAI API Error:', data);
            return res.status(500).json({ error: "OpenAI API request failed", details: data });
        }

        if (data.choices && data.choices.length > 0) {
            const botMessage = data.choices[0].message.content;
            return res.json({ response: botMessage });
        } else {
            return res.status(500).json({ error: "No response from OpenAI" });
        }
    } catch (error) {
        console.error("Error fetching from OpenAI API:", error);
        return res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
};

// Wrap the route with the CORS handler
app.post('/api/chat', allowCors(chatHandler));

// Export the app for Vercel
export default app;





