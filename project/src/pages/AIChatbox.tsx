import React, { useState } from 'react';
import { 
  Bot, 
  MessageCircle, 
  Settings as SettingsIcon, 
  Users, 
  BarChart3, 
  Plus,
  Facebook,
  MessageSquare,
  Smartphone,
  Key,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const AIChatbox: React.FC = () => {
  const [hasPartnerAPI, setHasPartnerAPI] = useState(false);
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([]);

  const platforms = [
    {
      name: 'Zalo OA',
      icon: MessageSquare,
      color: 'bg-blue-500',
      description: 'Kết nối với Zalo Official Account'
    },
    {
      name: 'Zalo cá nhân',
      icon: Smartphone,
      color: 'bg-green-500',
      description: 'Kết nối với tài khoản Zalo cá nhân'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      description: 'Kết nối với Facebook Messenger'
    },
  ];

  const stats = [
    {
      title: 'Tin nhắn hôm nay',
      value: '1,234',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      title: 'Người dùng hoạt động',
      value: '456',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Tỷ lệ phản hồi',
      value: '98.5%',
      icon: BarChart3,
      color: 'text-purple-600'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Chatbox</h1>
        <p className="text-gray-600">Quản lý và cấu hình chatbot AI cho các nền tảng</p>
      </div>

      {/* Partner API Status */}
      <div className={`p-6 rounded-xl border-2 ${
        hasPartnerAPI 
          ? 'bg-green-50 border-green-200' 
          : 'bg-orange-50 border-orange-200'
      }`}>
        <div className="flex items-center space-x-3 mb-4">
          {hasPartnerAPI ? (
            <CheckCircle className="w-6 h-6 text-green-600" />
          ) : (
            <AlertCircle className="w-6 h-6 text-orange-600" />
          )}
          <h3 className="text-lg font-semibold text-gray-900">
            {hasPartnerAPI ? 'API Partner đã kích hoạt' : 'Yêu cầu đăng ký Partner'}
          </h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          {hasPartnerAPI 
            ? 'Bạn đã có API Key và có thể kết nối với các nền tảng chatbot.'
            : 'Để sử dụng AI Chatbox, bạn cần đăng ký Partner để nhận API Key.'
          }
        </p>
        
        {!hasPartnerAPI && (
          <button
            onClick={() => setHasPartnerAPI(true)}
            className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            <Key className="w-4 h-4 inline mr-2" />
            Đăng ký Partner ngay
          </button>
        )}
      </div>

      {hasPartnerAPI && (
        <>
          {/* Platform Connections */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Kết nối nền tảng</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Thêm kết nối
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {platforms.map((platform) => {
                const isConnected = connectedPlatforms.includes(platform.name);
                return (
                  <div
                    key={platform.name}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isConnected
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => {
                      if (isConnected) {
                        setConnectedPlatforms(prev => prev.filter(p => p !== platform.name));
                      } else {
                        setConnectedPlatforms(prev => [...prev, platform.name]);
                      }
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg ${platform.color}`}>
                        <platform.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{platform.name}</h4>
                        {isConnected && (
                          <span className="text-xs text-green-600 font-medium">● Đã kết nối</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{platform.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chatbot Configuration */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Cấu hình Chatbot</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                <SettingsIcon className="w-4 h-4 inline mr-1" />
                Cài đặt nâng cao
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên Chatbot
                </label>
                <input
                  type="text"
                  defaultValue="AI Assistant"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mô hình AI
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>GPT-4.1 Nano</option>
                  <option>GPT-4 Turbo</option>
                  <option>Claude 3</option>
                  <option>Gemini Pro</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prompt hệ thống
                </label>
                <textarea
                  rows={4}
                  defaultValue="Bạn là một trợ lý AI thông minh và hữu ích. Hãy trả lời một cách lịch sự và chuyên nghiệp."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Hủy
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Lưu cấu hình
              </button>
            </div>
          </div>

          {/* Message Management */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quản lý tin nhắn</h3>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Người dùng {item}</p>
                    <p className="text-sm text-gray-600">Tin nhắn gần nhất: 2 phút trước</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Hoạt động
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChatbox;