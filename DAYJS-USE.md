<p align="center">
  <a href="https://www.npmjs.com/package/dayjs" target="blank"><img src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png" width="320" alt="DAYJS Logo" /></a>
</p>

## Description

[DayJS](https://day.js.org/docs/en/installation/typescript) framework TypeScript starter DayJS website.

## Installation

```bash
npm install dayjs
```

## Import and use in Typescript file

```bash
import dayjs from 'dayjs'
dayjs().format()
```

## Locale and plugin import
To use locale and plugin, you first need to import the targeting language and plugin.

```bash
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn'

dayjs.extend(isLeapYear) // use plugin
dayjs.local('zh-cn') // use local
```

## Stay in touch

- Author - [Nick]
- Website - [https://github.com/rd1123](https://github.com/rd1123)
