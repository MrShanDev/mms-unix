# m-unix 组件库升级稳定手册

本文档用于指导 `uni_modules/m-unix` 组件库后续升级、发版、热修复和回滚。目标不是把组件一次改完，而是建立一套可重复执行的稳定流程：每次升级都能知道改了什么、影响谁、如何验证、出了问题怎么退。

适用范围：

- `uni_modules/m-unix/components/m-*/*.uvue` 组件。
- `uni_modules/m-unix/components/m-tools/*.uts` 工具、类型、主题配置。
- `uni_modules/m-unix/libs/css/*`、`index.scss`、`config.uts` 等组件库公共能力。
- `pages_demo` 演示页、组件文档、`package.json` 版本和发布资料。

## 一句话原则

组件库升级要先保兼容，再谈优化；先有门禁，再谈发版；先能回滚，再动公共组件。

每次改动至少回答 6 个问题：

1. 这次改动影响的是 API、样式、行为、平台兼容，还是发布资料？
2. 是否改变了已有 props、emits、slot、v-model、默认值或样式尺寸？
3. 业务项目不改代码直接升级，会不会表现不同？
4. H5、App Android、App iOS、微信小程序是否都能接受这个写法？
5. 有哪些自动化测试和人工验收能证明风险可控？
6. 如果线上发现问题，回滚到哪个版本，热修复改哪一处？

## 升级分级

组件库版本以 `uni_modules/m-unix/package.json` 的 `version` 为准。建议按语义化版本执行，但结合 uni-app x 组件库实际情况做更严格的解释。

### Patch 修复版本

示例：`1.2.10` 到 `1.2.11`。

适用：

- 修复明显 bug，且不改变公开 API。
- 修复跨端警告、编译警告、样式单位、事件未触发等问题。
- 补充测试、文档、演示，不改变已有组件表现。

要求：

- 不删除 props、emits、slot。
- 不改变默认尺寸、默认颜色、默认圆角，除非旧表现本身就是 bug，并在发布说明中写明。
- 必须补回归测试，证明旧问题不会复发。

### Minor 能力版本

示例：`1.2.10` 到 `1.3.0`。

适用：

- 新增组件。
- 为旧组件新增 props、emits、slot、v-model 能力。
- 新增主题配置、工具方法、演示页。

要求：

- 新增能力默认关闭或不影响旧用法。
- 新 props 必须有默认值。
- 新事件必须列入 `emits`。
- 新演示页必须登记到 `pages.json` 的 `pages_demo` 分包，并从组件首页能进入。

### Major 破坏版本

示例：`1.2.10` 到 `2.0.0`。

适用：

- 删除或重命名 props、emits、slot、v-model。
- 改变组件默认行为、默认布局或默认主题。
- 替换底层实现导致业务页面需要迁移。

要求：

- 必须提供迁移说明。
- 能兼容的先做别名兼容，至少保留一个 minor 周期。
- 必须列出受影响组件和业务侧搜索关键词。
- 必须提供回滚方案。

## API 兼容

组件 API 是组件库稳定性的第一层契约。任何公开给业务项目、演示页、文档的能力都属于 API。

### props

规则：

- props 名称一旦公开，不要直接删除或改名。
- props 类型要稳定。`String` prop 不要拿去和 `true`、`false` 这种 Boolean 值比较。
- 每个 prop 必须有默认值，尤其是 String、Array、Object、Boolean。
- 尺寸类 props 允许 `number | string` 时，要明确数字默认单位。当前 m-unix 约定：数字经 `toCssLength()` 转为 `rpx`，带单位字符串保持原单位。
- 如果新增别名 props，内部用 `resolved*` 计算属性统一来源，文档说明主推哪个名称。

尺寸类 props 的推荐处理：

```ts
const raw = ('' + this.size).trim()
if (raw.length > 0) {
  return toCssLength(raw as string)
}
```

避免：

```ts
const n = parseInt(raw, 10)
return n
```

原因：`17px` 会被吞成数字 `17`，后续再变成 `17rpx`，H5 和 App 上实际字号会变小。

### emits

规则：

- 组件内每一个 `this.$emit('xxx')` 都必须在 `emits` 数组中声明。
- 演示页写了 `@confirm`、`@close`、`@change`，组件就必须真实触发同名事件。
- 兼容历史事件名时可以双发，但要写入发布说明。

检查方式：

