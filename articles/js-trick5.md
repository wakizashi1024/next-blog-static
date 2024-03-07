---
title: '使用Array.prototype.every()和Array.prototype.some()檢查數組元素'
date: 2024-1-17 11:10:00
tags:
  - JS
---
## 5. 使用 `Array.prototype.every()`和 `Array.prototype.some()`檢查數組元素

`Array.prototype.every()`和 `Array.prototype.some()`是兩種在JavaScript中檢查數組元素的方法。以下是一個例子：

```javascript
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(n => n > 0);
let anyEven = numbers.some(n => n % 2 === 0);
console.log(allPositive); // true
console.log(anyEven); // true
```

在這個例子中，我們使用 `every()`方法檢查數組中的所有數字是否都是正數，並使用 `some()`方法檢查數組中是否有偶數。
