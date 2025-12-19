'use client'
import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'

/**
 * About 关于主播区域
 * 
 * 这是一个示例组件，展示如何：
 * 1. 使用GlassCard玻璃卡片
 * 2. 实现滚动触发动画
 * 3. 布局响应式设计
 * 
 * 使用方法：
 * 1. 修改下面的数据为真实信息
 * 2. 在 app/page.tsx 中导入并使用：
 *    import About from '@/components/sections/About'
 *    <About />
 */

export default function About() {
  // 你的数据 - 修改这里
  const stats = [
    { label: '粉丝数', value: '10.5K', icon: '👥' },
    { label: '直播时长', value: '2000+小时', icon: '⏰' },
    { label: '擅长英雄', value: '中单/上单', icon: '🎮' },
  ]

  const features = [
    {
      title: '游戏技术',
      description: '全能王你知道吗，但学技术的出去',
      icon: '⚔️',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: '搞笑担当',
      description: '会定期录制游戏视频，看完不笑的可以确诊玉玉症了',
      icon: '📚',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: '唱歌好听',
      description: '下播前都会给水友唱歌，擅长流行、民谣等风格',
      icon: '🎵',
      color: 'from-pink-400 to-red-500'
    },
    {
      title: '互动友好',
      description: '积极回复弹幕，和粉丝互动，直播氛围轻松愉快',
      icon: '💬',
      color: 'from-yellow-400 to-orange-500'
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              👋 关于我
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            一个热爱LOL的虚拟主播，用游戏和歌声陪伴每一位水友
          </p>
        </motion.div>

        {/* 数据统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* 特色介绍 */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="flex items-start gap-4">
                  {/* 图标 */}
                  <div className={`
                    text-4xl w-16 h-16 rounded-xl
                    flex items-center justify-center
                    bg-gradient-to-br ${feature.color}
                    shadow-lg
                  `}>
                    {feature.icon}
                  </div>
                  
                  {/* 内容 */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* 个人介绍文字 */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false}>
            <p className="text-gray-300 leading-relaxed text-center">
              大家好！我是 <span className="text-cyan-400 font-bold">真的超爱睡觉觉</span>，
              一名热爱英雄联盟的虚拟主播。从S5赛季开始接触LOL，
              忠实的大乱斗爱好者，也会跟水友一起玩一些steam联机游戏。
              除了游戏技术，我还很喜欢唱歌，每次下播前都会给水友们来一首。
              希望能在直播间和大家一起分享快乐，共同进步！✨
            </p>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  )
}
