import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 3000;

// __dirname setup for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OpenRouter client
const client = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
baseURL: "https://openrouter.ai/api/v1",
});

// Middleware
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// Chat API
app.post("/api/chat", async (req, res) => {
const { message } = req.body;

if (!message || !message.trim()) {
    return res.status(400).json({
    error: "Message cannot be empty.",
    });
}

try {
    const response = await client.responses.create({
    model: "cohere/north-mini-code:free",
    input: message,
    });

res.json({
    reply: response.output_text,
    });
} catch (error) {
    console.error("AI Request Failed:", error.message);
res.status(500).json({
    error: "Verity couldn't process your message right now.",
    });
}
});

// Start server
app.listen(PORT, () => {
console.log(`Verity is running at http://localhost:${PORT}`);
});
