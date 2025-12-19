# 🎮 LOL虚拟主播网站 - 基础版Starter

一个炫酷的虚拟主播个人网站，采用赛博朋克风格设计，适合英雄联盟游戏主播使用。

## ✨ 已完成的功能

### 1. 核心组件
- ✅ **霓虹按钮** (`components/ui/NeonButton.tsx`)
  - 支持3种配色：青色、粉色、金色
  - 扫描线动画 + 霓虹光晕效果
  - 支持链接和点击事件

- ✅ **玻璃卡片** (`components/ui/GlassCard.tsx`)
  - 磨砂玻璃效果
  - 滚动触发淡入动画
  - Hover悬停效果

- ✅ **粒子背景** (`components/effects/ParticlesBg.tsx`)
  - 动态粒子网络
  - 鼠标交互（Grab模式）
  - 点击添加粒子

### 2. 页面区域
- ✅ **Hero区域** (`components/sections/Hero.tsx`)
  - 虚拟形象展示位（待替换图片）
  - 主播信息介绍
  - 直播状态标签
  - 社交链接快捷入口
  - 粒子背景 + 网格装饰

- ✅ **视频区域** (`components/sections/Videos.tsx`)
  - B站视频嵌入播放
  - 视频列表切换
  - 响应式布局
  - 玻璃态卡片设计

### 3. 样式系统
- ✅ **Tailwind配置** - 自定义赛博朋克配色
- ✅ **全局CSS** - 霓虹、故障、玻璃态等特效
- ✅ **自定义滚动条** - 赛博风格

## 📋 待完成的区域（你需要添加）

```
app/page.tsx 中已留好TODO标记：

- [ ] About - 关于主播区域
- [ ] Champions - 擅长英雄展示
- [ ] Schedule - 直播时间表
- [ ] Music - 歌单展示
- [ ] Contact - 社交链接完整版
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行开发服务器

```bash
npm run dev
```

浏览器打开：http://localhost:3000

### 3. 开始定制

#### 📝 修改主播信息

**Hero区域文字** (`components/sections/Hero.tsx`)
```tsx
// 第57行附近
<span className="...">
  主播昵称  // ← 改成真实昵称
</span>

// 第67行
白天carry队友，晚上唱歌给你听 ✨  // ← 改成你的签名
```

**直播间链接**
```tsx
// 第90行
href="https://live.bilibili.com/你的直播间房间号"
```

#### 🎬 添加真实视频

**编辑 `data/videos.json`**
```json
{
  "id": 1,
  "title": "你的视频标题",
  "bvid": "BV1xx411c7mD",  // ← B站视频的BV号
  "category": "高光时刻/教学视频/唱歌",
  "date": "2024-12-10",
  "description": "视频描述"
}
```

**如何获取BV号？**
B站视频链接：`https://www.bilibili.com/video/BV1xx411c7mD`
其中 `BV1xx411c7mD` 就是BV号

#### 🖼️ 替换主播形象

1. 准备一张透明背景PNG图片（推荐尺寸：1000x1000）
2. 放到 `public/images/avatar.png`
3. 在 `Hero.tsx` 中取消第47-54行的注释：

```tsx
<Image
  src="/images/avatar.png"
  alt="Virtual Avatar"
  fill
  className="object-contain drop-shadow-2xl"
  priority
/>
```

4. 注释掉第30-44行的占位div

#### 🎨 修改配色（可选）

**编辑 `tailwind.config.ts`**
```typescript
colors: {
  cyber: {
    cyan: '#00d9ff',    // ← 主色调（青色）
    pink: '#ff2e97',    // ← 辅助色（粉色）
    purple: '#b537f2',  // ← 辅助色（紫色）
    gold: '#ffd700',    // ← 点缀色（金色）
  }
}
```

## 📂 项目结构

```
vtuber-starter/
├── app/
│   ├── page.tsx              # 主页（组合所有区域）
│   ├── layout.tsx            # 全局布局 + SEO
│   └── globals.css           # 全局样式（特效CSS）
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # ✅ Hero区域
│   │   └── Videos.tsx        # ✅ 视频区域
│   ├── ui/
│   │   ├── NeonButton.tsx    # ✅ 霓虹按钮
│   │   └── GlassCard.tsx     # ✅ 玻璃卡片
│   └── effects/
│       └── ParticlesBg.tsx   # ✅ 粒子背景
├── data/
│   └── videos.json           # 视频数据
├── public/
│   └── images/
│       └── avatar.png        # ⚠️ 需要你添加
└── tailwind.config.ts        # Tailwind配置
```

## 🎓 学习资源

### 如果你想添加新区域：

1. **参考已有组件**
   - 看 `Videos.tsx` 学习如何使用 `GlassCard`
   - 看 `Hero.tsx` 学习如何使用动画

2. **Framer Motion 文档**
   - 官网：https://www.framer.com/motion/
   - 常用动画：`initial`, `animate`, `whileHover`, `whileInView`

3. **参考示例（我之前发给你的）**
   - Champions（英雄池）区域代码
   - Music（歌单）区域代码
   - 直接复制粘贴，然后改数据

## 🐛 常见问题

### Q: npm install 很慢？
A: 使用国内镜像：
```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### Q: 粒子背景不显示？
A: 确保 `@tsparticles` 相关包正确安装：
```bash
npm install @tsparticles/react @tsparticles/slim
```

### Q: 视频无法播放？
A: 检查 `data/videos.json` 中的BV号是否正确

### Q: 如何添加新的区域？
A: 
1. 在 `components/sections/` 创建新组件
2. 参考 `Videos.tsx` 的结构
3. 在 `app/page.tsx` 中导入并使用

## 📦 部署

### 部署到Vercel（推荐）

1. 把代码推送到GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/你的仓库名
git push -u origin main
```

2. 去 [vercel.com](https://vercel.com)
   - 用GitHub登录
   - 点击 "New Project"
   - 导入你的仓库
   - 点击 "Deploy"

3. 等待部署完成（2-3分钟）

就这么简单！你会得到一个 `xxx.vercel.app` 的网址

### 自定义域名

在Vercel项目设置中添加你买的域名即可。

## 💡 接下来的步骤

1. ✅ **立即完成**
   - [ ] 修改主播昵称和简介
   - [ ] 替换虚拟形象图片
   - [ ] 添加真实的B站视频BV号
   - [ ] 修改直播间链接

2. 📅 **本周完成**
   - [ ] 添加 About 区域（自我介绍）
   - [ ] 添加 Champions 区域（擅长英雄）
   - [ ] 添加 Schedule 区域（直播时间）

3. 🎵 **下周完成**
   - [ ] 添加 Music 区域（歌单）
   - [ ] 添加 Contact 区域（完整社交链接）
   - [ ] 响应式优化（手机端测试）

4. 🚀 **最后一周**
   - [ ] 性能优化
   - [ ] 部署到Vercel
   - [ ] 给主播看效果
   - [ ] 根据反馈调整

## 🆘 需要帮助？

遇到问题就问我！我会帮你：
- 解释代码逻辑
- 添加新功能
- 修复bug
- 优化性能

祝开发顺利！💪
