import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string; // Thêm prop cho hình ảnh
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <>
    <div className="border p-4 rounded-lg shadow-lg">
      {/* Hiển thị hình ảnh */}
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
      
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    <script async src="https://cse.google.com/cse.js?cx=75d60ccaaec544d04">
    </script>
    </div>
    </>
  );
}

export default Card;
