import React,{Component} from 'react';
import '../assest/styles/headerBar.less';

class HeaderBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const leftIconClass = 'header-icon-left icon-' + this.props.icon;
        const rightIconClass = 'header-icon-right icon-' + this.props.icon;
        return (
            <div className='headerBar'>
                <span className={leftIconClass}>图</span>
                {/* <p className='header-title'>Title</p> */}
                <span className='header-title'>注册</span>
                <span className={rightIconClass}>图</span>
            </div>
        )
    }
}

export default HeaderBar;