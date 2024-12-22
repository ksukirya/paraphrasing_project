const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample paraphrasing logic (placeholder)
function paraphraseText(text) {
    const synonyms = {
        example: "instance",
        test: "experiment",
        "is a": "is an",
        simple: "basic",
    };
    return text
        .split(" ")
        .map((word) => synonyms[word.toLowerCase()] || word)
        .join(" ");
}

// API endpoint
app.post('/paraphrase', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input text.' });
    }
    const paraphrasedText = paraphraseText(text);
    res.json({ paraphrasedText });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
