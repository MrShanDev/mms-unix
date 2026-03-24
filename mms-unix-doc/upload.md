# mms-upload 图片上传

多图选择、**回显**、**删除**、**预览**；可选 **选图后压缩**；支持 **手动上传**（业务在 `@afterRead` 里调接口）与 **自动上传**（组件内 `uni.uploadFile`，配置见下文）。

上传 HTTP 封装在 `uni_modules/mms-unix/components/mms-tools/Upload.uts`（`uploadFileRequest`、`compressImagePath`、`pickUploadUrl`），`http.upload(...)` 与之等价。

## 配置

在 `common/config.ts` 中配置默认上传路径（组件未传 `uploadUrl` 且 `autoUpload=true` 时使用）：

- `api.upload.image`：相对 `baseUrl` / `mallBaseUrl` 的路径（与 `Upload.uts` 拼完整 URL 规则一致）。

后端成功响应需为 JSON，且 `code` 为 `0` 或 `200`（可改 `Upload.uts` 中 `successCodes`）。`data` 可为字符串 URL，或对象中带 `url` / `fileUrl` / `path`（`pickUploadUrl` 会解析）。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `files` / `fileList` | 列表项 `{ url }`，可选 `status`：`uploading` / `failed` / `done`，`path` 本地路径用于重试 | `any[]` | `[]` / `null` |
| `maxCount` | 最多数 | `number` | `9` |
| `count` | 单次选图张数 | `number` | `9` |
| `sizeType` | `original` / `compressed` | `string[]` | 见组件 |
| `sourceType` | `album` / `camera` | `string[]` | 见组件 |
| `autoUpload` | 选图（及压缩）后是否自动上传 | `boolean` | `false` |
| `uploadUrl` | 上传接口路径或完整 URL；空则用 `config.api.upload.image` | `string` | `''` |
| `uploadName` | multipart 字段名 | `string` | `'file'` |
| `uploadFormData` | 额外表单（建议值为字符串） | `object` | `{}` |
| `uploadBaseUrl` | 覆盖上传 base | `string` | `''` |
| `uploadWithToken` | 是否带 `Authorization`（`storage` token） | `boolean` | `true` |
| `compress` | 选图后是否 `uni.compressImage`（手动模式也会在 `afterRead` 里得到压缩路径） | `boolean` | `false` |
| `compressQuality` | 压缩质量 1–99，0 或 100 视为不压缩 | `number` | `80` |
| `disabled` | 禁止选图 | `boolean` | `false` |
| `deletable` | 是否显示删除 | `boolean` | `true` |
| `previewable` | 点击缩略图是否 `previewImage` | `boolean` | `true` |
| `blockChooseWhenUploading` | 有项处于 `uploading` 时禁止再选 | `boolean` | `true` |

## Events

| 事件名 | 说明 |
|--------|------|
| `update:files` / `update:fileList` | 列表变化 |
| `choose` / `afterRead` | 选图并（可选）压缩后；`{ tempFiles: { path }[] }` |
| `delete` | `{ index, file }` |
| `upload-start` | 自动上传开始 `{ count }` |
| `upload-success` | `{ index, file, response }` |
| `upload-fail` | `{ index, file, error }` |

## 模式说明

1. **手动上传**：`autoUpload=false`（默认）。在 `@afterRead` 里自行调用 `uploadFileRequest` 或 `http.upload`，把返回的 URL 写入 `v-model` 列表。
2. **自动上传**：`autoUpload=true`，配置好 `uploadUrl` 或 `config.api.upload.image`。**不要再在 `afterRead` 里往列表 push**，避免重复。
3. **回显**：直接绑定服务端返回的 URL 列表，如 `[{ url: 'https://...' }]`。
4. **失败重试**：自动上传失败项显示「失败，点击重试」，依赖项上保留 `path`。

## 示例

```uvue
<!-- 回显 + 手动上传（压缩后交给自己调接口） -->
<mms-upload
	v-model:fileList="list"
	:compress="true"
	:compressQuality="80"
	@afterRead="onAfterRead"
/>

<!-- 自动上传 + 压缩 -->
<mms-upload
	v-model:fileList="list2"
	:autoUpload="true"
	:compress="true"
	uploadUrl="/api/v1/common/upload/image"
	uploadName="file"
/>
```
