# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



#Vue项目初始化安装

    1.安装vue-cli
        npm install -g vue-cli

    2.初始化项目
        vue init webpack my-project

    3.进入项目
        cd my-project

    4.安装依赖
        npm install

    5.启动项目
        npm run dev

#项目目录结构

    index.html：项目根视图
    .postcssrc.js：postcss配置文件
    static：静态文件目录

#Vue基础

    Vue组件：
        包含三个部分：
            template：视图
            script：逻辑
            style：样式

    “Mustache”语法 (双大括号)
        表现形式：{{ 语法 }}
            {{ hello }} 定义的参数
            {{ 1+1 }} 运算结果
            {{ '哈哈' }} 字符串
            {{ 0<10?'对的':'错的' }} 三元运算符
            {{ '注意：只能存在单行语句' }}

    Vue基本指令：
        v-html：渲染文本
        v-text：渲染本本
        v-bind: 绑定

    条件渲染
        v-if
        v-else
        v-else-if
        v-show
        问题：v-if和v-show有什么区别？
            v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
            v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
            相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
            一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
            因此，如果需要非常频繁地切换，则使用 v-show 较好；
            如果在运行时条件很少改变，则使用 v-if 较好。

    列表渲染
        v-for
        每个列表都要添加key
        <li v-for="(item,index) in items" v-bind:key='index'>{{ item }}</li>

    事件监听
        v-on
        methods
        修饰符
        简写方法：@ 代替 v-on:

    数组更新监测
        变异方法：引起视图的更新
        替换数组：不会引起视图的更新
    显示过滤/排序结果：
        filter

    计算属性和侦听器
        computed
        计算属性是基于它们的依赖进行缓存的
        watch
        侦听器

    表单输入绑定
        v-model 双向数据绑定
        v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。
        你应该通过 JavaScript 在组件的 data 选项中声明初始值
        修饰符
            .lazy 触发后将输入框的值与数据进行同步 (失去焦点显示) <input v-model.lazy="msg" >
            .number 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符 <input v-model.number="age" type="number">
            .trim 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符 <input v-model.trim="msg">

    Class 与 Style 绑定

        对象语法
            <div v-bind:class="{ active: isActive }"></div>
            active 这个 class 存在与否将取决于数据属性 isActive 的 true

        数组语法
            <div v-bind:class="[activeClass, errorClass]"></div>
            data: {
                activeClass: 'active',
                errorClass: 'text-danger'
            }
            渲染为：<div class="active text-danger"></div>

        绑定内联样式{CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名}

#Vue组件

    1.单文件组件
        三个部分组成
        1.Template
            只能存在一个根元素
        2.Script
        3.Style
            scoped：样式只在当前组件生效

    2.子父级组件交互（通信）

        父 -> 子：props
            数据传递类型限制（验证）
            数据类型验证
            多数据类型验证
            必选项
            默认值
            obj,arr数据类型的默认值

            props: {
                // 基础的类型检查 (`null` 匹配任何类型)
                propA: Number,
                // 多个可能的类型
                propB: [String, Number],
                // 必填的字符串
                propC: {
                type: String,
                required: true
                },
                // 带有默认值的数字
                propD: {
                type: Number,
                default: 100
                },
                // 带有默认值的对象
                propE: {
                type: Object,
                // 对象或数组默认值必须从一个工厂函数获取
                default: function () {
                    return { message: 'hello' }
                }
                },
                // 自定义验证函数
                propF: {
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1
                }
                }
            }

        子 -> 父：emit Event

    3.插槽
        单个插槽
        具名插槽
        作用域插槽：数据是子传父
            注意：在2.5.0之前必须使用到template身上

    4.动态组件
        keep-alive
        什么情况下使用缓存：

    5.css过渡与动画
        在css过渡和动画中自动应用class
            过渡类名：
                v-enter:进入开始
                v-enter-active:执行过程中
                v-enter-to：结束动画

                v-leave：离开开始
                v-leave-active：离开过程
                v-leave-to：离开结束
            动画
        可以配合使用第三方css动画库，如Animate.css

