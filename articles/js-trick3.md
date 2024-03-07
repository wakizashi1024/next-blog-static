---
title: '使用Array.prototype.reduce()累加數組元素'
date: 2024-1-8 11:10:00
tags:
  - JS
---
`Array.prototype.reduce()`是一種在JavaScript中累加數組元素的方法。以下是一個例子：

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum); // 15
```

在這個例子中，我們使用 `reduce()`方法計算數組中所有數字的總和。
