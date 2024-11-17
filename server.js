import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';

dotenv.config();

const app = express();
//const PORT = process.env.PORT || 8080;
// Enable CORS for all requests
app.use((req, res, next) => {
    const allowedOrigins = ['https://huliamartin77.github.io', 'https://huliamartin77-github-io-git-main-yulia-martins-projects.vercel.app'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});
// Serve static files (like HTML, CSS, JS) from the current directory
app.use(express.static('.'));

// Middleware to parse JSON bodies
app.use(express.json());

// Load resume data
const resumeData = JSON.parse(fs.readFileSync('resumeData.json', 'utf-8'));

app.use(express.static('.'));
app.use(express.json());

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
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

    // Custom responses
if (lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("technologies")) {
    return res.json({ response: "I am proficient in Python, JavaScript, C#, SQL, Selenium, Appium, Playwright, and tools like Postman, Cypress, and TestRail." });
}
if (lowerCaseMessage.includes("summary") || lowerCaseMessage.includes("profile")) {
    return res.json({ response: "I am a skilled Software QA Specialist with over 8 years of experience in automation, Agile practices, and continuous improvement." });
}
if (lowerCaseMessage.includes("experience")) {
    return res.json({ response: "I have held roles as an SDET, QA Manager, and Lead QA Engineer at companies like CDK Global, Mark43, Amada America, and Agosto." });
}
if (lowerCaseMessage.includes("projects")) {
    return res.json({ response: "I have led projects involving automation frameworks using Selenium, Cypress, Appium, and Playwright to streamline testing processes." });
}
if (lowerCaseMessage.includes("cdk global")) {
    return res.json({ response: "At CDK Global, I implemented C# test frameworks using Selenium and SpecFlow, enhancing automation and project delivery." });
}
if (lowerCaseMessage.includes("mark43")) {
    return res.json({ response: "At Mark43, I built QA teams, created automation frameworks, and improved QA reporting systems for better visibility." });
}
if (lowerCaseMessage.includes("amada america")) {
    return res.json({ response: "As Lead QA Engineer at Amada America, I developed test frameworks, conducted mobile testing, and ensured software quality." });
}
if (lowerCaseMessage.includes("migrations")) {
    return res.json({ response: "I managed CRM migrations and QA processes, ensuring data integrity and seamless transitions for clients." });
}
if (lowerCaseMessage.includes("agosto")) {
    return res.json({ response: "At Agosto, I developed mobile automation frameworks using Python and Appium for iOS and Android platforms." });
}
if (lowerCaseMessage.includes("bleachr")) {
    return res.json({ response: "At Bleachr, I built automation frameworks using Selenium with C#, enhancing test efficiency for mobile apps." });
}
if (lowerCaseMessage.includes("skills")) {
    return res.json({ response: "My technical skills include Python, JavaScript, Selenium, Cypress, Appium, SQL, and experience with Git and GitLab." });
}
if (lowerCaseMessage.includes("tools")) {
    return res.json({ response: "I am proficient in using tools like Visual Studio, IntelliJ, PyCharm, TestRail, and Jira for agile project tracking." });
}
if (lowerCaseMessage.includes("education")) {
    return res.json({ response: "I graduated from the University of Minnesota with a degree in Software Quality Assurance and Computer Science." });
}
if (lowerCaseMessage.includes("certifications")) {
    return res.json({ response: "I am certified in CompTIA Security+, Advanced Computer Forensics, Cloud Computing Security, and Software Assurance." });
}
if (lowerCaseMessage.includes("hobbies") || lowerCaseMessage.includes("interests")) {
    return res.json({ response: "I enjoy exploring new technologies, learning automation tools, and caring for my 14 guinea pigs!" });
}
if (lowerCaseMessage.includes("guinea pigs")) {
    return res.json({ response: "I have 14 adorable guinea pigs at home. They are featured on my Instagram @holisticguinea where I share their adventures!" });
}
if (lowerCaseMessage.includes("contact")) {
    return res.json({ response: "You can reach me at yuliamartin67@gmail.com or (612) 300-7597 for any inquiries." });
}
if (lowerCaseMessage.includes("achievements")) {
    return res.json({ response: "I reduced manual testing efforts by implementing automation, managed diverse teams, and led successful QA projects." });
}
if (lowerCaseMessage.includes("methodologies")) {
    return res.json({ response: "I follow Agile and Scrum methodologies to ensure efficient project delivery and collaboration." });
}
if (lowerCaseMessage.includes("languages")) {
    return res.json({ response: "I am proficient in Python, JavaScript, C#, and SQL." });
}
if (lowerCaseMessage.includes("qa")) {
    return res.json({ response: "I have expertise in Quality Assurance, focusing on automation, performance testing, and UI testing." });
}
if (lowerCaseMessage.includes("agile")) {
    return res.json({ response: "I have extensive experience with Agile and Scrum methodologies, managing sprints and PI planning." });
}
if (lowerCaseMessage.includes("automation")) {
    return res.json({ response: "I specialize in automation testing using Selenium, Cypress, Appium, and Playwright." });
}
if (lowerCaseMessage.includes("team management")) {
    return res.json({ response: "I have led QA teams, trained engineers on tools like Selenium, Cucumber, and Postman, and enhanced team collaboration." });
}
if (lowerCaseMessage.includes("leadership")) {
    return res.json({ response: "I have experience leading teams, serving as a Scrum Master, and ensuring project alignment with business goals." });
}
if (lowerCaseMessage.includes("work ethic")) {
    return res.json({ response: "I am dedicated, detail-oriented, and passionate about delivering high-quality software solutions." });
}
if (lowerCaseMessage.includes("pet lover")) {
    return res.json({ response: "Yes, I am a pet lover! My guinea pigs are like family, and I enjoy spending time caring for them." });
}
if (lowerCaseMessage.includes("about you")) {
    return res.json({ response: "I am Yulia Martin, a Software QA Specialist with a passion for automation, team leadership, and pet care." });
}
if (lowerCaseMessage.includes("social media")) {
    return res.json({ response: "You can follow my guinea pig adventures on Instagram @holisticguinea." });
}
if (lowerCaseMessage.includes("current projects")) {
    return res.json({ response: "Currently, I am exploring new automation tools and optimizing existing test frameworks for better performance." });
}


    // If no predefined response, fallback to OpenAI API
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
            console.log("Bot response:", botMessage);
            res.json({ response: botMessage });
        } else {
            console.error("No valid response from OpenAI:", data);
            res.status(500).json({ error: "No response from OpenAI" });
        }
    } catch (error) {
        console.error("Server error while fetching response from OpenAI:", error);
        res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
});

/*app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/

export default app;








