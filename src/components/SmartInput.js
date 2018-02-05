import React,{Component,PropTypes} from 'react';
// 引入克隆
import assign from 'object-assign';
// 引入样式
import '../assest/styles/smartInput.less';


class SmartInput extends Component{
    // 针对字体图标样式及图标进行拼接
    render(){
        const iconClass = 'smart-form-icon icon-' + this.props.icon;
        // 克隆对象
        var props = assign({}, this.props);
        // 删除对象上的属性
        delete props.icon;
        return (
            <div className='smart-form-input'>
                <span className={iconClass}></span>
                <input className='smart-form-input' {...props}/>
            </div>
        )
    }
}

// 约束传入数据类型
SmartInput.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string
}

SmartInput.defaultProps = {
    type: 'text'   // 默认类型就是文本输入框
}

export default SmartInput;