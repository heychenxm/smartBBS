import React,{Component} from 'react';
// 引入注册输入框样式
import '../assest/styles/registerInput.less';


class RegisterInput extends Component{
    // 构造函数
    constructor(props){
        super(props);
    }

    // 渲染函数
    render(){
        
        return (
            <div className='registerInput'>
                <label htmlFor={this.props.link} className=''><span className='register-label'>{this.props.label}</span></label>
                <input type="text" placeholder={this.props.placeholder} id={this.props.link}  className='register-input'/>
            </div>
        )
    }
}






export default RegisterInput;