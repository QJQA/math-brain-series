# 每日数学动脑

一个面向退休数学教师的静态练习网站。无需构建工具，可直接部署到 Cloudflare Pages。

- 在线地址：<https://suan8.pages.dev>
- GitHub：<https://github.com/QJQA/math-brain-series>

## 内容架构

- `index.html`：稳定的页面骨架
- `assets/styles.css`：统一的大字、高对比、响应式样式
- `assets/app.js`：练习组切换和题目渲染
- `data/sets.js`：题库内容；以后新增系列主要编辑这个文件
- `functions/api/feedback.js`：接收每道题的真实用户反馈
- `migrations/`：反馈数据库结构

## 新增一组题

在 `data/sets.js` 的 `window.MATH_SETS` 数组中复制一个练习组对象，修改：

- `id`：保持唯一，如 `set-02`
- `label`、`title`、`intro`
- `questions`：每题包含 `type`、`problem`、`answer`

发布后可使用 `/#set-02` 直接打开指定练习组。页面顶部会自动出现新组别选项。

## 本地预览

直接打开 `index.html`，或在本目录启动任意静态文件服务器。

## Cloudflare Pages

这是纯静态项目，无构建命令。连接 GitHub 仓库时，将输出目录设为 `/`（项目根目录）。

当前 Pages 项目采用直接发布。更新 GitHub 后，在项目根目录运行：

```bash
npx wrangler pages deploy . --project-name suan8 --branch main
```

查看各题反馈汇总：

```bash
npx wrangler d1 execute math-brain-feedback --remote --command "SELECT set_id, question_id, SUM(vote = 1) AS helpful, SUM(vote = -1) AS needs_work FROM question_feedback GROUP BY set_id, question_id ORDER BY set_id, question_id"
```
