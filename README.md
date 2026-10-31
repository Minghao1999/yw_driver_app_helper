# YW Driver App Helper

这是一个使用 React + Vite 构建的纯前端静态教程网站。当前完整收录车队长端教程，包括司机管理、路线拆分、路线规划，以及 Word 原文档中的 28 张截图。

## 当前内容

- 中文：已完成车队长端教程。
- English / Español：仅显示待翻译提示，不包含自动生成的译文。
- 司机端：资料尚未提供，页面显示待补充占位。
- 车队长端：包含 3 个章节、11 个操作教程和 28 张原始截图。

## 本地运行

请先安装 Node.js 18 或更高版本，然后在项目目录执行：

```bash
npm install
npm run dev
```

终端会显示本地访问地址，通常为 `http://localhost:5173`。

## 构建静态文件

```bash
npm run build
```

构建产物位于 `dist/`，可以直接部署到静态网站服务。

如需在本地预览构建结果：

```bash
npm run preview
```

## 部署

### Vercel

1. 将项目提交到 Git 仓库。
2. 在 Vercel 中导入仓库。
3. Framework Preset 选择 `Vite`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。

### Netlify

1. 将项目提交到 Git 仓库并在 Netlify 导入。
2. Build command 使用 `npm run build`。
3. Publish directory 使用 `dist`。

### 公司服务器或对象存储

执行 `npm run build` 后，将 `dist/` 中的全部文件上传到 Web 服务器、CDN 或对象存储的静态站点目录即可。

## 项目结构

```text
public/tutorial/   Word 中提取的原始截图
src/App.jsx        页面与交互
src/tutorialData.js 教程章节、步骤和截图顺序
src/styles.css     响应式界面样式
```
