# common.js 使用文档
- common.js中包含了项目中常用的一些函数，以便于快速进行开发

## 配置
1. 在项目中引用时，在 `main.js` 中进行如下引用
```JavaScript
//main.js
import * as common from './common.js'
```
2. 在 `main.js` 中进行全局配置
```JavaScript
//main.js
Vue.prototype.$common = common
```
至此，common.js已经成功引入至项目

## 使用
- 在配置好以后，可直接在任意的 `.vue` 文件下的 `<script></script>` 标签内使用
### 使用方法
在 `<script></script>` 标签内的函数里使用 `this.$common.xxx` 即可  
注意：在Vue下的函数需要写在 `export default{}` 内的 `methods:{}` 内
### 使用示例
```html
<script>
export default {
  methods:{
    //示例函数
    example(){
      //Get_Url()是common.js中包含的一个函数
      window.location.href = this.$common.Get_Url()
      //example是common.js中包含的一个变量
      console.log(this.$common.example)
    }
  }
}
</script>
```

## 添加新函数或变量
- common.js支持添加新的常用函数
### 添加函数或变量的方法
1. 在 `common.js` 中以如下格式添加函数
```JavaScript
//FuntionName为函数名，params为参数
const FuntionName = function(params){
    //函数主体
}
//添加新的变量
const Name = ''
```
2. 在 `export{}` 下添加新的函数名或变量名

## 已有函数及变量
### 函数
1. Get_Url()
- 功能：返回接入Mixin服务器的地址，用于与Mixin服务器进行授权操作
- 参数：调用无需参数
- 返回值：Mixin服务器Url

2. Get_AcToken(that)
- 功能：获取网 url 中的 `access_token`,注意，此函数一般用于用户第一次授权登录后使用
- 参数：vue(一般情况下为`this`)
- 返回值：当前授权用户的`access_token`,当用户未登录时返回`null`

3. debounce(fn,delay)
- 功能：防抖，让函数只执行最后一次
- 参数：需要执行的函数体 `fn` 以及时间 `delay`，时间单位为毫秒ms
- 返回值：无返回值
- 示例使用：
```JavaScript
    //inp为一input框的class名，oninput为监听输入事件
    inp.oninput = debounce(function(){
      //function中为执行的函数体
      console.log(this.value);
    //500即500ms
    },500)
    //函数的作用为：将每次监听输入改为在未输入的delay毫秒后执行函数fn
```

4. throttle(fn,delay)
- 功能：节流，控制函数的执行次数（即多长时间运行一次）
- 参数：需要执行的函数体 `fn` 以及时间 `delay`，时间单位为毫秒ms
- 返回值：无返回值
- 示例使用：
```JavaScript
  //滑轮滚动事件
  window.onscroll = this.$common.throttle(function(){
    //function中为执行的函数体
    console.log("Hello World")
    //500即500ms
  },500)
```

5. checkLogin(that,value,successfn,errorfn)
- 功能：检查登录状态
- 参数：  
        that: `vue`，一般情况下为 `this`  
        value: 检查登录状态的值  
        successfn: 已经登录后执行的函数体  
        errorfn: 未登录时执行的函数体
- 返回值：无返回值

6. multisign(that,method,url,data)
- 功能：使用Mixin进行多重签名
- 参数:
  | 参数 | 值 |
  | :--------: | :---------: |
  | that | vue(一般情况下为 `this` ) |
  | method | 'post' / 'get' |
  | url | 请求的url |
  | data | 需要传递的数据 |
- 返回值：无返回值

### 变量
1. example
- 功能：作为示例