export default function FeaturedArea(){
    return(
        <>
<div className="flex flex-col">

  <div className="flex space-x-4 mb-4">
    <input type="text" placeholder="Nhập từ khóa" className="flex-1 p-2 rounded-md border border-gray-300" />
    <select className="p-2 rounded-md border border-gray-300">
      <option>Khu vực</option>
      {/* Các tùy chọn khác */}
    </select>
  </div>


  <div className="flex flex-wrap space-x-4">
    <div className="flex-1 min-w-[120px] mb-2">
      <select className="w-full p-2 rounded-md border border-gray-300">
        <option>Tòa nhà</option>
        {/* Các tùy chọn khác */}
      </select>
    </div>
    <div className="flex-1 min-w-[120px] mb-2">
      <select className="w-full p-2 rounded-md border border-gray-300">
        <option>Giá</option>
        {/* Các tùy chọn khác */}
      </select>
    </div>
    <div className="flex-1 min-w-[120px] mb-2">
      <select className="w-full p-2 rounded-md border border-gray-300">
        <option>Diện tích</option>
        {/* Các tùy chọn khác */}
      </select>
    </div>
    <div className="flex-1 min-w-[120px] mb-2">
      <button className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
        Lọc
      </button>
    </div>
  </div>
</div>
        </>
    )
}