// main01.js （练习选择器）

console.log(window);
window.alert(1);//或不写window.
//一切皆是window对象（anything is in window）
//调试器也可以看到其他对象：
//例如localStorage 浏览器中存储的一种方式
//例如fetch API 发起http请求的方法(HTTP requests)
//例如document DOM 可以看到各种属性


//single element selector 单元素选择器 ———— select by id
const form1 = document.getElementById("my-form");
console.log(form1);


//single element selector 单元素选择器 ———— querySelector
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));


//multiple element selector 多元素选择器
console.log(document.querySelectorAll('.item'));
/**
 * 调试器输出：
NodeList(3) [li.item, li.item, li.item]
0: li.item
1: li.item
2: li.item
length: 3
[[Prototype]]: NodeList
 */
