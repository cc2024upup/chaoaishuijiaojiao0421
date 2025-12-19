import Hero from '@/components/sections/Hero'
import Videos from '@/components/sections/Videos'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero区域 - 已完成 */}
      <Hero />
      
      {/* 视频区域 - 已完成 */}
      <Videos />
      
      {/* 
        TODO: 后续添加的区域
        <About />      关于主播
        <Champions />  擅长英雄
        <Schedule />   直播时间
        <Music />      歌单展示
        <Contact />    社交链接
      */}
    </main>
  )
}
