# 🚀 快速开始指南

## 第一步：安装和运行

```bash
# 1. 安装依赖（第一次需要，大约需要2-3分钟）
npm install

# 2. 运行开发服务器
npm run dev

# 3. 浏览器打开
http://localhost:3000
```

## 第二步：立即修改这3个地方

### 1️⃣ 修改主播昵称

**文件：`components/sections/Hero.tsx`**

找到第57行：
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 glitch-hover">
  主播昵称  // ← 改成你的主播名字
</span>
```

找到第67行：
```tsx
白天carry队友，晚上唱歌给你听 ✨  // ← 改成你的签名
```

### 2️⃣ 添加真实视频

**文件：`data/videos.json`**

把示例数据改成真实的B站视频：

```json
{
  "id": 1,
  "title": "你的真实视频标题",
  "bvid": "BV1xx411c7mD",  // ← 这里填真实的BV号
  "category": "高光时刻",
  "date": "2024-12-10"
}
```

**如何找BV号？**
- B站视频链接：`https://www.bilibili.com/video/BV1xx411c7mD`
- 复制 `BV1xx411c7mD` 这部分

### 3️⃣ 修改直播间链接

**文件：`components/sections/Hero.tsx`**

找到第90行：
```tsx
<NeonButton 
  href="https://live.bilibili.com/你的直播间房间号"  // ← 改成真实房间号
  variant="cyan"
>
```

**如何找房间号？**
- 你的直播间链接：`https://live.bilibili.com/123456`
- 数字 `123456` 就是房间号

## 第三步：替换主播形象图片

### 1. 准备图片
- 格式：PNG（透明背景最佳）
- 尺寸：推荐 1000x1000 像素
- 命名：`avatar.png`
- 位置：放到 `public/images/` 文件夹

### 2. 修改代码

**文件：`components/sections/Hero.tsx`**

找到第24-42行，把这段占位div **删除或注释掉**：
```tsx
<div className="w-full h-full rounded-full ...">
  <div className="text-center">
    <div className="text-6xl mb-4">👾</div>
    <p className="text-cyan-400 font-bold">请替换为主播形象</p>
    ...
  </div>
</div>
```

然后**取消注释**第43-51行：
```tsx
<Image
  src="/images/avatar.png"
  alt="Virtual Avatar"
  fill
  className="object-contain drop-shadow-2xl"
  priority
/>
```

## 🎉 完成！

刷新浏览器，你应该能看到：
- ✅ 你的主播名字
- ✅ 你的真实视频
- ✅ 正确的直播间链接
- ✅ （如果添加了）主播形象图片

## 下一步做什么？

查看 `README.md` 了解：
- 如何添加更多区域（About, Champions, Music等）
- 如何修改配色
- 如何部署到Vercel

遇到问题随时问！
