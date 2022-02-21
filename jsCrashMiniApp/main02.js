// main02.js （练习动态处理）

//获取items里的li标签
const ul = document.querySelector('.items');
/*若在之后执行ul.remove();
remove之后，三个item都不见了
若执行ul.lastElementChild.remove();
则删除最后一项 */

//将第一项改为Hello 第二项改为Brad 最后一项改为h1标签类型的HAHAHAHA
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>HAHAHAHA</h1>';
//以上三句单引号或双引号均可

//动态处理：改变样式
const btn = document.querySelector('.btn');
btn.style.background = 'red';

