login
    login-start: 登录起始页
    login: 登录页

register
    register: 注册页面

四个主要功能文件夹
home
server
social
mine

登录按钮 doLogin
免费注册 freeRegister
游客登录 tourLogin


抽离出顶部标题栏
HeaderTitle



服务器
    webpack-dev-server
    配置文件
        webpack.config.js
        =》
            module.export = {
                entry: 
                output:
                plugins:
                module: loaders{
                    preloader
                    loader
                }
            }


    index.js 
        1.全局样式
        2.App.js 顶级组件
            各个组件
                编写规则： 
                    1.引入
                    2.创建组件类
                    3.导出

