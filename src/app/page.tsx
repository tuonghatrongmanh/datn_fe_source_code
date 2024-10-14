import Card from '@/components/Card';

const Home: React.FC = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      image: 'https://tromoi.com/uploads/static/phong_tro_hcm/Quan_10/234_NguyenTriPhuong/234_NguyenTriPhuong_G12_hinh35-min.png' // Link ảnh
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: 'https://tromoi.com/uploads/static/phong_tro_can_tho/Khudancu91B/Khudancu91B_hinh2.jpg' // Link ảnh
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      image: 'https://tromoi.com/uploads/static/phong_tro_hcm/Quan_5/169_HungVuong/169_HungVuong_hinh3.jpg' // Link ảnh
    },
    {
      title: 'Card 4',
      description: 'This is the fourth card.',
      image: 'https://tromoi.com/uploads/static/phong_tro_hcm/Quan_Tan_Binh/622.28_CongHoa/622_28_CongHoa_hinh1.jpg' // Link ảnh
    },
  ];

  return (
    <>
   {/* Start Banner */}
   <div className="relative">
  <div>
    <img src="/image/banner.jpg" alt="banner" className="w-full" />
  </div>

  <div className="absolute inset-0 flex flex-col justify-center gap-6 px-10 text-white">
    <div className="text-4xl font-bold">
      <p className="py-1">TÌM NHANH KIẾM DỄ</p>
      <p className="py-1 text-[#FF5C00]">TRỌ MỚI TOÀN QUỐC</p>
    </div>
    <div>
      <p>Trang thông tin và cho thuê phòng trọ nhanh chóng, hiệu quả với hơn 500 tin đăng mới và 30.000 lượt xem mỗi ngày</p>
    </div>
  </div>

  {/* Filter bar container */}
  <div className="absolute w-full" style={{ top: '90%' }}> 
    {/* Adjust top value (e.g., 80%) to move it upwards */}
    <div className="relative w-full h-20 -mt-10"> {/* -mt-10 moves the input bar up */}
      <div className="absolute top-0 left-0 right-0 bg-[#00008B] flex space-x-4 px-10 py-6 rounded-md justify-center">
        {/* Input Field */}
        <input type="text" placeholder="Nhập từ khóa" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-80 h-12" />

        {/* Dropdown Khu vực */}
        <div className="relative inline-block">
          <select className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-60 h-12">
            <option>Khu vực</option>
          </select>
        </div>

        {/* Dropdown Tòa nhà */}
        <div className="relative inline-block">
          <select className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-60 h-12">
            <option>Tòa nhà</option>
          </select>
        </div>

        {/* Dropdown Giá */}
        <div className="relative inline-block">
          <select className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-60 h-12">
            <option>Giá</option>
          </select>
        </div>

        {/* Dropdown Diện tích */}
        <div className="relative inline-block">
          <select className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-60 h-12">
            <option>Diện tích</option>
          </select>
        </div>

        {/* Button Lọc */}
        <button className="bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 w-40 h-12">
          Lọc
        </button>
      </div>
    </div>
  </div>
</div>
   {/* End Banner */}


   {/*Start Featured Area*/}
   <div className="py-10 bg-white">

  <div className="text-center mb-6">
    <h2 className="text-4xl font-bold">
      <span className="text-blue-900">KHU VỰC </span>
      <span className="text-orange-500">NỔI BẬT</span>
    </h2>
  </div>


  <div className="grid grid-cols-6 gap-6 px-10">
    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/126%20Binh%20Ky/126%20Binh%20Ky%20(1).jpg" alt="Quận Gò Vấp" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Gò Vấp</p>
    </div>

  
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/243%20Ton%20Duc%20Thang/243%20Ton%20Duc%20Thang%20(4).jpg" alt="Quận Tân Bình" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Tân Bình</p>
    </div>

    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/Thanh%20Luong%201/Thanh%20Luong%201%20(1).jpg" alt="Quận Bình Tân" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Bình Tân</p>
    </div>

    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/81%20Nguyen%20Xuan%20Nhi/81%20Nguyen%20Xuan%20Nhi%20(1).jpg" alt="Quận Tân Phú" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Tân Phú</p>
    </div>

    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_can_tho/Khudancu91B/Khudancu91B_hinh2.jpg" alt="Quận 12" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận 12</p>
    </div>

    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_Tan_Binh/622.28_CongHoa/622_28_CongHoa_hinh1.jpg" alt="Quận Hóc Môn" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Hóc Môn</p>
    </div>
  </div>
</div>
   {/*End Featured Area*/}


   {/*Start Card Featured*/}
   <div className="py-10 bg-white">
  <div className="px-10 mb-8">
    <h2 className="text-4xl font-bold">
      <span className="text-blue-900">Phòng trọ </span>
      <span className="text-orange-500">nổi bật</span>
    </h2>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
    
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_1/373.10_PhamNguLao/373_10_PhamNguLao_hinh5.png" alt="Property 1" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 55/9 đường Lý Thường Kiệt</h3>
        <p className="text-orange-500 text-xl font-bold">3,800,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>

 
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/guest/1722586834267_ee3c439d8713224d7b02.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_Tan_Binh/622.28_CongHoa/622_28_CongHoa_hinh1.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_can_tho/Hemliento12-20_NguyenVanCunoidai/Hemliento12-20_NguyenVanCunoidai_hinh2.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/10-12_PhuocTuong11/10-12_PhuocTuong11_hinh1.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_Binh_Thanh/14_DongDa/14_DongDa_hinh3.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/84A_NguyenThiMinhKhai/84A_NguyenThiMinhKhai_hinh5.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_hue/78_TungThienVuong/78_TungThienVuong_hinh4.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>



  </div>
</div>
   {/*End Featured Card*/}

   {/*Start Frame */}
   <div className='bg-[#00008B] w-full h-32 rounded-md'></div>
   {/*End Frame */}

   {/*Start Room Trống*/}
   <div className="py-10 bg-white">
  <div className="px-10 mb-8">
    <h2 className="text-4xl font-bold">
      <span className="text-blue-900">Còn 24 phòng </span>
      <span className="text-orange-500">đang trống</span>
    </h2>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
    
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong-tro-ha-noi/25_PhuMinh/25_PhuMinh_hinh1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 55/9 đường Lý Thường Kiệt</h3>
        <p className="text-orange-500 text-xl font-bold">3,800,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>

 
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong-tro-ha-noi/530_ThuyKhue/530_ThuyKhue_hinh4.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/guest/1727323373073_1.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/Tran%20Huy%20Lieu/Tran%20Huy%20Lieu%20(1).jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/Hoang%20Minh%20Thao/Hoang%20Minh%20Thao%20(5).jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong-tro-ha-noi/Ngo230_MeTriThuong/Ngo230_MeTriThuong_hinh1.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/354%20To%20Hieu/354%20To%20Hieu%20(3).jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_can_tho/Hem359_NguyenVanCu/Hem359_NguyenVanCu_hinh5.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>



  </div>
</div>
   {/*End Featured Card*/}
   {/*Start Room Trống*/}
   <div className="py-10 bg-white">
  <div className="px-10 mb-8">
    <h2 className="text-4xl font-bold">
      <span className="text-blue-900">Còn 157 phòng </span>
      <span className="text-orange-500">đang trống</span>
    </h2>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
    
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/100%20Hoai%20Thanh/100%20Hoai%20Thanh%20(3).jpg" alt="Property 1" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 55/9 đường Lý Thường Kiệt</h3>
        <p className="text-orange-500 text-xl font-bold">3,800,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>

 
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_7/768_LeVanLuong/768_LeVanLuong_hinh1.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/47-23%20Huynh%20Ngoc%20Hue/47-23%20Huynh%20Ngoc%20Hue%20(2).jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/33%20Ha%20Bong/33%20Ha%20Bong%20(2).jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_Go_Vap/736_PhamVanBach/736_PhamVanBach_hinh6.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/guest/1722586834267_ee3c439d8713224d7b02.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/guest/1722586834267_ee3c439d8713224d7b02.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src="https://tromoi.com/uploads/guest/1722586834267_ee3c439d8713224d7b02.jpg" alt="Property 2" className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded">Nổi bật</span>
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-3M7 10h10m-1-5h2a2 2 0 012 2v3a2 2 0 01-2 2h-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3H7a2 2 0 01-2-2V7a2 2 0 012-2h2m-1 0v3" />
          </svg>
          12 phòng trống
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số 90 Phạm Văn Đồng</h3>
        <p className="text-orange-500 text-xl font-bold">8,500,000 VND</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Quận 12</span>
          <span>Từ 12 - 24 m²</span>
          <span>Xem bản đồ</span>
        </div>
      </div>
    </div>



  </div>
</div>
   {/*End Featured Card*/}

  {/*Start Frame */}
  <div className='bg-[#00008B] w-full h-32 rounded-md'></div>
   {/*End Frame */}

   {/*Start tin tức nổi bật*/}
   <div className="py-10 bg-white">

  <div className="text-center mb-6">
    <h2 className="text-4xl font-bold">
      <span className="text-blue-900">TIN TỨC </span>
      <span className="text-blue-900">NỔI BẬT</span>
    </h2>
  </div>


  <div className="grid grid-cols-6 gap-6 px-10">
    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/126%20Binh%20Ky/126%20Binh%20Ky%20(1).jpg" alt="Quận Gò Vấp" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Gò Vấp</p>
    </div>

  
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/243%20Ton%20Duc%20Thang/243%20Ton%20Duc%20Thang%20(4).jpg" alt="Quận Tân Bình" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Tân Bình</p>
    </div>

    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/Thanh%20Luong%201/Thanh%20Luong%201%20(1).jpg" alt="Quận Bình Tân" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Bình Tân</p>
    </div>

    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_da_nang/81%20Nguyen%20Xuan%20Nhi/81%20Nguyen%20Xuan%20Nhi%20(1).jpg" alt="Quận Tân Phú" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Tân Phú</p>
    </div>

    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_can_tho/Khudancu91B/Khudancu91B_hinh2.jpg" alt="Quận 12" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận 12</p>
    </div>

    
    <div className="text-center">
      <img src="https://tromoi.com/uploads/static/phong_tro_hcm/Quan_Tan_Binh/622.28_CongHoa/622_28_CongHoa_hinh1.jpg" alt="Quận Hóc Môn" className="w-full h-48 object-cover rounded-lg"/>
      <p className="mt-2 text-gray-700">Quận Hóc Môn</p>
    </div>
  </div>
</div>
   {/*End tin tức nổi bật*/}

    <div className="flex flex-col min-h-screen items-center justify-center">
      <main className="flex-grow container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image} // Truyền link ảnh vào prop image
            />
          ))}
        </div>
      </main>
    </div>
    </>
  );
}

export default Home;
