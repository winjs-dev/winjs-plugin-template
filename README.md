# winjs-plugin-example

Example plugin for WinJS.

<p>
  <a href="https://npmjs.com/package/winjs-plugin-example">
   <img src="https://img.shields.io/npm/v/winjs-plugin-example?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/winjs-plugin-example?minimal=true"><img src="https://img.shields.io/npm/dm/winjs-plugin-example.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add winjs-plugin-example -D
```

Add plugin to your `.winrc.ts`:

```ts
// .winrc.ts
export default {
  plugins: ['winjs-plugin-example'],
  // 开启配置
  example: {}
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
export default {
  plugins: ['winjs-plugin-example'],
  // 开启配置
  example: {
    foo: 'bar'
  }
};
```

## 开发指南

### 使用模板创建插件

1. 使用此模板创建新的 WinJS 插件项目
2. 修改包名为你的插件名称

### 修改包名后需要调整的文件

使用模板后，如果你修改了 npm 包名，需要更新以下文件中的包名引用：

#### 1. `package.json`

修改以下字段：

- `name`: 将 `winjs-plugin-template` 改为你的新包名
- `repository.url`: 更新为你的仓库地址

```json
{
  "name": "your-plugin-name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-org/your-plugin-name.git"
  }
}
```

#### 2. `README.md`

需要更新以下位置的包名引用：

- 文档标题（第一行）
- npm 版本徽章链接中的包名
- npm 下载量徽章链接中的包名
- 安装命令中的包名
- 使用示例中的插件名称

将所有的 `winjs-plugin-example` 替换为你的新包名。

#### 3. 其他配置文件（可选）

如果你的项目中有其他配置文件引用了包名（如 `renovate.json`、`CHANGELOG.md` 等），也需要相应更新。

### 开发建议

#### 1. 代码修改

- 修改 `src/index.ts` 中的 `key` 值（当前为 `example`）为你的插件配置键名
- 根据插件功能完善 `Options` 配置说明
- 更新 `README.md` 中的插件描述和功能说明

#### 2. 开发指令

**安装依赖：**

```bash
pnpm install
```

**开发模式（监听文件变化自动构建）：**

```bash
pnpm run dev
```

**构建项目：**

```bash
pnpm run build
```

**代码格式检查：**

```bash
pnpm run lint
```

**自动修复代码格式：**

```bash
pnpm run lint:write
```

**运行测试：**

```bash
pnpm run test
```

**本地测试插件：**

在 `playground` 目录中测试插件功能：

```bash
cd playground
pnpm install
pnpm run dev
```

**版本号管理：**

```bash
pnpm run bump
```

#### 3. 开发流程

1. 在 `src/index.ts` 中实现插件逻辑
2. 运行 `pnpm run dev` 监听文件变化
3. 在 `playground` 目录中运行 `pnpm run dev` 测试插件
4. 运行 `pnpm run lint:write` 确保代码格式正确
5. 运行 `pnpm run test` 确保测试通过
6. 提交代码前运行 `pnpm run build` 确保构建成功

## License

[MIT](./LICENSE).
