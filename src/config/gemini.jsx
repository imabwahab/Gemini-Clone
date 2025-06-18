const GEMINI_API_KEY = 'AIzaSyC0zvS33u41xvGC2vjPjcnhnPdr6pznAEg';

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

async function runChat(prompt) {
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.0-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  const resultText = response.candidates[0]?.content?.parts[0]?.text || '';

  console.log(resultText);

  return resultText; 
}

export default runChat;