#Axios
    中文axios地址 https://www.kancloud.cn/yunye/axios/234845
    github地址 https://github.com/axios/axios

    1.安装
        npm install axios
    2.引入加载
        import Axios from 'axios'
        Vue.prototype.$axios = Axios
    3.请求
        get请求：
            this.$axios.get('/api' + '?type=top&key=4a2a18ca10530d3ae5ff01a731251e96').then(res=>{
                console.log(res.data.result.data)
            })
            .catch(error=>{
                console.log(error)
            })

        post请求：
            form-data：?name=iwen&age=20
            x-www-form-urlencoded:{name:'iwen',age:20}
            注意：axios接收的post请求参数的格式是form-data格式

                通过引用 import qs from 'qs' 来处理参数格式

                this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php',qs.stringify({
                    user_id:'iwen@qq.com',
                    password:'iwen123',
                    verification_code:'crfvw'
                })).then(res=>{
                    console.log(res.data)
                })
                .catch(error=>{
                    console.log(error)
                })

    4.全局的 axios 默认值
        放在main.js
        axios.defaults.baseURL = 'https://api.example.com';
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        第一句：指定默认的请求路径，然后你调用的时候前面不用写这个地址了
        第二句：作者认证，一般涉及不到，可以不用
        第三句：是post转换代码格式的，不然的话你需要设置headers，需要用qs

    5.拦截器
        在请求或响应被 then 或 catch 处理前拦截它们。

        在main.js中使用
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });

    6.Vue跨域问题

        在vue的开发中是前后端分离，测试过程中必然出现跨域问题，因此vue提供了前端处理跨域处理的方案

        1.修改config  index.js文件
            proxyTable{
                '/api':{
                    target:'**********',//自己接口地址
                    changeOrigin:true,
                    pathRewrite:{'^/api':''}//这里api是代替target里面的地址
                }
            }
        2.添加host
            Vue.prototype.HOST='/api'
            注意：此种跨域解决方案，只能适用于测试阶段，打包的时候，不会具备服务器
                 不能跨域了，如果上线了，后端解决跨域问题

#Vue Router路由
    1.安装
        npm install vue-router
    2.main.js引用
        import Vue from 'vue'
        import VueRouter from 'vue-router'

        Vue.use(VueRouter) //使用




#Element-UI

    1.安装
        npm i element-ui -S

    2.安装按需加载的依赖
        npm install babel-plugin-component -D

    3.修改.babelrc文件
        {
            "presets": [
                ["env", {
                "modules": false,
                "targets": {
                    "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                }
                }],
                "stage-2"
            ],
            "plugins": ["transform-vue-jsx", "transform-runtime",[
                "component",
                {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-chalk"
                }
                ]
            ]
        }

    4.进入组件
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';
        Vue.use(ElementUI);//完整引入


        import { Button, Select } from 'element-ui';
        Vue.use(Button)
        Vue.use(Select)


#Vue-Awesome-Swiper

    1.安装
        npm install vue-awesome-swiper --save

    2.全局配置
        import Vue from 'vue'
        import VueAwesomeSwiper from 'vue-awesome-swiper'
        import 'swiper/dist/css/swiper.css'
        Vue.use(VueAwesomeSwiper)

1.子父集组件交互
2.VueX

    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

    1.什么情况下使用

        虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
        如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：
        Flux 架构就像眼镜：您自会知道什么时候需要它。

    2.Vuex状态管理
        view -->(dispatch) Action -->(commit) Mutations -->(mutate)state --> view
        注意：Action不是必需品，如果有异步操作才可能用到Action,否则可以不使用

    3.Actions
        Actions 提交的是mutation，而不是直接变更状态
        Actions 可以包含任意异步操作

    使用方法

        需要保存的数据
          this.$store.commit('vuextotal', this.totalPrice)

        在store.js中
            mutations:{
                vuextotal(state,newtotal){
                    state.vuextotal = newtotal;
                }
            },











