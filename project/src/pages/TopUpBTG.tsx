import React, { useState } from 'react';
import { 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Gift,
  Check,
  ArrowRight,
  Plus
} from 'lucide-react';

const TopUpBTG: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(100000);
  const [selectedMethod, setSelectedMethod] = useState('bank');

  const predefinedAmounts = [50000, 100000, 200000, 500000, 1000000, 2000000];
  
  const paymentMethods = [
    {
      id: 'bank',
      name: 'Chuyển khoản ngân hàng',
      icon: Banknote,
      description: 'Chuyển khoản qua Internet Banking hoặc ATM',
      fee: 0
    },
    {
      id: 'momo',
      name: 'Ví MoMo',
      icon: Smartphone,
      description: 'Thanh toán nhanh chóng qua ví điện tử MoMo',
      fee: 2.5
    },
    {
      id: 'card',
      name: 'Thẻ tín dụng/ghi nợ',
      icon: CreditCard,
      description: 'Thanh toán bằng thẻ Visa, Mastercard',
      fee: 3.0
    },
  ];

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + ' VNĐ';
  };

  const calculateBTG = (amount: number) => {
    return amount; // 1 VNĐ = 1 BTG
  };

  const calculateFee = (amount: number, feePercent: number) => {
    return Math.round(amount * feePercent / 100);
  };

  const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedMethod);
  const fee = selectedPaymentMethod ? calculateFee(selectedAmount, selectedPaymentMethod.fee) : 0;
  const totalAmount = selectedAmount + fee;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Nạp BTG</h1>
        <p className="text-gray-600">Nạp BTG vào tài khoản để sử dụng các dịch vụ AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Amount Selection */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Chọn số tiền nạp</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <p className="font-medium">{formatCurrency(amount)}</p>
                  <p className="text-xs text-gray-500">≈ {calculateBTG(amount).toLocaleString()} BTG</p>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hoặc nhập số tiền khác
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="10000"
                  step="10000"
                />
                <span className="absolute right-3 top-2 text-gray-500">VNĐ</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Số tiền tối thiểu: 10.000 VNĐ
              </p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Phương thức thanh toán</h3>
            
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      selectedMethod === method.id ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <method.icon className={`w-5 h-5 ${
                        selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">{method.name}</p>
                        {method.fee > 0 && (
                          <span className="text-sm text-orange-600">
                            +{method.fee}% phí
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      selectedMethod === method.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedMethod === method.id && (
                        <Check className="w-3 h-3 text-white m-0.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Offer */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <Gift className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Ưu đãi đặc biệt!</h3>
            </div>
            <p className="mb-4">
              Nạp từ 500.000 VNĐ trở lên và nhận thêm 5% BTG bonus
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-sm">
                {selectedAmount >= 500000 
                  ? `🎉 Bạn sẽ nhận thêm ${Math.round(selectedAmount * 0.05).toLocaleString()} BTG bonus!`
                  : `Nạp thêm ${formatCurrency(500000 - selectedAmount)} để nhận bonus 5%`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tóm tắt đơn hàng</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Số tiền nạp:</span>
                <span className="font-medium">{formatCurrency(selectedAmount)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">BTG nhận được:</span>
                <span className="font-medium">{calculateBTG(selectedAmount).toLocaleString()} BTG</span>
              </div>
              
              {selectedAmount >= 500000 && (
                <div className="flex justify-between text-green-600">
                  <span>Bonus 5%:</span>
                  <span className="font-medium">+{Math.round(selectedAmount * 0.05).toLocaleString()} BTG</span>
                </div>
              )}
              
              {fee > 0 && (
                <div className="flex justify-between text-orange-600">
                  <span>Phí thanh toán:</span>
                  <span className="font-medium">{formatCurrency(fee)}</span>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Tổng thanh toán:</span>
                  <span className="text-blue-600">{formatCurrency(totalAmount)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
              Tiến hành thanh toán
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 text-center">
                Bằng cách tiếp tục, bạn đồng ý với các điều khoản và điều kiện của chúng tôi
              </p>
            </div>
          </div>

          {/* Current Balance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Số dư hiện tại</h3>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">999.923.460</p>
                <p className="text-sm text-gray-600">BTG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpBTG;