## babylon基础demo

### npm i 一键安装所有依赖
### npm run start 启动项目

### 技术站
* react  
* react dom 
* babel
* antd
* babylon
* webpack 
* ts-loader

## 简介
 **主要根据babylon官网做了一下改善，根据自己对于babylon的了解做的一下demo，写了一下babylon的案例，使用ts进行编写，使用babel进行编译，最终打包出js文件可以运行**

### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- node_modules/                           ---npm下载文件目录
+-- asset/                                  ---资源文件
+-- css/                                    ---css静态文件
+-- dist/                                   ---dist打包后文件
+-- src/                                    ---核心代码目录
|   +-- view                                ---各式各样的组件存放目录
|   |    +-- babylonJS_101                  ---babylon101案例
|   |    |    --- ...   
|   |    +-- component                      ---组件库
|   |    |    --- ...   
|   |    +-- entity                         ---声明babylon所有实体对象
|   |    |    --- ...   
|   |    +-- menu                           ---菜单目录
|   |    |    --- ...   
|   +-- SiderBar.tsx                        ---项目入口文件
+-- index.html                              ---文件初始化html文件
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json                                    
```


打开 package.json 然后添加下面的scripts:
"scripts": {
  "start": "webpack-dev-server --hot --inline --colors --content-base ./build",
  "build": "webpack --progress --colors"
}



关于.tsx文件
（1）如果.ts文件中包含jsx，则需要将.ts文件改成.tsx文件
（2）需要引用.tsx文件时，不用加扩展名，import xxx from './xxx';，而引用.jsx文件，是需要加扩展名的
（3）.tsx文件中，React和ReactDOM不支持default import，需要进行修改
