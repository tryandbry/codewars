export default function(arr1,arr2){
  let hash = {};
  let a1 = trim(arr1);
  let a2 = trim(arr2);
  a1.forEach(n=>{
    a2.forEach(m=>{
      if(!hash[n+m]) hash[n+m]=[[n,m]];
      else hash[n+m].push([n,m]);
    });
  });

  //find longest entry
  let keys = Object.keys(hash);
  let result = [];
  let count = 1;
  let sum = -Infinity;
  keys.forEach(key => {
    if(hash[key].length > count){
      count = hash[key].length;
      result = hash[key];
    }
    else if(hash[key].length == count &&
            key > sum){
      sum = key;
      result = hash[key];
    }
  });
  console.log(result);
  return result.length == 1 ? [] : result;
}


function trim(arr){
  let buffer = {};
  arr.forEach(n => {
    buffer[n]=true;
  });
  return Object.keys(buffer).map(n => +n);
}
