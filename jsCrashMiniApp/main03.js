// main03.js （练习事件）
const btn = document.querySelector('.btn');
/**
先创建事件监听 create an event listener 使用 addEventListener
第一个参数为事件，第二个参数为函数
这里事件为click，使用箭头函数实现输出
想要的效果是点击按钮后在调试器输出一些信息
 */
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    /**
    不加这一句的话会有click闪现，因为点击submit按钮时，实际上是提交文件， 当对submit按钮使用click事件或提交表单时，必须要阻止默认行为，
    调用preventDefault
    */

    //依次查看event object , target会给出事件作用的元素
    console.log(e);
    console.log(e.target);
    //<input ...>
    console.log(e.target.className);
    //btn

    //my-form是id所以用井号# ， 如果是class用圆点. ，点击submit后背景变成深灰色
    document.querySelector('#my-form').style.background = '#ccc';
});


