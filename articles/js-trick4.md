---
title: '使用Array.prototype.find()查找數組元素'
date: 2024-1-13 11:10:00
tags:
  - JS
---
`Array.prototype.find()`是一種在JavaScript中查找數組元素的方法。以下是一個例子：

```javascript
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2
```

在這個例子中，我們使用 `find()`方法找到數組中的第一個偶數。
