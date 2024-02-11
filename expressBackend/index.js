const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config()


const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const PORT = 5001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
	const message = req.body;
	console.log(message.mess);
	const response = await openai.completions.create({
		model: 'gpt-3.5-turbo-instruct',
		prompt: message.mess,
		temperature: 0.9,
		max_tokens: 64,
		top_p: 1,
		presence_penalty: 0.6,
	});
	console.log(response.choices[0].text)
	res.json({
		message: response.choices[0].text
	})
});

app.listen(PORT, function () {
	console.log('server started on port: ', PORT);
});
