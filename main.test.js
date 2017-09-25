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

describe('staircase',function(){
  it('prints a row',function(){
    expect(codewars.staircase(6)).to.deep.equal([
      '     #',
      '    ##',
      '   ###',
      '  ####',
      ' #####',
      '######',
    ]);
  });
});
