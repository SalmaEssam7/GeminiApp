// const apiKey = 'AIzaSyBgvgQnW6nEhZi1jrcKeySavdws4JNw6cA';

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold,} from "@google/generative-ai";
  
//   const apiKey = process.env.GEMINI_API_KEY;
  const apiKey = 'AIzaSyBgvgQnW6nEhZi1jrcKeySavdws4JNw6cA';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
                                              //"INSERT_INPUT_HERE"
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
   // console.log(res.text());
  return response.text();
  }
  
//   run();
export default runChat;



// import {GoogleGenerativeAI,HarmCategory,HarmBlockThreshold,} from "@google/generative-ai";
  
//   const apiKey = 'AIzaSyDuMddyRyvnjf2OpGKdCDyfd05xilD2rO8';
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run() {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     const response =result.response;
//     // console.log(result.response.text());
//     console.log("Prompt:", prompt);

//     console.log(response.text());
   
//     return response.text()
//   }
  
  
//   export default run;