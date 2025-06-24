import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  CreditCard, 
  Crown,
  MessageCircle,
  FileText,
  Activity,
  TrendingUp
} from 'lucide-react';

const Profile: React.FC = () => {
  const stats = [
    {
      title: 'BTG',
      value: '999.923.460 BTG',
      icon: CreditCard,
      color: 'text-blue-600'
    },
    {
      title: 'Đoạn chat',
      value: '113',
      icon: MessageCircle,
      color: 'text-green-600'
    },
    {
      title: 'Số bài viết được tạo',
      value: '113',
      icon: FileText,
      color: 'text-purple-600'
    },
  ];

  const activities = [
    {
      title: 'Sử dụng template "Bài giới thiệu website"',
      time: '2 giờ trước',
      type: 'template'
    },
    {
      title: 'Tạo đoạn chat mới với AI',
      time: '4 giờ trước',
      type: 'chat'
    },
    {
      title: 'Nạp thêm 50.000 BTG',
      time: '1 ngày trước',
      type: 'payment'
    },
    {
      title: 'Kích hoạt template "Marketing Facebook"',
      time: '2 ngày trước',
      type: 'template'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Thông tin tài khoản</h1>
        <p className="text-gray-600">Xem và quản lý thông tin cá nhân của bạn</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Tran Van Thao</h2>
            <div className="flex items-center space-x-2 mt-1">
              <Crown className="w-4 h-4 text-orange-500" />
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                Gói chuyên gia
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">thaotran@bit.vn</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">HSD: 17/06/2028</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Dùng Ngay
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              <Crown className="w-4 h-4 inline mr-2" />
              Nâng Cấp
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Tổng quan</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                Tháng này
              </button>
              <button className="px-3 py-1 text-gray-500 text-sm font-medium rounded-full hover:bg-gray-100">
                Tất cả
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Số dư BTG</p>
                  <p className="text-sm text-gray-600">Còn lại trong tài khoản</p>
                </div>
              </div>
              <span className="text-lg font-bold text-blue-600">999.923.460</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Đoạn chat</p>
                  <p className="text-sm text-gray-600">Tổng số cuộc trò chuyện</p>
                </div>
              </div>
              <span className="text-lg font-bold text-green-600">113</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Bài viết tạo</p>
                  <p className="text-sm text-gray-600">Từ AI templates</p>
                </div>
              </div>
              <span className="text-lg font-bold text-purple-600">113</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h3>
          </div>
          
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'template' ? 'bg-blue-100' :
                  activity.type === 'chat' ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  {activity.type === 'template' && <FileText className="w-4 h-4 text-blue-600" />}
                  {activity.type === 'chat' && <MessageCircle className="w-4 h-4 text-green-600" />}
                  {activity.type === 'payment' && <CreditCard className="w-4 h-4 text-orange-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
            Xem tất cả hoạt động →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;