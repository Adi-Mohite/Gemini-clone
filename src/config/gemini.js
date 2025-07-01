// Save this file as main.mjs if you're using ES Modules, or adjust accordingly for CommonJS

import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key
const genAI = new GoogleGenerativeAI("AIzaSyDPExmYypUVG8HOPOWGj9CY6M49STrQIsM");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Explain how AI works in a few words";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log("Response from Gemini:");
  console.log(text);
}

run().catch(console.error);
