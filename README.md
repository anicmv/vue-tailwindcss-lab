# vue-tailwindcss-lab

一个基于 **Vue 3 + Vite + Tailwind CSS v4** 的前端练习仓库，聚焦于常见 UI 交互效果实现。项目通过首页统一入口，按路由拆分多个独立 Demo，适合用来练习组件化、动效与响应式布局。

## 项目定位

- 技术验证型项目（Lab）
- 每个页面是一个独立 UI Demo，低耦合、易扩展
- 以 Tailwind Utility Class 为主，快速表达样式

## 已实现 Demo

- 多列瀑布流（`/multi-column-waterfall`）
- 导航菜单悬停动画（`/nav-menu-hover-effect`）
- 顶部导航栏（`/top-nav-bar`）
- 悬停预览相册列表（`/hover-preview-album-list`）
- 扩展卡片视图（`/expanding-cards-view`）
- 旋转导航动画（`/rotating-nav-animation`）
- 进度步骤条（`/progress-steps`）
- 哔哩哔哩导航栏仿制（`/bilibili-bar`）

## 技术栈

- Vue `3.5.x`
- Vue Router `5.x`
- Vite `7.x`
- Tailwind CSS `4.x`（通过 `@tailwindcss/vite` 集成）

## 代码结构

```text
src
├─ components
│  └─ BackHome.vue               # 可拖拽“返回首页”浮动按钮
├─ router
│  └─ index.js                   # 路由定义与 Demo 元数据（pages）
├─ views                          # 各个 Demo 页面
│  ├─ Home.vue                    # Demo 列表页（入口）
│  ├─ MultiColumnWaterfall.vue
│  ├─ NavMenuHoverEffect.vue
│  ├─ TopNavBar.vue
│  ├─ HoverPreviewAlbumList.vue
│  ├─ ExpandingCardsView.vue
│  ├─ RotatingNavAnimation.vue
│  ├─ ProgressSteps.vue
│  └─ BilibiliBar.vue
├─ App.vue                        # 仅渲染 router-view
├─ main.js                        # 应用挂载入口
└─ style.css                      # 全局引入 Tailwind
```

## 运行方式

### 环境要求

- Node.js: `^20.19.0` 或 `>=22.12.0`

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 本地预览构建产物

```bash
npm run preview
```

## 关键实现说明

- 路由层通过 `pages` 数组统一维护 Demo 元信息（`name/title/path/component`），首页复用该数据自动渲染卡片入口。
- 多数 Demo 使用懒加载路由组件，降低初始加载压力。
- 图片资源场景广泛使用 `import.meta.glob` 做批量导入，适合相册/瀑布流类页面。
- `BackHome.vue` 支持拖拽与点击返回，方便在各 Demo 页面快速导航。

## 后续可优化方向

- 增加 ESLint + Prettier + Stylelint，统一代码风格
- 增加单元测试（Vue Test Utils）与 E2E 测试（Playwright）
- 抽离通用动效逻辑为 composables，提高复用性
- 为每个 Demo 补充交互说明与截图，提升可读性
