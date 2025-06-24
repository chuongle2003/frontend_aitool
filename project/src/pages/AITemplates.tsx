import React, { useState } from 'react';
import { Search, FileText, TrendingUp, Share2, PieChart, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

const categories = [
  { name: 'Tất cả', count: 104, color: 'bg-green-500' },
  { name: 'Marketing', count: 23, color: 'bg-blue-600' },
  { name: 'Kinh doanh', count: 35, color: 'bg-gray-600' },
  { name: 'Nhân sự', count: 9, color: 'bg-gray-700' },
  { name: 'Trợ lý ảo', count: 37, color: 'bg-red-500' },
];

const templates = [
  {
    title: '6 Chiếc Nón Tư Duy',
    icon: AlertTriangle,
    color: 'border-red-200 bg-red-50',
    category: 'Tư duy',
    description: 'Phương pháp tư duy sáng tạo của Edward de Bono'
  },
  {
    title: '3 Lý Do Thuyết Phục Để Khách Hàng Mua...',
    icon: CheckCircle,
    color: 'border-blue-200 bg-blue-50',
    category: 'Marketing',
    description: 'Tạo ra những lý do thuyết phục khách hàng'
  },
  {
    title: 'Bài Giới Thiệu Trên Website',
    icon: FileText,
    color: 'border-indigo-200 bg-indigo-50',
    category: 'Website',
    description: 'Viết bài giới thiệu chuyên nghiệp cho website'
  },
  {
    title: 'Bản Đồ Hành Trình Khách Hàng Chuyên Sâu',
    icon: Share2,
    color: 'border-blue-200 bg-blue-50',
    category: 'Marketing',
    description: 'Phân tích hành trình khách hàng chi tiết'
  },
  {
    title: 'Báo Cáo & Phân Tích HR',
    icon: PieChart,
    color: 'border-gray-200 bg-gray-50',
    category: 'Nhân sự',
    description: 'Tạo báo cáo phân tích nhân sự chuyên nghiệp'
  },
  {
    title: 'Blue Ocean',
    icon: Zap,
    color: 'border-red-200 bg-red-50',
    category: 'Chiến lược',
    description: 'Phát triển chiến lược Blue Ocean cho doanh nghiệp'
  },
];

const AITemplates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'Tất cả' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">AI TEMPLATES</h1>
          <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Khám phá bộ công cụ AI đa dạng giúp tối ưu hóa công việc và nâng cao hiệu suất
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-lg mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm template..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category.name
                ? `${category.color} text-white shadow-md`
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.name} {category.count}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border-2 ${template.color} hover:shadow-lg transition-all cursor-pointer group`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <template.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full">
                {template.category}
              </span>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {template.title}
            </h3>
            
            <p className="text-sm text-gray-600 line-clamp-2">
              {template.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Sử dụng template →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy template</h3>
          <p className="text-gray-600">
            Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.
          </p>
        </div>
      )}
    </div>
  );
};

export default AITemplates;