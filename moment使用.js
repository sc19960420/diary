// 昨天
moment(new Date()).subtract(1,'days').format('YYYY-MM-DD')

// 上周
let weekOfday = parseInt(moment().format('d'))
moment().subtract(weekOfday + 6, 'days').format('YYYY-MM-DD') //周一
moment().subtract(weekOfday, 'days').format('YYYY-MM-DD')   // 周末

// 上月
let today = '-' + new Date().getDate();
let lastMonthToday = '-' + (moment(new Date()).add({ days:today,months:-1 }).dates() + new Date().getDate() - 1);
moment(new Date()).add({ days:lastMonthToday,months:-1 }).format('YYYY-MM-DD') //月初
moment(new Date()).add({ days:today,months:-1 }).format('YYYY-MM-DD') //月末

// 开始时间  -- 结束时间
// string  表示年月日
moment().startOf(String);

moment().endOf(String);