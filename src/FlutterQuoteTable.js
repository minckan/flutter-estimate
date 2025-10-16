
import React from 'react';
import { Clock, Code, DollarSign, Package } from 'lucide-react';

export default function FlutterQuoteTable() {
  const projectPackages = [
    {
      name: "심플 패키지",
      price: "120만원 ~ 200만원",
      period: "2~3주",
      features: [
        "5개 이하 화면",
        "기본 UI/UX",
        "간단한 데이터 표시",
        "Firebase 연동 (기본)",
        "앱스토어 배포"
      ],
      examples: "포트폴리오 앱, 카탈로그 앱, 간단한 정보 제공 앱"
    },
    {
      name: "스탠다드 패키지",
      price: "200만원 ~ 400만원",
      period: "1~2개월",
      features: [
        "10개 내외 화면",
        "커스텀 UI/UX",
        "로그인/회원가입",
        "CRUD 기능",
        "푸시 알림",
        "Firebase/Supabase 연동",
        "앱스토어 배포"
      ],
      examples: "커뮤니티 앱, 예약 시스템, 간단한 쇼핑몰"
    },
    {
      name: "프리미엄 패키지",
      price: "400만원 ~ 600만원+",
      period: "2~3개월",
      features: [
        "15개 이상 화면..!",
        "고급 커스텀 UI/UX",
        "복잡한 기능 구현",
        "외부 API 다수 연동",
        "지도/위치 서비스",
        "소셜 기능",
        "실시간 데이터",
        "앱스토어 배포"
      ],
      examples: "복합 서비스 앱, O2O 플랫폼, 금융 앱"
    }
  ];

  const detailPricing = {
    screen: {
      title: "화면 개발",
      icon: <Code className="w-5 h-5" />,
      items: [
        { name: "UI/UX 화면 개발", unit: "화면당", price: "5만원 ~ 30만원", detail: "화면 복잡도에 따라 상이 (간단한 정보 화면 5만원, 복잡한 인터랙션 30만원)" },
        { name: "서버 연동 화면", unit: "화면당", price: "5만원", detail: "서버 API 연동이 필요한 화면은 화면당 5만원 추가 됩니다." }
      ]
    },
    features: {
      title: "기능 개발",
      icon: <Package className="w-5 h-5" />,
      items: [
        { name: "인증 기능 (로그인/회원가입)", unit: "세트", price: "30만원", detail: "Firebase/Supabase 연동, 일반/소셜 로그인 포함" },
        { name: "지도/위치 기반 서비스", unit: "건", price: "60만원", detail: "구글맵/네이버맵 연동" },
        { name: "푸시 알림", unit: "건", price: "20만원", detail: "FCM 연동" },
        { name: "카메라/갤러리 연동", unit: "건", price: "10만원", detail: "이미지 업로드 및 처리" },
        { name: "소셜 공유 기능", unit: "건", price: "15만원", detail: "SNS 공유 연동" },
        { name: "다국어 지원", unit: "건", price: "30만원", detail: "i18n 구현" },
        { name: "유지보수", unit: "건", price: "5만원 ~", detail: "버그수정, 간단 기능 수정" }
      ]
    },
    deployment: {
      title: "앱스토어 배포",
      icon: <Clock className="w-5 h-5" />,
      items: [
        { name: "iOS 앱스토어 배포", unit: "건", price: "20만원", detail: "심사 대응 포함" },
        { name: "Android 플레이스토어 배포", unit: "건", price: "15만원", detail: "심사 대응 포함" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">플러터 앱 개발 견적 가이드</h1>
          </div>
          <p className="text-gray-600 mb-4">
            1인 플러터 개발자의 프로젝트 단위 패키지 및 기능별 상세 단가표입니다.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>💡 개발 방식:</strong> 크로스 플랫폼 (iOS + Android 동시 개발)
            </p>
          </div>
        </div>

        {/* 상세 기능별 단가 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🔧 기능별 상세 단가</h2>
          <p className="text-gray-600 mb-6 text-sm">프로젝트에 필요한 기능별 단가입니다</p>

          {Object.entries(detailPricing).map(([categoryKey, category]) => (
            <div key={categoryKey} className="mb-8 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-700 font-semibold">항목</th>
                      <th className="text-left py-3 px-4 text-gray-700 font-semibold">상세 내용</th>
                      <th className="text-center py-3 px-4 text-gray-700 font-semibold">단위</th>
                      <th className="text-right py-3 px-4 text-gray-700 font-semibold">단가</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-800">{item.name}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{item.detail}</td>
                        <td className="py-4 px-4 text-center text-gray-600">{item.unit}</td>
                        <td className="py-4 px-4 text-right font-semibold text-blue-600 text-lg">
                          ₩{item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* 안내사항 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📌 중요 안내사항</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">1.</span>
              <span><strong>백엔드 API:</strong> 백엔드 개발은 불가하며, 클라이언트가 준비해야 합니다 (Firebase, Supabase 등 BaaS 활용 권장)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">2.</span>
              <span><strong>디자인:</strong> UI/UX 디자인은 클라이언트가 제공해야 합니다. 디자인이 없는 경우 기본 UI로 개발하거나 외부 디자이너 섭외 필요</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">3.</span>
              <span><strong>개발자 계정:</strong> 앱스토어 등록을 위한 개발자 계정은 클라이언트가 준비 (iOS 연 129,000원, Android 평생 $25)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">4.</span>
              <span><strong>유지보수:</strong> 배포 후 유지보수는 별도 계약</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">5.</span>
              <span><strong>소스코드:</strong> 프로젝트 완료 후 전체 소스코드 제공</span>
            </div>
          </div>
        </div>

        {/* 문의 CTA */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-3 text-center">프로젝트 문의하기</h3>
          <p className="mb-6 text-center">정확한 견적은 프로젝트 상담 후 확정됩니다. 부담없이 문의해주세요!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const email = 'minc0317@daum.net';
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(email);
                  alert('이메일 주소(minc0317@daum.net)가 복사되었습니다!');
                } else {
                  alert('이메일 주소: minc0317@daum.net');
                }
              }}
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md w-full sm:w-auto justify-center cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              이메일 문의 (주소 복사)
            </button>

            <button
              onClick={() => {
                const kakaoId = 'minc317';
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(kakaoId);
                  alert('카카오톡 ID(minc317)가 복사되었습니다!\n카카오톡에서 검색해주세요.');
                } else {
                  alert('카카오톡 ID: minc317\n카카오톡에서 검색해주세요.');
                }
              }}
              className="flex items-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-md w-full sm:w-auto justify-center cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.211.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857 0h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.211.472.471.472h1.932a.472.472 0 1 0 0-.944zm2.523.472a.471.471 0 0 0 .471-.472V9.297a.472.472 0 1 0-.943 0v4.687c0 .261.211.472.472.472z" />
              </svg>
              카카오톡 문의 (ID 복사)
            </button>
          </div>

          <div className="text-sm opacity-90 text-center mt-4">
            💡 이메일 또는 카카오톡으로 편하게 연락주세요
          </div>
        </div>
      </div>
    </div>
  );
}