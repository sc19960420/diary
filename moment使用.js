// 昨天
moment(new Date()).subtract(1,'days').format('YYYY-MM-DD')

// 上周
moment().subtract(weekOfday + 6, 'days').format('YYYY-MM-DD') //周一
moment().subtract(weekOfday, 'days').format('YYYY-MM-DD')   // 周末

// 上月
moment(new Date()).add({ days:lastMonthToday,months:-1 }).format('YYYY-MM-DD') //月初
moment(new Date()).add({ days:today,months:-1 }).format('YYYY-MM-DD') //月末