- 搜索组件内 `$emit(`。
- 对照 `emits: []`。
- 对照 `pages_demo` 和文档里的事件名。

### v-model

规则：

- 单值输入优先使用 `modelValue` 与 `update:modelValue`。
- 弹窗显隐类组件优先统一 `show` 或 `visible`，若历史上两者都用过，应兼容读取并在关闭时双发 `update:show`、`update:visible`。
- 所有关闭路径都必须同步父级状态，包括遮罩、关闭按钮、确认按钮、取消按钮、内部自动关闭。

### slots

规则：

- slot 内容不要依赖父组件样式继承。uni-app x 样式继承弱，文字颜色、字号、行高需要落在实际渲染节点或组件内部容器上。
- 支持复杂 slot 的组件不要把 `line-height` 设置成组件高度，否则多行 slot 容易被裁剪。
- slot 容器需要稳定宽高，避免加载、图标、文本变化导致布局跳动。

### customStyle

规则：

- 业务侧需要深度控制根节点样式时，优先提供 `customStyle` 或 `rootStyle` props。
- 不要要求业务在自定义组件标签上写原生 `style` 来控制内部节点，多端透传不稳定。
- 组件内部合并样式时，业务传入样式应后写覆盖默认样式。

`m-button` 作为业务高频按钮，样式扩展分层如下：

- `customStyle`：根包装层，控制外层尺寸、margin、定位等。
- `buttonStyle`：原生 `button` 节点，控制背景、边框、圆角、padding、阴影等。
- `innerStyle`：非微信端内部 slot 容器，控制 slot 排列和对齐。
- `textStyle`：微信端直接文本容器，控制字体颜色、字号、行高。
- `bgColor`、`textColor`、`radius`、`borderColor`、`borderWidth`、`paddingX`、`paddingY`、`loadingColor`、`loadingGap`：常用外观参数，优先用于演示页和业务页的简单配置。

合并顺序必须是组件默认值先写、业务样式后写，例如 `Object.assign(st, this.buttonStyle)`。这样升级组件默认观感时，业务显式传入的样式仍能覆盖。

## 样式与 UCSS 稳定

组件样式要以 uni-app x 的 UCSS 子集为准。H5 能跑不代表 App 端稳定。

### 官方文档基线

本手册按 2026-06-01 至 2026-06-02 前后可访问的官方 uni-app x 文档作为兼容基线：

- CSS 概览：`https://doc.dcloud.net.cn/uni-app-x/css/`
- 选择器：`https://doc.dcloud.net.cn/uni-app-x/css/common/selector.html`
- display：`https://doc.dcloud.net.cn/uni-app-x/css/display.html`
- UTS 与 TypeScript 差异：`https://doc.dcloud.net.cn/uni-app-x/uts/uts_diff_ts.html`

当前组件库默认按 App uvue 的保守子集执行：使用 flex，优先单 class 选择器，避免伪类/伪元素、CSS 变量、`calc()`、viewport units、`gap`、`@keyframes`、`animation` 和 web vendor 前缀。UTS 工具避免 TypeScript-only 写法，例如类型谓词 `data is T`。

### 内联样式

规则：

- 内联样式对象里的 CSS 属性名使用 kebab-case 字符串键，例如 `'font-size'`、`'line-height'`、`'border-radius'`。
- 避免 `fontSize`、`lineHeight`、`borderRadius` 这类驼峰键，部分端可能不生效。
- 公共长度统一走 `toCssLength()`，不要在模板里拼接 `size + 'rpx'`。
- `px`、`rpx`、`%`、`em` 字符串要保留单位，不要先转成数字。

### 选择器

规则：

- 组件样式以单 class 为主，少用复杂后代选择器。
- 避免 `*`、属性选择器、伪类、伪元素承担关键布局。
- 业务页和演示页不要用深度选择器覆盖组件内部样式。默认观感应该由组件本身负责。

### 布局

规则：

- 使用 flex 布局。
- 避免 CSS Grid、float、复杂定位、CSS 变量、`calc()`、viewport units。
- 固定格式 UI，例如按钮、标签、单元格、输入框、宫格项，要给稳定的 width、height、min-height 或 padding 规则。
- scroll-view 区域必须有明确可见高度来源，避免 H5 正常但 App 端滚动高度塌陷。

### 文本

规则：

