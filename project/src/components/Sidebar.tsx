import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MessageCircle,
  FileText,
  Bot,
  Smartphone,
  Settings,
  X,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Bảng Điều Khiển", href: "/dashboard", icon: LayoutDashboard },
  { name: "Chat", href: "/chat", icon: MessageCircle },
];

const sections = [
  {
    name: "AI Templates",
    href: "/ai-templates",
    icon: FileText,
    children: [
      { name: "Tất cả templates", href: "/ai-templates" },
      { name: "Marketing", href: "/ai-templates/marketing" },
      { name: "Kinh Doanh", href: "/ai-templates/business" },
      { name: "Nhân Sự", href: "/ai-templates/hr" },
      { name: "Trợ Lý Ảo", href: "/ai-templates/assistant" },
    ],
  },
  {
    name: "AI Chatbot",
    href: "/ai-chatbox",
    icon: Bot,
    children: [
      { name: "Quản lý Chatbot", href: "/ai-chatbox" },
      { name: "Tin nhắn", href: "/ai-chatbox/messages" },
      { name: "Cấu hình", href: "/ai-chatbox/config" },
    ],
  },
  {
    name: "Zalo Mini App",
    href: "/zalo-mini-app",
    icon: Smartphone,
    children: [
      { name: "Tổng quan", href: "/zalo-mini-app" },
      { name: "Quản lý người dùng", href: "/zalo-mini-app/users" },
      { name: "Quản lý đơn hàng", href: "/zalo-mini-app/orders" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((name) => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (href: string) => {
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              AI Tools
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Fixed top navigation */}
        <div className="px-4 pt-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Scrollable sections */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 border-t border-gray-100">
          {sections.map((section) => (
            <div key={section.name} className="mb-2">
              <button
                onClick={() => toggleSection(section.name)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(section.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center">
                  <section.icon className="w-5 h-5 mr-3" />
                  {section.name}
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    expandedSections.includes(section.name) ? "rotate-90" : ""
                  }`}
                />
              </button>

              {expandedSections.includes(section.name) && (
                <div className="ml-8 mt-1 space-y-1">
                  {section.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive(child.href)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fixed bottom settings */}
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/settings"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive("/settings")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Cài Đặt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
