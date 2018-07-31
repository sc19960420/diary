/**
 *  ios 手机处理时间格式 较为严格
 *  new Date(data)
 *  data 的属性一定要是Number
 *  Android 上对时间控制较为宽松
 */

 new Date('2018-08-08 20:20:20').getTime();  // Ios => NuN

 new Date('2018-08-08 20:20:20').getTime();  // Android => 1533730820000

 // 解决办法 
 new Date(('2018-08-08 20:20:20').replace(/-/g, "/")).getTime(); // 1533730820000