import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Bot, 
  Gift, 
  CreditCard, 
  TrendingUp, 
  MessageCircle,
  FileText,
  Eye,
  ArrowRight
} from 'lucide-react';

const stats = [
  {
    title: 'NGƯỜI DÙNG',
    value: '162',
    icon: Users,
    color: 'bg-teal-500',
    link: '/users'
  },
  {
    title: 'MÔ HÌNH AI',
    value: '28',
    icon: Bot,
    color: 'bg-green-500',
    link: '/ai-models'
  },
  {
    title: 'THẺ QUÀ TẶNG',
    value: '6',
    icon: Gift,
    color: 'bg-yellow-500',
    link: '/gift-codes'
  },
  {
    title: 'THANH TOÁN',
    value: '26',
    icon: CreditCard,
    color: 'bg-slate-600',
    link: '/payments'
  },
];

const templates = [
  {
    title: 'Bài Giới Thiệu Trên Website',
    icon: FileText,
    color: 'border-blue-200 bg-blue-50',
    category: 'Website'
  },
  {
    title: 'Dịch Mọi Ngôn Ngữ',
    icon: MessageCircle,
    color: 'border-purple-200 bg-purple-50',
    category: 'Translation'
  },
  {
    title: 'Facebook - Viết Bài Đăng Bán',
    icon: TrendingUp,
    color: 'border-indigo-200 bg-indigo-50',
    category: 'Marketing'
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Tổng quan hệ thống AI Tools</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            to={stat.link}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-blue-600 mt-4 group-hover:text-blue-700">
              Xem thêm
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">2025 Tổng quan thanh toán</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-gray-600">Thanh toán thành công</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-gray-600">Thanh toán đang chờ</span>
              </div>
            </div>
          </div>
          
          <div className="h-80 flex items-end justify-between space-x-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
              <div key={month} className="flex flex-col items-center space-y-2 flex-1">
                <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '200px' }}>
                  <div 
                    className="bg-blue-400 rounded-t absolute bottom-0 w-full transition-all hover:bg-blue-500"
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  ></div>
                  <div 
                    className="bg-blue-600 absolute bottom-0 w-full transition-all hover:bg-blue-700"
                    style={{ height: `${Math.random() * 60 + 10}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Tổng quan trạng thái thanh toán</h3>
          </div>
          
          <div className="flex items-center justify-center h-80">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="20"
                  strokeDasharray="220, 31.4"
                  strokeLinecap="round"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="20"
                  strokeDasharray="31.4, 220"
                  strokeDashoffset="-220"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                  <p className="text-sm text-gray-600">Thành công</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Người dùng có VÍ</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Người dùng không có ví</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Templates */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              <Bot className="w-5 h-5 inline mr-2 text-blue-600" />
              Tạo nội dung dễ dàng với AI Form
            </h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Thường sử dụng nhất
              </button>
              <Link
                to="/ai-templates"
                className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                Xem tất cả
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${template.color} hover:shadow-md transition-all cursor-pointer group`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <template.icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {template.title}
                </h4>
                <p className="text-sm text-gray-600">{template.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;