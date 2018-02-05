import React,{Component} from 'react';
import '../assest/styles/loginPage.less';
// 引入logo
import logo from '../assest/images/logo.jpg';
// import logo from '../assest/images/ciwei.jpg';
// 引入input
import SmartInput from '../components/SmartInput';
// 引入button
import SmartButton from '../components/SmartButton';

console.log(logo);

class LoginPage extends Component{
    // 构造器
    constructor(props){
        super(props);
        
        // 初始化状态
        this.state={
            username: '',
            password: ''
        };
    }
    
    // 自定义函数
    // 登录成功
    doLogin(){
        // console.log('父组件：', this);
        alert('登录成功？');
    }
    // free register
    freeRegister(){
        alert("免费注册");
    }
    // tourists login
    tourLogin(){
        alert('游客登录');
    }
    
    render(){
        return (
        <div className='loginPage'>
            {/* logo部分 */}
            <div className='login-logo'>
                <img className='login-logo-img' src={logo} alt=""/>
                <p className='login-logo-text'>智天下</p>
            </div>

            {/* 表单部分 */}
            <div className='login-form'>
                <form className='smart-form' action="">
                        <SmartInput icon='mobile' value={this.state.username} placeholder='请输入用户名' />
                        <SmartInput icon='lock' placeholder='请输入密码' type='password'/>
                        {/* 父组件绑定事件监听 */}
                        <SmartButton block={true} value='登录' onClick={()=>this.doLogin()}/>
                        <p className='forgetPwd'>忘记密码？</p>
                        <SmartButton value='免费注册' onClick={()=>this.freeRegister()}/>&emsp;
                        <SmartButton value='游客登录' onClick={()=>this.tourLogin()}/>

                </form>
            </div>
        </div> 
        )
    }
}

export default LoginPage;