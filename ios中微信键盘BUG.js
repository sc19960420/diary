/**
 * input 输入框弹出ios软键盘
 * 输入点击完成  DOM元素 原位置点击不到
 * 
 * 键盘收回  但是DOM元素任然是被键盘撑起的状态，所以点击DOM初始位置 无效
 * 
 * ios 12.1    iphonex、iphone6，ihpone7等部分机型
 */

//  解决办法 ：DOM元素重绘

document.body && (document.body.scrollTop = document.body.scrollTop);

/**
 * 处理iOS 微信客户端6.7.4 键盘收起页面未下移bug
 */
;(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', (e) => {
    // 这里加了个类型判断，因为a等元素也会触发blur事件
    ['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false)
}, true)

//作者：ZoenLeo
//链接：https://juejin.im/post/5c07442f51882528c4469769
//来源：掘金
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。