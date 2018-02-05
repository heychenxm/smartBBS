import React,{Component,PropTypes} from 'react';
// 引入SmartButton样式
import '../assest/styles/smartButton.less';


class SmartButton extends Component{
    constructor(props){
        super(props);
    }

    // 绑定的事件
    handleClick(){
        console.log('子组件的this:', this);
        this.props.onClick();
    }

    render(){
        // button的className样式名称拼接
        var buttonClass = 'smart-form-btn';
        if(this.props.block){
            buttonClass += ' block';
        }

        // 声明props属性
        var props = {
            className: buttonClass,
            value: this.props.value
        };

        // 判断是否有绑定onClick
        if(this.props.onClick){
            props['onClick'] = () => this.handleClick();
        }
        

        return (
            <input type="button" {...props}/>
        )
    }
}
// 约束属性传入值类型
SmartButton.propTypes = {
    value: PropTypes.strring
};

// 默认属性值
SmartButton.defaultProps = {
    value: '确定'
};


export default SmartButton;