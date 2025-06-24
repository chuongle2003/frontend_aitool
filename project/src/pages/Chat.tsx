import React, { useState } from "react";
import { Send, Plus, Mic, ArrowUp, Bot } from "lucide-react";

const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4.1 Nano");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col  bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              ChatAIVN2030
            </h2>
            <p className="text-sm text-gray-500">AI Assistant</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="GPT-4.1 Nano">GPT-4.1 Nano</option>
            <option value="GPT-4 Turbo">GPT-4 Turbo</option>
            <option value="Claude 3">Claude 3</option>
            <option value="Gemini Pro">Gemini Pro</option>
          </select>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Bot className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Xin chào! Tôi có thể giúp gì cho bạn?
          </h3>
          <p className="text-gray-600 max-w-md">
            Hãy bắt đầu cuộc trò chuyện bằng cách nhập tin nhắn của bạn bên
            dưới. Tôi sẵn sàng hỗ trợ bạn với mọi câu hỏi.
          </p>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-end space-x-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Plus className="w-5 h-5" />
          </button>

          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập tin nhắn..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={1}
              style={{ minHeight: "44px", maxHeight: "120px" }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="absolute right-2 bottom-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Mic className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-3">
          <p className="text-xs text-gray-500">
            © 2025 VIE NAM 2030 AI - Bản và các chuyên gia AI đồng hành cùng
            bạn. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
