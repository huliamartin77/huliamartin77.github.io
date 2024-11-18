import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS with a more robust setup
app.use((req, res, next) => {
    const allowedOrigins = [
        'https://huliamartin77.github.io',
        'https://huliamartin77-github-io.vercel.app',
        'https://huliamartin77-github-io-git-main-yulia-martins-projects.vercel.app',
        'https://huliamartin77-github-fr2r68ejf-yulia-martins-projects.vercel.app',
        'https://huliamartin77-github-je0azooqk-yulia-martins-projects.vercel.app'
    ];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }
    next();
});

// Serve static files
app.use(express.static('.'));

// Load resume data
const resumeData = JSON.parse(fs.readFileSync('resumeData.json', 'utf-8'));

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "API key is missing" });
    }

    console.log("Received user message:", userMessage);

    if (userMessage.toLowerCase().includes("python")) {
        return res.json({ response: "I am proficient in Python, JavaScript, and automation tools." });
    }

    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 150,
        temperature: 0.7
    };

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            return res.json({ response: data.choices[0].message.content });
        } else {
            return res.status(500).json({ error: "No response from OpenAI" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
});

export default app;






