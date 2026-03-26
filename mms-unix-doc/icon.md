# mms-icon 图标

基于自定义字体图标，支持引入您自己的图标库。

## 使用

```uvue
<template>
	<view>
		<mms-icon name="arrow-right" color="#333333" size="40"></mms-icon>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `name` | 图标名称，对应字体图标里的 class，自动添加 `.iconfont.icon-${name}` | `string` | `''` |
| `size` | 图标大小，单位 rpx | `number` | `40` |
| `color` | 图标颜色 | `string` | - |
| `bold` | 是否加粗 | `boolean` | `false` |

## Events

| 事件名 | 说明 |
|--------|------|
| `click` | 点击图标时触发 |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 自定义图标内容 |

## 示例

### 基础用法

```uvue
<mms-icon name="search" size="32" color="#909399"></mms-icon>
```

### 不同颜色

```uvue
<mms-icon name="close" color="#f56c6c" size="40"></mms-icon>
```

## 说明

### 在项目中引入自定义字体图标

项目中已内置了字体文件，存放于项目根目录 `font_5145617_po0co0ipc2/`。

**使用步骤：**

1. 将下载包里的 `iconfont.ttf`/`iconfont.woff2`/`iconfont.woff` 复制到项目 `/static/iconfont/` 目录
2. 在项目全局样式中引入下面 `@font-face`：

```scss
@font-face {
  font-family: "iconfont"; /* Project id 5145617 */
  src: url('/static/iconfont/iconfont.woff2?t=1774251161162') format('woff2'),
       url('/static/iconfont/iconfont.woff?t=1774251161162') format('woff'),
       url('/static/iconfont/iconfont.ttf?t=1774251161162') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

3. 完整图标映射表见本仓库 `mms-unix-doc/mms-icon-font/iconfont.css`（或 `iconfont.json`）。

### 已下载的图标清单（部分示例）

| Class 名称 | Unicode |
|--------|--------|
| `icon-add` | `\e665` |
| `icon-arrow-down` | `\e66a` |
| `icon-arrow-right` | `\e66c` |
| `icon-arrow-left` | `\e66f` |
| `icon-ashbin` (删除) | `\e66b` |
| `icon-close` | `\e679` |
| `icon-calendar` | `\e67b` |
| `icon-camera` | `\e675` |
| `icon-delete` | `\e683` |
| `icon-download` | `\e68d` |
| `icon-edit` | `\e693` |
| `icon-home` | `\e6a2` |
| `icon-search` | `\e6ca` |
| `icon-setting` | `\e6d4` |
| `icon-success` | `\e6d1` |
| `icon-user` | `\e6e0` |
| `icon-upload` | `\e6e1` |
| `icon-warning` | `\e6e4` |

完整列表请查看 `font_5145617_po0co0ipc2/iconfont.css` 文件。

确保你的 css 类名规则是 `.iconfont.icon-name`，`mms-icon` 组件会自动拼出正确的类名。
