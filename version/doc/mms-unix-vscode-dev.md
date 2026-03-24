# MMS-UNIX VS Code 扩展 — 待办与体验清单

> 便于后期自行体验与迭代；完成项可随时勾掉。  
> **扩展源码目录**：仓库根下 `mms-unix-vscode/`（本文档在 `version/doc/`，集中跟踪需求。）

## 一、体验前准备（未完成则先补）

- [ ] 用 VS Code **单独打开文件夹** `mms-unix-vscode`（不要只开仓库根目录调试扩展，否则 F5 的 `workspaceFolder` 不对）
- [ ] 在该窗口执行 `npm install`（若尚未安装依赖）
- [ ] 按 **F5** 启动 Extension Development Host，在新窗口中 **再打开整个 mms-unix 项目**
- [ ] 在任意 `.uvue` 的 `<template>` 里输入 `<mms` / `</mms`，确认是否出现组件标签补全
- [ ] 将鼠标悬停在 `mms-xxx` 标签名上，确认是否有简短说明

## 二、当前已实现（供对照）

- [x] 扫描 `uni_modules/mms-unix/components` 下存在 `mms-xxx/mms-xxx.uvue` 的目录，提供标签名补全
- [x] 对 `mms-*` 标识符提供基础 Hover
- [x] 通过 `configurationDefaults` 将 `*.uvue` 关联为 `vue` 语言（若与本地习惯冲突，可改为可配置或删除）

## 三、待开发功能（按优先级自排）

- [ ] **属性（props）补全**：在已写的开始标签内（如 `<mms-button ` 后）提示 props，并带类型/默认值说明
- [ ] **事件（emits）补全**：`@` 后提示 `click` 等事件名
- [ ] **插槽说明**：Hover 或补全片段中注明具名插槽（若有）
- [ ] **元数据生成脚本**：从各 `mms-*.uvue` 解析 `props` / `emits`（及注释），生成 `components.json`，扩展启动时读取，避免手写同步
- [ ] **与 Volar 补全去重或排序**：若出现重复项，调整 `sortText` / 过滤策略
- [ ] **多根工作区**：从所有 `workspaceFolders` 中查找 `uni_modules/mms-unix`（当前已遍历文件夹，确认边缘场景是否够用）
- [ ] **打包分发**：`npx @vscode/vsce package` 生成 `.vsix`，团队内「从 VSIX 安装」
- [ ] **可选：发布市场**：注册 Publisher、`vsce publish`（需单独账号与策略评估）

## 四、体验时建议记录的反馈

- [ ] 哪些场景下补全不出现（例如条件编译注释内、字符串内）
- [ ] 是否希望关闭「强制 .uvue → vue」关联，改为仅文档说明
- [ ] 最需要优先补全 props 的组件列表（如 `mms-upload`、`mms-button`）

## 五、相关路径

| 说明           | 路径 |
|----------------|------|
| 扩展源码       | `mms-unix-vscode/src/extension.ts` |
| 组件库目录     | `uni_modules/mms-unix/components/` |

---

*文档随迭代更新；完成某项后把 `- [ ]` 改为 `- [x]` 即可。*
