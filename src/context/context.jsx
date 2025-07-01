import { createContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Create Context
export const Context = createContext();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE"); // Replace with your API key

// Context Provider
const ContextProvider = (props) => {
    const [recentPrompts, setRecentPrompts] = useState([]);
    const [response, setResponse] = useState("");

    // ✅ This is the function that handles the API call
    const onSent = async (prompt) => {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const result = await model.generateContent(prompt);
            const res = await result.response;
            const text = res.text();

            // ✅ Log the prompt and response in the console
            console.log("🔹 Prompt:", prompt);
            console.log("🔸 Response from Gemini:", text);

            // ✅ Update state
            setResponse(text);
            setRecentPrompts((prev) => [...prev, prompt]);
        } catch (error) {
            console.error("❌ Error generating content:", error);
        }
    };

    // ✅ Context value shared with entire app
    const contextValue = {
        onSent,
        response,
        recentPrompts,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
