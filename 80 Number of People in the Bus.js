const number = busStops => {
  let result = 0;
  for (let i = 0; i < busStops.length; i++) {
    // на входе массив массивов, обращаемся к масисву с данными по первой остановке,
    // поэтому использую двойные квадратные скобки
    result += busStops[i][0] - busStops[i][1]
  };
  return result;
}
