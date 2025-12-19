'use client'
import { motion } from 'framer-motion'
import ParticlesBg from '../effects/ParticlesBg'
import NeonButton from '../ui/NeonButton'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 粒子背景 */}
      <ParticlesBg />
      
      {/* 渐变背景层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      
      {/* 网格背景（可选） */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 217, 255, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container-custom z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* 左侧：虚拟形象 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* 光晕效果 */}
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-purple-500/20 to-transparent blur-3xl animate-pulse" />
              
              {/* 虚拟形象图片 */}
              <div className="relative w-full h-full">
                {/* 占位图 - 你需要替换成真实的主播虚拟形象 */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border-4 border-cyan-400/30">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👾</div>
                    <p className="text-cyan-400 font-bold">请替换为主播形象</p>
                    <p className="text-xs text-gray-400 mt-2">
                      /public/images/avatar.png
                    </p>
                  </div>
                </div>
                {/* 
                  真实使用时取消注释：
                  <Image
                    src="/images/avatar.png"
                    alt="Virtual Avatar"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                */}
              </div>
              
              {/* 旋转光环 */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border-2 border-purple-400/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>
          </motion.div>
          
          {/* 右侧：文字信息 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left order-1 md:order-2"
          >
            {/* 主标题 - 故障文字效果 */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 glitch-hover">
                真的超爱睡觉觉
              </span>
            </motion.h1>
            
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-gray-300 mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>🎮</span>
              <span>英雄联盟 · 虚拟主播</span>
            </p>
            
            <p className="text-base md:text-lg text-gray-400 mb-8">
              大乱斗嘎嘎carry，唱歌嘎嘎好听 ✨
            </p>
            
            {/* 状态标签 */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <motion.span 
                className="px-4 py-2 bg-red-500/20 border border-red-500 rounded-full text-red-400 text-sm font-semibold flex items-center gap-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                正在直播
              </motion.span>
              
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-full text-purple-400 text-sm font-semibold">
                大乱斗
              </span>
              
              <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500 rounded-full text-yellow-400 text-sm font-semibold">
                🎵 会唱歌
              </span>
            </div>
            
            {/* 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NeonButton 
                href="https://live.bilibili.com/30690138"
                variant="cyan"
              >
                <span>📺</span>
                进入直播间
              </NeonButton>
              
              <NeonButton 
                onClick={() => {
                  document.getElementById('videos')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                variant="pink"
              >
                <span>🎬</span>
                查看精彩
              </NeonButton>
            </div>
            
            {/* 社交链接快捷入口 */}
            <motion.div 
              className="mt-8 flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="#" className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors">
                📺 {/* B站 */}
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-pink-400 transition-colors">
                🎵 {/* 音乐平台 */}
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-purple-400 transition-colors">
                💬 {/* QQ群 */}
              </a>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* 向下滚动指示器 */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-cyan-400 text-3xl opacity-50">↓</div>
      </motion.div>
    </section>
  )
}
