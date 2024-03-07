---
title: '使用Array.prototype.filter()過濾數組元素'
date: 2024-1-5 11:10:00
tags:
  - JS
---
`Array.prototype.filter()`是一種在JavaScript中過濾數組元素的方法。以下是一個例子：

```javascript
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

在這個例子中，我們使用 `filter()`方法從數組中選出所有的偶數。
