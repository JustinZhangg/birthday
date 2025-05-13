import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const Home = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const checkBirthday = () => {
    const today = currentTime.format('MM-DD');
    const birthday = '05-14'; // 替换为用户的生日
    if (today === birthday) {
      navigate('/birthday');
    } else {
      alert('还没到呢！急啥！');
    }
  };

 return (
 <div
  className="flex items-center justify-center min-h-screen w-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/bg1.jpg')" }}
 >
 <div className="text-center px-4  p-6">
 <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
    还没到时间呢！此路不通！
 </h1>
 <p className="text-xl mb-6 text-white">
     看这 ：{currentTime.format('YYYY-MM-DD HH:mm:ss')}
 </p>
 <button
     onClick={checkBirthday}
     className=" px-4 py-2 rounded hover:bg-gray-200 shadow"
 >
     现在我是老大了！
 </button>
 </div>
 </div>
    );
};

export default Home;
