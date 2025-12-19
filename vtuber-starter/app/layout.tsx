import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LOL虚拟主播 - 游戏与歌声的完美结合',
  description: '英雄联盟游戏主播，擅长中单/上单，下播后还会给水友唱歌！每周直播不见不散~',
  keywords: 'LOL主播, 英雄联盟, 虚拟主播, 游戏直播, B站主播',
  authors: [{ name: '真的超爱睡觉觉' }],
  openGraph: {
    title: 'LOL虚拟主播',
    description: '英雄联盟游戏主播，大乱斗常驻病号主播，支持水友点歌',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
