---
title: '使用 Array.prototype.map()進行數組轉換'
date: 2024-1-1 11:10:00
tags:
  - JS
---
在JavaScript中，`Array.prototype.map()`是一種非常有用的方法，它可以將一個數組轉換為另一個數組。這是一個例子：

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9, 16, 25]
```

在這個例子中，我們使用 `map()`方法將一個數字數組轉換為其對應的平方數組。
