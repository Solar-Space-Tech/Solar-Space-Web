const example = 5000;

const Get_Url = function() {
    let client_id = '64abce35-ad54-4828-9e87-b2f46148b0ad';
    let oauth = 'PROFILE:READ+PHONE:READ+ASSETS:READ+MESSAGES:REPRESENT';
    let url = 'https://mixin-www.zeromesh.net/oauth/authorize?'
    let return_to = 'leaper.one';
    let getUrl = url + 'client_id=' + client_id + '&scope=' + oauth +'&response_type=code&return_to=' + return_to;
    return getUrl;
}

const Get_AcToken = function(that){
    let access_token = that.$route.query.access_token;
    return access_token?access_token:null
}

//防抖
const debounce = function(fn,delay){
    let time = null;
    return function(){
        if(time !== null){
            clearTimeout(time);
        }
        time = setTimeout(()=>{
            fn.call(this);
        },delay)
    }
}

//节流
const throttle = function(fn,delay){
    let flag = true;
    return function(){
        if(flag){
            setTimeout(()=>{
                fn.call(this);
                flag = true;
            },delay)
        }
        flag = false;
    }
}

const checkLogin = function(that,value,successfn,errorfn){
    let token = sessionStorage.getItem(value)
    if(!token){
        errorfn.call(that)
    }else{
        successfn.call(that)
    }
}

const multisign = function(that,method,url,data){
    that.$http({
        method:method,
        url:url,
        data:data
    }).then((res)=>{
        console.log(url,' 的返回结果：',res.data.code_id);
        window.location.href =  'mixin://codes/' + res.data.code_id
    }).catch((error)=>{
        console.log(error)
        that.$message.error("请求失败，请稍后重试")
    })
}


export{
    example,
    Get_Url,
    Get_AcToken,
    debounce,
    throttle,
    checkLogin,
    multisign,


}