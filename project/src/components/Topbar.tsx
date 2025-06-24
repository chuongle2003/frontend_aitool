import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  User,
  CreditCard,
  Crown,
  ChevronDown,
  LogOut,
  Settings,
} from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowUserMenu(false);
    navigate("/profile");
  };

  const handleTopUpClick = () => {
    setShowUserMenu(false);
    navigate("/top-up");
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-20 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          {/* Main navigation tabs */}
          <nav className="hidden md:flex space-x-2 text-sm">
            <Link
              to="/ai-templates"
              className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              AI Templates
            </Link>
            <Link
              to="/ai-chatbox"
              className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Đăng ký AI Chatbox
            </Link>
            <Link
              to="/zalo-mini-app"
              className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Đăng ký Zalo Mini App
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="block w-full max-w-xs pl-10 pr-3 py-2 ml-2 text-sm rounded-lg border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BTG Balance */}
          <div className="hidden sm:flex items-center bg-green-50 px-3 py-1.5 rounded-lg">
            <CreditCard className="w-4 h-4 text-green-600 mr-2" />
            <span className="whitespace-nowrap text-sm font-semibold text-green-700 p-2">
              999.923.460 BTG
            </span>
          </div>

          <Link
            to="/upgrade"
            className="whitespace-nowrap hidden sm:flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg text-xs font-medium transition-colors duration-500 shadow-md hover:shadow-lg"
          >
            <Crown className="w-4 h-4 mr-2" />
            Nâng cấp gói
          </Link>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg px-2 py-2 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block text-left max-w-[120px] truncate">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Tran Van Thao
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Gói chuyên gia
                  </p>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-30">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <User className="w-4 h-4 mr-3" />
                  Xem thông tin tài khoản
                </button>

                <button
                  onClick={handleTopUpClick}
                  className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <CreditCard className="w-4 h-4 mr-3 text-green-600" />
                  <span className="font-medium text-green-700">Nạp BTG</span>
                </button>

                <div className="border-t border-gray-100 my-1"></div>

                <Link
                  to="/settings"
                  className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowUserMenu(false)}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Cài đặt
                </Link>

                <button className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50">
                  <LogOut className="w-4 h-4 mr-3" />
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
