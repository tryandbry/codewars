
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

export const checkPermutation = (str1,str2) => {
  //BUR optimization
  if(str1.length != str2.length) return false;

  let hash1 = {};
  let arr = str1.split('');
  arr.forEach( letter => {
    if(hash1[letter]) hash1[letter]++;
    else hash1[letter] = 1;
  });

  arr = str2.split('');
  for(let i in arr){
    if(!hash1[arr[i]] || hash1[arr[i]] < 0) {
      return false;
    }
    else hash1[arr[i]]--;
  }
  return true;
}
