# PharmaReg Global

基于 VitePress 的多语言静态文档站点，用于沉淀与整理全球药品注册法规相关知识与资料。

## 功能概览

- 多语言：中文（/zh/）与英文（/en/）
- 首页栏目：NMPA / FDA / EMA / PMDA（已配置入口页，后续可持续扩展）
- 本地搜索：VitePress Local Search
- 项目站点部署：支持 GitHub Pages（base 已配置为仓库名路径）

## 环境要求

- Node.js 18.x 或 20.x
- npm

## 本地开发

```bash
npm install
npm run docs:dev
```

启动后访问终端输出的本地地址（项目站点 base 形如 `/PharmaReg-Global/`）。

## 构建与预览

```bash
npm run docs:build
npm run docs:preview
```

构建产物目录：

- `docs/.vitepress/dist`

## 目录结构（约定）

- `docs/.vitepress/config.mts`：站点配置（多语言、导航、侧边栏、base）
- `docs/.vitepress/theme/`：自定义主题与样式
- `docs/zh/`：中文内容
- `docs/en/`：英文内容
- `docs/public/`：静态资源（如 hero.svg、logo 等）

栏目入口（可继续在各目录下新增 md 文件）：

- `docs/zh/nmpa/`、`docs/zh/fda/`、`docs/zh/ema/`、`docs/zh/pmda/`
- `docs/en/nmpa/`、`docs/en/fda/`、`docs/en/ema/`、`docs/en/pmda/`

## 如何添加一篇 NMPA 文章（示例）

1. 新建 Markdown 文件到：
   - 中文：`docs/zh/nmpa/<your-article>.md`
   - 英文（可选）：`docs/en/nmpa/<your-article>.md`
2. 在 `docs/zh/nmpa/index.md` 增加入口链接（推荐）。
3. 如需侧边栏展示，更新 `docs/.vitepress/config.mts` 中 `'/zh/nmpa/'` 的 sidebar 配置（推荐）。

## GitHub Pages（项目站点）部署

该项目以“项目站点”方式部署时，访问地址形如：

- `https://<user_or_org>.github.io/PharmaReg-Global/`

关键配置：

- `docs/.vitepress/config.mts` 中 `base: '/PharmaReg-Global/'`

推荐使用 GitHub Actions 自动部署：

1. 在 GitHub 仓库 Settings → Pages 中选择 Source 为 GitHub Actions。
2. 新增工作流 `.github/workflows/deploy.yml`，构建命令为 `npm run docs:build`，上传目录为 `docs/.vitepress/dist`。

## License

如需开源许可证，请在仓库中补充 `LICENSE` 文件并在此处更新说明。

