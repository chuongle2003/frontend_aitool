import React, { useState } from 'react';
import { 
  Smartphone, 
  Users, 
  ShoppingCart, 
  Settings as SettingsIcon,
  Plus,
  Store,
  Globe,
  CheckCircle,
  AlertCircle,
  Key,
  BarChart3
} from 'lucide-react';

const ZaloMiniApp: React.FC = () => {
  const [hasPartnerAccess, setHasPartnerAccess] = useState(false);
  const [stores, setStores] = useState<any[]>([]);

  const platforms = [
    {
      name: 'WordPress',
      icon: Globe,
      color: 'bg-blue-600',
      description: 'Tích hợp với website WordPress'
    },
    {
      name: 'Haravan',
      icon: Store,
      color: 'bg-green-600',
      description: 'Kết nối với nền tảng Haravan'
    },
  ];

  const stats = [
    {
      title: 'Người dùng',
      value: '1,245',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Đơn hàng',
      value: '342',
      icon: ShoppingCart,
      color: 'text-green-600'
    },
    {
      title: 'Doanh thu',
      value: '45.2M',
      icon: BarChart3,
      color: 'text-purple-600'
    },
  ];

  const handleAddStore = () => {
    const newStore = {
      id: stores.length + 1,
      name: `Cửa hàng ${stores.length + 1}`,
      platform: 'WordPress',
      status: 'active'
    };
    setStores([...stores, newStore]);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Zalo Mini App</h1>
        <p className="text-gray-600">Quản lý ứng dụng mini trên nền tảng Zalo</p>
      </div>

      {/* Partner Access Status */}
      <div className={`p-6 rounded-xl border-2 ${
        hasPartnerAccess 
          ? 'bg-green-50 border-green-200' 
          : 'bg-orange-50 border-orange-200'
      }`}>
        <div className="flex items-center space-x-3 mb-4">
          {hasPartnerAccess ? (
            <CheckCircle className="w-6 h-6 text-green-600" />
          ) : (
            <AlertCircle className="w-6 h-6 text-orange-600" />
          )}
          <h3 className="text-lg font-semibold text-gray-900">
            {hasPartnerAccess ? 'Partner đã được kích hoạt' : 'Yêu cầu đăng ký Partner'}
          </h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          {hasPartnerAccess 
            ? 'Bạn đã có quyền truy cập Partner và có thể quản lý Zalo Mini App.'
            : 'Để sử dụng Zalo Mini App, bạn cần đăng ký làm Partner để có quyền truy cập.'
          }
        </p>
        
        {!hasPartnerAccess && (
          <button
            onClick={() => setHasPartnerAccess(true)}
            className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            <Key className="w-4 h-4 inline mr-2" />
            Đăng ký Partner
          </button>
        )}
      </div>

      {hasPartnerAccess && (
        <>
          {/* Store Management */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Quản lý cửa hàng</h3>
              <button
                onClick={handleAddStore}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Thêm cửa hàng
              </button>
            </div>
            
            {stores.length === 0 ? (
              <div className="text-center py-8">
                <Store className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Chưa có cửa hàng nào được thêm</p>
                <p className="text-sm text-gray-500 mt-1">
                  Thêm thông tin cửa hàng để bắt đầu tích hợp với các nền tảng
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {stores.map((store) => (
                  <div key={store.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Store className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{store.name}</p>
                        <p className="text-sm text-gray-600">Nền tảng: {store.platform}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Hoạt động
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Cấu hình
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Platform Integration */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Tích hợp nền tảng</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg ${platform.color}`}>
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900">{platform.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                  <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Kết nối →
                  </button>
                </div>
              ))}
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
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Management */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Quản lý người dùng</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Xem và quản lý danh sách người dùng sử dụng Mini App
              </p>
              <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                Xem danh sách người dùng
              </button>
            </div>

            {/* Order Management */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <ShoppingCart className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Quản lý đơn hàng</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Theo dõi và xử lý các đơn hàng từ Mini App
              </p>
              <button className="w-full bg-green-50 text-green-600 py-2 rounded-lg font-medium hover:bg-green-100 transition-colors">
                Xem danh sách đơn hàng
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ZaloMiniApp;