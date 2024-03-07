---
title: '使用Array.prototype.sort()`排序數組元素'
date: 2024-1-21 11:10:00
tags:
  - JS
---
`Array.prototype.sort()`是一種在JavaScript中排序數組元素的方法。以下是一個例子：

```javascript
let numbers = [5, 2, 1, 4, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]
```

在這個例子中，我們使用 `sort()`方法將數組中的數字按照從小到大的順序排序。
