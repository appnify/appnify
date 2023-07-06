# Appnify

一个快速初始化项目和安装常用工具的命令行工具。

## 快速开始

可直接运行或安装后运行, 在后面的描述中将以第一种形式为例。

```sh
# 直接运行
npx appnify <command>

# 安装后运行
npm install appnify -g
appnify <command>
```

## 安装依赖

支持以下工具的安装：
| 名称 | 描述 | 官方仓库 |
| :--- | :--- | :---
| husky       | 提交钩子管理工具(git) | https://github.com/typicode/husky
| lint-staged | 只校验提交的代码(git) | https://github.com/okonet/lint-staged
| release-it  | 版本发布记录工具(git) | https://github.com/release-it/release-it
| commitlint  | 提交信息校验工具(git) | https://github.com/conventional-changelog/commitlint
| eslint      | 代码质量检查工具      | https://github.com/eslint/eslint
| prettier    | 代码样式格式工具      | https://github.com/prettier/prettier

用法：
```sh
npx appnify install <name>
```
其中：
- `install`为执行该操作的命令，也可使用别名`i`。
- `name`参数：安装的工具名称，未指定该参数时将显示选择列表，可指定`all`一键安装。
- `installer`参数：指定安装时使用的包管理器，指定为`none`时不安装。

## 最后
如果你在使用过程中遇到问题，欢迎在issue中提问。

