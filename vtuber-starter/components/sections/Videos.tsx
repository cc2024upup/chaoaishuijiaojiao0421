'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import GlassCard from '../ui/GlassCard'
import videosData from '@/data/videos.json'

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState(videosData[0])
  
  return (
    <section id="videos" className="py-20 px-4 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400">
              🎬 精彩集锦
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            觉觉游戏集锦 · 翻唱歌曲
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 主播放器 */}
          <div className="lg:col-span-2">
            <GlassCard hover={false} className="!p-0 overflow-hidden">
              {/* B站视频嵌入 */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`//player.bilibili.com/player.html?bvid=${activeVideo.bvid}&page=1&high_quality=1&danmaku=0`}
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              
              {/* 视频信息 */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activeVideo.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {activeVideo.category}
                      </span>
                      <span className="text-gray-400">
                        {activeVideo.date}
                      </span>
                    </div>
                  </div>
                  
                  {/* 直接跳转B站按钮 */}
                  <a
                    href={`https://space.bilibili.com/2103816454`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg border border-pink-500/30 hover:bg-pink-500/30 transition-all text-sm font-semibold whitespace-nowrap"
                  >
                    在B站观看 →
                  </a>
                </div>
                
                {activeVideo.description && (
                  <p className="text-gray-400 mt-4">
                    {activeVideo.description}
                  </p>
                )}
              </div>
            </GlassCard>
          </div>
          
          {/* 视频列表 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 px-2">
              更多视频
            </h3>
            
            <div className="space-y-3 max-h-[600px] overflow-y-auto hide-scrollbar">
              {videosData.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveVideo(video)}
                  className={`
                    p-4 rounded-lg cursor-pointer transition-all duration-300
                    ${activeVideo.id === video.id 
                      ? 'bg-cyan-400/20 border-2 border-cyan-400 scale-105' 
                      : 'bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* 视频序号/图标 */}
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm
                      ${activeVideo.id === video.id 
                        ? 'bg-cyan-500/30 text-cyan-400' 
                        : 'bg-white/5 text-gray-400'
                      }
                    `}>
                      {index + 1}
                    </div>
                    
                    {/* 视频信息 */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 truncate">
                        {video.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`
                          ${activeVideo.id === video.id 
                            ? 'text-cyan-400' 
                            : 'text-gray-400'
                          }
                        `}>
                          {video.category}
                        </span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">
                          {video.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* 播放指示器 */}
                    {activeVideo.id === video.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-cyan-400 text-xl"
                      >
                        ▶
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* 查看更多按钮 */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://space.bilibili.com/2103816454"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-all font-semibold"
          >
            <span>📺</span>
            更多视频在B站主页
            <span>→</span>
          </a>
        </motion.div>
        
      </div>
    </section>
  )
}
