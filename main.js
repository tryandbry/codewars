
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

export const oneAway = (str1,str2) => {
  if(str1.length == str2.length) return replaceOne(str1,str2);
  else if (str1.length == str2.length + 1) return removeOne(str1,str2);
  else if (str2.length == str1.length + 1) return addOne(str1,str2);

  function replaceOne(str1,str2){
    let diff=false;

    for(let i=0;i<str1.length;i++){
      if(str1[i] != str2[i]){
        if(diff) {
          return false;
        }
        else diff=true;
      }
    }
    return true;
  }
  
  //assumes str1 is the longer string
  function removeOne(str1,str2){
    for(let i=0;i<str1.length;i++){
      if(str1[i] != str2[i]){
        //console.log('i:',i," ",str1.slice(0,i)+"|"+str1.slice(i+1)+"<");
        return str1.slice(0,i) + str1.slice(i+1) != str2 ? false: true;
      }
    }
  }

  function addOne(str1,str2){
    return removeOne(str2,str1);
  }
}

/*
export const stringCompression = (str) => {
  let letter;

  if(str[0] !== undefined) letter = str[0];
  else return '';

  let buffer = '';
  let count = 0;

  for(let i=0;i<str.length;i++){
    if(str[i] != letter && count) {
      buffer += letter + count;
      letter = str[i];
      count = 1;
    }
    else {
      count++;
    }
    //console.log(`str[i]: ${str[i]}, letter: ${str[i]}, count: ${count}, buffer: ${buffer}`);
  }
  buffer += letter + count;

  return buffer.length < str.length ? buffer : str;
}
*/

//export const stringCompression = (str) => {
//  if(!str) return '';
//  //console.log(str.match(/(.)\1*/g));
//  let buffer = str.match(/(.)\1*/g).reduce( (sum, segment) => {
//    return sum + segment[0] + segment.length;
//  },'');
//
//  return buffer.length < str.length ? buffer : str;
//}

export const stringCompression = (str) => {
  let buffer = '';
  let letter;
  let count;

  for(let i=0;i<str.length;i++){
    if(str[i] != letter) {
      if(count) buffer += letter + count;
      letter = str[i];
      count = 1;
    }
    else {
      count++;
    }
  }
  buffer += letter + count;

  return buffer.length < str.length ? buffer : str;
}














