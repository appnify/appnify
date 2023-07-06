# Appnify

A command-line tool for quickly initializing projects and installing common tools.

Read this in other languages: English | [简体中文](./README_zh-CN.md)

## Quick Start

You can run it directly or after installation. The first format will be used as an example in the following descriptions.

```sh
# Run directly
npx appnify <command>

# Run after installation
npm install appnify -g
appnify <command>
```

## Installing Dependencies

Usage:
```sh
npx appnify install <name>
```

Supports installation of the following tools:

| Name         | Description                             | Official Repository                                       |
| ------------ | --------------------------------------- | --------------------------------------------------------- |
| husky        | Git hooks management tool               | [https://github.com/typicode/husky](https://github.com/typicode/husky)                 |
| lint-staged  | Validate only staged files (Git)        | [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)       |
| release-it   | Release management tool (Git)           | [https://github.com/release-it/release-it](https://github.com/release-it/release-it) |
| commitlint   | Commit message validation tool (Git)    | [https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)                |
| eslint       | Code quality checking tool              | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)                   |
| prettier     | Code formatting tool                    | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)           |

Where:
- `install` is the command to perform this operation, and you can also use the alias `i`.
- `<name>` parameter: the name of the tool to install. If not specified, a selection list will be displayed. Specify `all` to install all tools at once.
- `--installer` parameter: specifies the package manager to use during installation. Specify `none` to skip the installation process.

## Finally

If you encounter any issues during usage, feel free to ask questions in the issue section.
