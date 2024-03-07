---
title: 'Array.prototype.slice()和Array.prototype.splice()操作數組元素'
date: 2024-2-12 11:10:00
tags:
  - JS
---
## 9. 使用 `Array.prototype.slice()`和 `Array.prototype.splice()`操作數組元素

`Array.prototype.slice()`和 `Array.prototype.splice()`是兩種在JavaScript中操作數組元素的方法。以下是一個例子：

```javascript
let numbers = [1, 2, 3, 4, 5];
let middle = numbers.slice(1, 4);
console.log(middle); // [2, 3, 4]
numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4, 5]
```

在這個例子中，我們使用 `slice()`方法獲取數組中的一部分，並使用 `splice()`方法從數組中刪除一個元素。
