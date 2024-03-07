---
title: '使用Array.prototype.concat()合併數組'
date: 2024-2-21 11:10:00
tags:
  - JS
---
`Array.prototype.concat()`是一種在JavaScript中合併數組的方法。以下是一個例子：

```javascript
let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6]
```

在這個例子中，我們使用 `concat()`方法將兩個數組合併成一個數組。
