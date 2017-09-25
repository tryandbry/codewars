
export const isUnique = (str) => {
  let hash = {};
  let arr = str.split('');
  for(let i in str.split('')){
    if(hash[arr[i]] === true){
      return false;
    }
    else hash[arr[i]] = true;
  }
  return true;
}

export const staircase = (n) => {
  const buildRow = (space,total) => {
    let row = '';
    let counter = space;
    while(counter--) {
      row += ' ';
    }
    counter = total-space;
    while(counter--){
      row += '#';
    }
    return row;
  }

  let arr=[];
  let i = n-1;
  while(i > -1) {
    //console.log(buildRow(i,n));
    arr.push(buildRow(i,n));
    i--;
  }

  return arr;
}
