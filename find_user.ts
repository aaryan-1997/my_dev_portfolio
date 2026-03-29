import { GoogleGenAI } from "@google/genai";

async function findUserInfo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find professional details for Ram Niwas Singh, a Senior Flutter Developer. Look for his LinkedIn profile info, current role, skills, and projects. URL: https://www.linkedin.com/in/ram-niwas-singh-ab642a164/",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}

findUserInfo();
