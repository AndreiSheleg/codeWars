const warnTheSheep = queue => {
  let indexQueue = 0
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
    } else {
     indexQueue = queue.findIndex((x) => x === 'wolf' );
     return `Oi! Sheep number ${queue.length - indexQueue - 1}! You are about to be eaten by a wolf!`;
    }
}
