# mms-rate 评分

星级/档位评分展示与点击选择，用于订单评价、内容打分等场景。文案与符号均为自研实现。

## 演示

- 路径：`pages_demo/ext/rate/rate`（分包 `pages_demo`）

## 双向绑定

| 写法 | 说明 |
|------|------|
| `v-model:current` | 推荐。当前选中档位数（0～quantity，0 表示未选） |
| `:current` + `@change` | 手动同步；`change` 载荷见下表 |

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| quantity | Number | 5 | 档位数（星数） |
| current | Number | 0 | 当前档位；超出范围在展示时按内部计算钳制 |
| score | Number / String | 1 | 预留，当前实现以 `current` 为准 |
| disabled | Boolean | false | 禁用点击 |
| size | Number | 20 | 符号大小，**单位 px** |
| normal | String | #b2b2b2 | 未选中颜色 |
| active | String | #EB0909 | 已选中颜色 |
| hollow | Boolean | false | 为 true 时未选档为「☆」，已选为「★」 |
| params | Number / String | 0 | 业务标识；`change` 中回传（数值可解析时按数字回传） |

## Events

| 事件 | 载荷 | 说明 |
|------|------|------|
| update:current | `number` | 与 `v-model:current` 同步，值为新档位 |
| change | `{ index, params }` | `index` 为点击档位（1 起计）；`params` 为传入标识经解析后的数值 |

## 示例

```html
<mms-rate v-model:current="score" :quantity="5" :disabled="false" />
```

```html
<mms-rate
  v-model:current="score"
  :quantity="5"
  :params="1"
  @change="onRateChange"
/>
```

## 注意事项

- 不提供半星、滑动选分；需要时在业务层扩展或使用其它交互。
- `params` 为非数字字符串时，回传的 `params` 可能为 0，多实例区分建议用数字标识。
