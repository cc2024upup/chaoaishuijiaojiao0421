'use client'
import { motion } from 'framer-motion'

interface NeonButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'cyan' | 'pink' | 'gold'
  className?: string
}

export default function NeonButton({ 
  children, 
  href, 
  onClick, 
  variant = 'cyan',
  className = ''
}: NeonButtonProps) {
  // 根据variant选择颜色
  const colors = {
    cyan: {
      text: 'text-cyan-400',
      border: 'border-cyan-400',
      glow: 'bg-cyan-400/20 group-hover:bg-cyan-400/40',
      gradient: 'from-transparent via-cyan-400/30 to-transparent',
      shadow: 'shadow-cyan-400/50'
    },
    pink: {
      text: 'text-pink-400',
      border: 'border-pink-400',
      glow: 'bg-pink-400/20 group-hover:bg-pink-400/40',
      gradient: 'from-transparent via-pink-400/30 to-transparent',
      shadow: 'shadow-pink-400/50'
    },
    gold: {
      text: 'text-yellow-400',
      border: 'border-yellow-400',
      glow: 'bg-yellow-400/20 group-hover:bg-yellow-400/40',
      gradient: 'from-transparent via-yellow-400/30 to-transparent',
      shadow: 'shadow-yellow-400/50'
    }
  }

  const color = colors[variant]
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`
        relative px-8 py-3 font-bold 
        ${color.text} ${color.border}
        border-2 rounded-lg 
        overflow-hidden group
        transition-all duration-300
        hover:scale-105 active:scale-95
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 霓虹光晕背景 */}
      <div className={`
        absolute inset-0 ${color.glow}
        blur-xl transition-all duration-300
      `} />
      
      {/* 扫描线动画 */}
      <motion.div
        className={`
          absolute inset-0 
          bg-gradient-to-r ${color.gradient}
        `}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: 'linear',
          repeatDelay: 1 
        }}
      />
      
      {/* 边框阴影 */}
      <div className={`
        absolute inset-0 rounded-lg
        shadow-lg ${color.shadow}
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      `} />
      
      {/* 按钮文字 */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  )
}
