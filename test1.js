function countdown () {
  // 目标日期时间戳
  const end = Date.parse(new Date('2017-12-01'))
  // 当前时间戳
  const now = Date.parse(new Date())
  // 相差的毫秒数
  const msec = end - now
  // 计算时分秒数
  let day = parseInt(msec / 1000 / 60 / 60 / 24)
  let hr = parseInt(msec / 1000 / 60 / 60 % 24)
  let min = parseInt(msec / 1000 / 60 % 60)
  let sec = parseInt(msec / 1000 % 60)
  // 个位数前补零
  hr = hr > 9 ? hr : '0' + hr
  min = min > 9 ? min : '0' + min
  sec = sec > 9 ? sec : '0' + sec
  // 控制台打印
  console.log('${day}天 ${hr}小时 ${min}分钟 ${sec}秒')
  // 一秒后递归
  setTimeout(function () {
    countdown()
  }, 1000)
}
