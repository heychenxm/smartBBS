import React,{Component} from 'react';
// 引入顶部标题栏
import HeaderBar from '../components/HeaderBar';
 // 引入注册输入框
import RegisterInput from '../components/RegisterInput';

// 引入注册页面样式
import '../assest/styles/registerPage.less'


class RegisterPage extends Component{
    //构造函数
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='registerPage'>
                <section>
                    <HeaderBar />
                </section>
                <section className='registerForm'>
                    <form action="">
                        {/* 子组件 */}
                        <RegisterInput link='register-area' placeholder='泸州政法委' label='片区'/>
                        <RegisterInput link='register-pnumber' placeholder='请输入手机号' label='手机号' />
                        <RegisterInput link='register-pwd' placeholder='请输入密码' label='密码'/>
                        <RegisterInput link='register-confirm' placeholder='请输入确认密码'  label='确认密码'/>
                        <RegisterInput link='register-verificationCode' placeholder='请输入验证码' label='验证码' />
                    </form>
                </section>
                <div className='protocol-check'>
                    <input type="checkbox" className='register-checkbox'/>
                    <span className='register-checkbox-txt'>同意接受智慧社区Life使用协议</span>
                </div>
                <input type="button" className='register-next-step' value='下一步'/>
            </div>
        )
    }
}

export default RegisterPage;