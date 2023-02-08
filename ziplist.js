const list1 = ['a', 'b', 'c'];
const list2 =[1, 2, 3];
function zipList(first,second){
  const result = [];
  for (let i = 0; i < first.length || i < second.length ; i++){
    result.push(first[i],second[i]);
  }
  return result;
}
console.log(zipList(list1,list2));

function zipListTheSampleWay(first, second){
  return _.flatten(_.zip(first,second));
}

console.log(zipListTheSampleWay(list1,list2));
