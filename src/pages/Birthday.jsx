import React from 'react';
import CoinRain from '../components/CoinRain'; // 可选：金币动画组件
import BackgroundMusic from '../components/BackgroundMusic';
import Cake from '../components/Cake';
import BlessingMessages from '../components/BlessingMessages';

const Birthday = () => {
  return (
    <div
    className="flex flex-col items-center justify-start min-h-screen w-screen bg-cover bg-center pt-10"
    style={{ backgroundImage: "url('/bg4.png')" }}
    >

      {/* 金币动画层：可加 z-index */}
      <CoinRain />
      <BackgroundMusic />
      {/* 背景音乐层：可加 z-index */}
      {/* 文字祝福内容 */}

      {/* 🎉 祝福文字移至顶部 */}
      <div className="text-center z-10 px-4 mb-4">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
          🎉 小钱！生日快乐！
        </h1>
        <p className="text-2xl text-gray-800">ALL THE BEST TO 小钱没有钱！</p>
      </div>
      {/* 🎂 蛋糕 + 按钮 */}
        {/* 🎂 蛋糕动画：放在居中容器中 */}
        <div className="flex-grow flex items-center justify-center z-10 px-4">
        <Cake />
        </div>

      {/* 祝福语逐一浮现 */}
      <BlessingMessages />
    {/* ⬇️ 按钮固定到底部 */}
    <div className="z-10 px-4 mt-auto mb-8">
        <button
        onClick={() => window.location.href = '/'}
        className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 shadow"
        >
        返回首页
        </button>
      </div>
    </div>
  );
};

export default Birthday;
