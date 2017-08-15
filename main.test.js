import {expect} from 'chai';
//import {spy} from 'sinon';
import * as codewars from './main';

describe('isUnique',function(){
  xit('checks if a string has unique characters',function(){
    let str1 = 'abcdefg';
    let str2 = 'aabcdefg';
    let str3 = 'Aabcdefg';
    let str4 = '1#$%61jaj5a';
    let str5 = '1@#$%th&^*O<>';
    expect(codewars.isUnique(str1)).to.be.true;
    expect(codewars.isUnique(str2)).to.be.false;
    expect(codewars.isUnique(str3)).to.be.true;
    expect(codewars.isUnique(str4)).to.be.false;
    expect(codewars.isUnique(str5)).to.be.true;
  });
});

describe('checkPermutation',function(){
  xit('checks if two strings are permutations of each other',function(){
    let str1 = 'taco';
    let str2 = 'ocat';
    expect(codewars.checkPermutation(str1,str2)).to.be.true;

    str1 = 'pikachu';
    str2 = 'octocat';
    expect(codewars.checkPermutation(str1,str2)).to.be.false;

    str1 = 'imma giant banana';
    str2 = 'igbmiamananatna  ';
    expect(codewars.checkPermutation(str1,str2)).to.be.true;

    str1 = 'watermelon';
    str2 = 'relowatnem';
    expect(codewars.checkPermutation(str1,str2)).to.be.true;
  });
});

describe('URLify',function(){
  xit('replaces spaces with \'%20\'',function(){
    let str1 = 'space space';
    expect(codewars.URLify(str1)).to.equal('space%20space');

    str1 = '    ';
    expect(codewars.URLify(str1)).to.equal('%20%20%20%20');
  });
});

describe('palindromePermutation',function(){
  xit('checks if can be valid palindrome',function(){
    let str1 = 'aabbc';
    expect(codewars.palindromePermutation(str1)).to.be.true;

    str1 = 'cbaaabc';
    expect(codewars.palindromePermutation(str1)).to.be.true;
  });
});

describe('oneAway',function(){
  xit('checks if two strings are one edit away (insert,remove,replace)',function(){
    expect(codewars.oneAway('pales','pale')).to.be.true;
    expect(codewars.oneAway('pale','ale')).to.be.true;
    expect(codewars.oneAway('pale','ple')).to.be.true;
    expect(codewars.oneAway('pale','ble')).to.be.false;
    expect(codewars.oneAway('ale','pale')).to.be.true;
    expect(codewars.oneAway('pale','bale')).to.be.true;
    expect(codewars.oneAway('pale','bake')).to.be.false;
  });
});

describe('stringCompression',function(){
  xit('compresses strings',function(){
    expect(codewars.stringCompression('aabcccccaaa')).to.equal('a2b1c5a3');
    expect(codewars.stringCompression('aabccccc')).to.equal('a2b1c5');
    expect(codewars.stringCompression('')).to.equal('');
    expect(codewars.stringCompression('aaa')).to.equal('a3');
  });

  xit('compresses only if more efficient',function(){
    expect(codewars.stringCompression('abcde')).to.equal('abcde');
  });

});

describe('rotateMatrix',function(){
  it('rotates a 2x2 matrix',function(){
    expect(codewars.rotateMatrix([[1,2],[3,4]])).to.deep.equal([[3,1],[4,2]]);
  });
});

