- 字号、颜色、字重尽量作用到实际 `text`、`button`、`input` 或组件内部内容容器。
- 不要依赖父级继承。
- 文本按钮要保证文字不会被行高裁剪。按钮内复杂 slot 建议 `line-height: 1` 加 flex 居中。
- 长文本要考虑截断、省略或换行策略。

## 跨端验收矩阵

每次升级按风险选择验收矩阵。公共组件改动越大，矩阵越完整。

| 平台 | 必验场景 | 说明 |
|------|----------|------|
| H5 Chrome | 页面渲染、点击、输入、弹窗、滚动 | 本地 `http://localhost:5173` 最快发现样式和交互问题。 |
| H5 Safari | 文本、输入、滚动、fixed/absolute | Safari 对一些样式细节更敏感。 |
| App Android | UCSS、UTS 类型、滚动、弹窗、键盘 | uni-app x 主要验收平台之一。 |
| App iOS | 字体、行高、滚动、键盘、安全区 | 如果当前版本要声明支持 iOS，必须真机或模拟器验证。 |
| 微信小程序 | 条件编译、button、form、open-type | 特别关注 `#ifdef MP-WEIXIN` 分支。 |

最低验收：

- Patch：目标组件演示页 H5 + 相关业务页 H5 + 自动化测试。
- Minor：新增/变更组件演示页 H5 + App Android + 自动化测试。
- Major：H5 + App Android + App iOS + 微信小程序 + 迁移样例。

## 自动化门禁

本仓库当前以 Node 测试做静态契约和领域逻辑门禁。组件库升级前后至少运行：

```bash
npm test
```

针对 m-unix 组件库重点运行：

```bash
npm test -- tests/mms-unix-interactions.test.js
npm test -- tests/mms-unix-ucss-layout.test.js
npm test -- tests/mms-unix-component-compat.test.js
npm test -- tests/mms-unix-component-upgrade-doc.test.js
```

建议长期保留这些门禁：

- API 契约测试：检查 props、emits、v-model、关键 helper 是否存在。
- UCSS 静态测试：扫描不支持的 CSS 模式，例如 Grid、gap、CSS 变量、viewport units。
- 路由测试：检查 `pages_demo` 是否登记到 `pages.json`。
- 文档测试：检查升级手册、组件文档、发布说明关键章节不缺失。
- 回归测试：每次线上或预览发现的问题都补一个最小测试。

自动化无法替代 HBuilderX 编译。发版前仍需在 HBuilderX 内至少执行一次目标平台运行或发行构建，并记录平台、版本和结果。

## 发版流程

### 1. 建立升级任务

记录本次升级的目标：

- 修复哪些问题。
- 新增哪些能力。
- 影响哪些组件。
- 目标版本号是什么。
- 是否需要业务项目同步改代码。

### 2. 建立基线

升级前记录：

- 当前 `package.json` 版本。
- 当前 HBuilderX 版本。
- 当前 uni-app x 版本。
- 关键演示页截图或录屏。
- 已知问题列表。

### 3. 修改组件

执行顺序：

1. 先写或补测试。
2. 修改组件实现。
3. 修改演示页。
4. 修改文档。
5. 修改版本号和发布说明。

不要把无关重构混在同一次 patch 修复里。公共组件的小改动也可能影响很多业务页。

### 4. 同步文档

每次组件库发版建议补充：

- `uni_modules/m-unix/docs/release-notes/lib-x.y.z.md`：版本发布说明。
- 受影响组件文档：props、emits、slot、示例。
- 如果是破坏变更，补迁移指南。

发布说明至少包含：

- 版本号。
- 变更类型：修复、新增、优化、破坏变更。
- 影响组件。
- 兼容性说明。
- 验收结果。
- 回滚版本。

### 5. 执行门禁

必须通过：

```bash
npm test
```

手工验收至少记录：

- H5 目标页面或演示页。
- HBuilderX 运行平台。
- 是否有控制台 warning/error。
- 组件视觉是否符合预期。
- 点击、输入、滚动、弹窗是否正常。

### 6. 升级版本

修改 `uni_modules/m-unix/package.json` 的 `version`。不要只改业务项目版本。

发版前检查：

- `package.json` 版本与发布说明一致。
- 文档中没有过期版本号。
- 演示页能进入。
- 新组件资源文件在 `uni_modules/m-unix/static` 或组件目录内，路径可随组件库一起复制。

## 回滚与热修复

### 回滚原则

