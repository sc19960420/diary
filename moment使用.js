// 昨天
moment(new Date()).subtract(1,'days').format('YYYY-MM-DD')

// 上周
let weekOfday = parseInt(moment().format('d'))
moment().subtract(weekOfday + 6, 'days').format('YYYY-MM-DD') //周一
moment().subtract(weekOfday, 'days').format('YYYY-MM-DD')   // 周末

// 上月
moment().month(moment().month() - 1).startOf('month').format('YYYY-MM-DD') //月初
moment().month(moment().month() - 1).endOf('month').format('YYYY-MM-DD') //月末

// 开始时间  -- 结束时间
// string  表示年月日
moment().startOf(String);

moment().endOf(String);