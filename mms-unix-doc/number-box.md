# mms-number-box 步进器

通过加减按钮调整数量，中间为只读数值展示。

## 演示

- 路径：`pages_demo/ext/number-box/number-box`（分包 `pages_demo`）

## 双向绑定

| 写法 | 说明 |
|------|------|
| `v-model:value` | 推荐。当前数值 |
| `:value` + `@change` | 手动同步 |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | Number / String | 1 | 当前值 |
| min | Number | 1 | 最小值 |
| max | Number | 99 | 最大值 |
| step | Number | 1 | 步长，可为小数 |
| disabled | Boolean | false | 禁用 |
| iconBgColor | String | transparent | 两侧按钮背景 |
| radius | Boolean | true | 按钮是否圆形 |
| iconSize | Number | 26 | 加减符号字号（rpx） |
| iconColor | String | #666666 | 加减符号颜色 |
| height | Number | 42 | 中间区域高度（rpx） |
| width | Number | 80 | 中间区域宽度（rpx） |
| size | Number | 28 | 中间数字字号（rpx） |
| backgroundColor | String | #F5F5F5 | 中间区背景 |
| color | String | #333333 | 中间数字颜色 |
| index | Number / String | 0 | 实例索引，`change` 回传 |
| custom | Number / String | 0 | 业务标识，`change` 回传（解析为数字） |

## Events

| 事件 | 载荷 | 说明 |
|------|------|------|
| update:value | `number` | 与 `v-model:value` 同步 |
| change | `{ value, type, index, custom }` | `type` 为 `plus` / `reduce` |

## 示例

```html
<mms-number-box v-model:value="qty" :min="1" :max="10" :step="1" />
```

## 注意事项

- 不可直接键盘输入中间数字；仅通过加减变更。
- 异步校验场景：可在 `@change` 内请求接口，失败时将父级 `value` 恢复为旧值。
