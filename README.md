## 描述

此项目是基于`react`搭建的后台管理系统模板，是基于[react-admin](https://github.com/ltadpoles/react-admin)改造。项目主要技术栈为react-hooks + antd，此项目未添加状态管理库，如果需要请自行构建`redux`或者使用`useContext`



### 使用方法

```npm
git clone https://github.com/xtid/react-admin-template.git

cd react-admin-template

// 安装依赖
yarn

// 启动
yarn start

// 打包
yarn build

```



### 更改主题

请在`/react-admin-template/config-overrides.js`配置文件中，修改`addLessLoader`配置中的`@primary-color`，即可修改`antd`的主题颜色，当然其它更加个人化的主题设置，请参考[官方](https://ant.design/docs/react/customize-theme-cn)