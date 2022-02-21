/**
 * 小程序应用实例
一个小程序，输入名字和邮箱并显示
如果有一个空则提示错误，如果都输入，在下面输出 "名字:邮箱"
注意:用到querySelector时，类名前加点，id前加井号
 */
//一个小程序，输入名字和邮箱并显示
//如果有一个空则提示错误，如果都输入，在下面输出名字:邮箱

//注意:用到querySelector时，类名前加点，id前加井号
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
//#users和.msg是空的，要添加

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput);
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        //alert('请输入完整信息')
        //以警告窗口的形式提示

        //让提示在输入框上部标出，html中已经预留了空的.msg
        msg.classList.add('error');
        //设置提示的样式为在css文件中定义好的error
        msg.innerHTML = '请输入完整信息';
        console.log('请输入完整信息');
        //令提示显示2.5秒
        setTimeout(() => msg.remove(), 2500);

    }else{
        //alert('成功输入');
        //console.log('成功输入');
        const li = document.createElement('li');
        //创建元素插入dom
        li.appendChild(document.createTextNode(`${nameInput.value} 的邮箱是 ${emailInput.value}`));
        userList.appendChild(li);
        //向空users加入

        //清空输入框
        nameInput.value = '';
        emailInput.value = '';
    }
}