- 能回滚版本就回滚版本，不要在业务项目里临时覆盖组件内部样式。
- Patch 修复要尽量小，只改根因，不顺带重构。
- 热修复也必须补测试，至少覆盖触发事故的最小场景。

### 回滚步骤

1. 确认问题组件和影响版本。
2. 查发布说明，找到上一个稳定版本。
3. 替换 `uni_modules/m-unix` 到稳定版本。
4. 运行 `npm test` 和目标页面验收。
5. 记录事故原因和临时处理。
6. 在新 patch 版本中修复并补回归测试。

### 热修复记录模板

```md
# lib-x.y.z-hotfix

## 问题

## 影响范围

## 根因

## 修复

## 验收

## 回滚方案
```

## m-button 事故复盘

这次 `m-button` 在收银订单页暴露了几个典型风险，后续组件库升级要用它做反例检查。

### 1. 字号单位被吞掉

现象：业务页传 `size="17px"`，H5 上按钮文字仍然很小。

根因：组件内部对字符串做 `parseInt`，把 `17px` 变成数字 `17`，后续 `toCssLength(17)` 转为 `17rpx`。

稳定规则：

- 带单位字符串必须原样进入 `toCssLength()`。
- 数字才使用默认 `rpx`。
- 为尺寸类 props 增加回归测试，确保 `px/rpx` 不被吞。

### 2. 行高等于按钮高度导致复杂 slot 裁剪

现象：菜品卡片作为按钮 slot 时内容被裁剪。

根因：按钮把 `line-height` 设置成组件高度，适合单行文本，不适合多行 slot。

稳定规则：

- 按钮类组件用 flex 居中，不用高度行高强行居中。
- 复杂 slot 设置内部容器，如 `.m-btn__inner`，保证 `height: 100%`。
- 回归测试检查不要出现 `lineHeight: getHeight` 或 `'line-height': getHeight`。

### 3. String prop 与 Boolean 比较触发 UTS 警告

现象：HBuilderX 提示 `this.width === true`、`this.btnSize === true` 类型比较警告。

根因：`width`、`btnSize` 定义为 String，却与 Boolean 值比较。

稳定规则：

- String prop 只和字符串或空值比较。
- Boolean prop 才和布尔值比较。
- 为类型比较增加静态测试，避免 warning 进入发布版本。

### 4. `width="100%"` 自动 flex-fill 影响布局

现象：支付按钮和业务按钮因为默认宽度触发 `flex: 1`，尺寸被拉大。

根因：组件把默认 `width="100%"` 当成自动填充条件，未排除显式 `height` 的场景。

稳定规则：

- 自动填充逻辑必须集中在 `shouldFill()` 这类计算属性。
- 显式设置 `height` 或 `btnSize` 时不自动 `flex: 1`。
- 回归测试检查显式高度按钮不会自动填满父级剩余空间。

## 组件升级检查清单

开发前：

- [ ] 明确版本分级：Patch、Minor、Major。
- [ ] 明确影响组件和业务页面。
- [ ] 找到相似组件的现有实现。
- [ ] 写出最小回归测试或契约测试。

开发中：

- [ ] props 类型、默认值、单位处理稳定。
- [ ] emits 与 `$emit` 一致。
- [ ] v-model 成对出现。
- [ ] slot 不依赖父级样式继承。
- [ ] 内联样式使用 kebab-case。
- [ ] 不引入 UCSS 高风险写法。
- [ ] 演示页只展示，不替组件兜底样式。

验收前：

- [ ] `npm test` 通过。
- [ ] H5 目标页面或演示页通过。
- [ ] HBuilderX 目标平台无新增 warning/error。
- [ ] 关键组件截图或录屏已留存。
- [ ] 发布说明、组件文档、版本号已同步。

发版后：

- [ ] 记录升级结果。
- [ ] 收集业务项目反馈。
- [ ] 新问题进入回归测试。
- [ ] 必要时准备 patch 热修复。

## 推荐的长期建设

1. 为每个核心组件建立契约测试，例如 `m-button`、`m-input`、`m-popup`、`m-upload`、`m-tabs`。
2. 建立 `pages_demo` 路由完整性测试，防止新增组件无法进入演示。
3. 建立 UCSS 静态扫描，持续阻止 web-only 样式进入 App 组件。
4. 为 H5 演示页建立截图基线，至少覆盖按钮、输入、弹窗、表单、上传、滚动列表。
5. 每次修 bug 都在文档中补事故复盘，组件库稳定性靠事故沉淀出来。
