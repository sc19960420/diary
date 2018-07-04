// 定义全局变量  isLogin  第一个请求登录  更改isLogin属性  减少后续请求
router.beforeEach((to, from, next) => {
    // 更改每页的title
    if(to.meta.title) document.title = to.meta.title;
    if(Vue.prototype.islogin) {
      next()
    }else {
        Vue.axios.get('/login').then( res=> {
            if(res.data.code == 1) {
                Vue.prototype.islogin = true;
                next()
            }
            if(res.data.code == 2 || res.data.code == 0){
                //  router index.js 中设置requireAuth 属性  防止页面中多次请求
                //  需要引导路由 到login中 停止跳转
              to.meta.requireAuth === false ? next() : next({ name: 'login' })
            }
        })
    }
})