
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

export const URLify = (str) => {
  return str.replace(/\s/g,'%20');
}

/*
export const palindromePermutation = (strOriginal) => {
  let str = strOriginal.toLowerCase();
  str = str.split('').sort().join('');
  str = str.replace(/(.)\1/g,'');

  return str.length % 2 ? true : false;
}
*/

/*
export const palindromePermutation = (str) => {
  let hash = {};
  str.split('').forEach( (letter) => {
    if(hash[letter]) delete hash[letter];
    else hash[letter] = true;
  });

  return Object.keys(hash).length % 2 ? true : false;
}
*/

export const palindromePermutation = (str) => {
  let hash = {};
  for(let i=0;i<str.length;i++){
    if(hash[str[i]]) delete hash[str[i]];
    else hash[str[i]] = true;
  }

  return Object.keys(hash).length % 2 ? true : false;
}
