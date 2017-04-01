function getStartTime(schedules, duration) {
  function toMinutes(s) {
    return s.split(':').reduce(function(h, m) {
      return parseInt(h) * 60 + parseInt(m);
    });
  }
  return schedules.reduce(function(p, n) {
    return p.concat(n);
  }, [['00:00', '09:00'], ['19:00', '24:00']]).sort().reduce(function(p, n) {
    debugger;
    if (!p.start && toMinutes(p.last) + duration <= toMinutes(n[0])) {
      p.start = p.last;
    }
    p.last = p.last < n[1] ? n[1] : p.last;
    return p;
  }, {last: '00:00', start: null}).start;
}

console.log(getStartTime([[['10:07', '10:39'], ['10:41', '11:03'], ['12:21', '12:22'], ['15:49', '16:11'], ['17:29', '17:54']], [['09:37', '11:19'], ['11:27', '13:37'], ['16:29', '17:41']], [['09:48', '12:26'], ['15:41', '15:59'], ['18:50', '18:57']], [['09:41', '09:57'], ['10:03', '10:14'], ['10:32', '10:39'], ['10:56', '11:17'], ['11:23', '11:41'], ['11:59', '12:03'], ['12:28', '12:45'], ['17:19', '17:27'], ['18:56', '18:57']], [['11:21', '12:42'], ['12:51', '13:20'], ['17:51', '17:53'], ['18:07', '18:11']]]
,37));
