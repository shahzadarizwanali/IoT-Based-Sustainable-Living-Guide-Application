import React, { useState } from 'react';
import { IoIosLeaf } from "react-icons/io";

const suggestionsList = [
    "Show today's pollution levels",
    "Give me sustainable tips",
    "Predict future air quality",
    "What does my carbon footprint mean?",
    "How can I reduce CO₂ emissions?"
];

const responses = {
    "Show today's pollution levels": "Today's air pollution level is Moderate. Stay indoors if you're sensitive!",
    "Give me sustainable tips": "Try using reusable bags, cycling, and reducing plastic use!",
    "Predict future air quality": "Based on our data, air quality is expected to worsen by 12% tomorrow.",
    "What does my carbon footprint mean?": "It measures the greenhouse gases you're responsible for. Lower is better!",
    "How can I reduce CO₂ emissions?": "Carpooling, energy-efficient appliances, and planting trees help a lot!"
};

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: 'bot',
            text: "🌱 Hello! I'm your AI assistant for Green Metrics. How may I assist you today?"
        }
    ]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [typing, setTyping] = useState(false);
    const [inputText, setInputText] = useState("");

    const addMessage = (from, text) => {
        setMessages((prev) => [...prev, { from, text }]);
    };

    const handleUserInput = (userText) => {
        addMessage("user", userText);
        setTyping(true);
        setShowSuggestions(false);

        setTimeout(() => {
            const botResponse = responses[userText] || "Let me look into that for you!";
            addMessage("bot", botResponse);
            setTyping(false);

            fetch("http://localhost:8000/api/save-chat/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_query: userText, bot_response: botResponse })
            });
        }, 1500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        handleUserInput(inputText);
        setInputText("");
    };

    return (
        <div className="chatbot-wrapper">
            <div className="chatbot-icon" onClick={() => setOpen(!open)}>
                <IoIosLeaf />
            </div>

            {open && (
                <div className="chatbot-window">
                    <div className="chatbot-topbar">
                        <div className="profile">
                            <div className="leaf-icon">🍃</div>
                            <div>
                                <strong>GreenBot</strong>
                                <div className="status">🟢 Online</div>
                            </div>
                        </div>
                        <div className="close-btn" onClick={() => setOpen(false)} style={{ cursor: 'pointer' }}>
                            ✖
                        </div>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-msg ${msg.from}`}>
                                {msg.text}
                            </div>
                        ))}
                        {typing && <div className="chat-msg bot typing">...
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>}
                    </div>

                    {showSuggestions && (
                        <div className="suggestions">
                            {suggestionsList.map((suggestion, i) => (
                                <button key={i} onClick={() => handleUserInput(suggestion)}>
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className="input-bar" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Type your question here..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit">➤</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
