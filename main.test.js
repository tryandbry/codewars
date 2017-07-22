import {expect} from 'chai';
import {spy} from 'sinon';
import codewars from './main';


describe('unit tests',function(){
  /*
  beforeEach(function(){
  });
  */

  it('test 1',function(){
    let arr1=[1,2,3,4,5];
    let arr2=[0,0,0,0,0];
    expect(codewars(arr1,arr2)).to.deep.equal([]);
  });

  it('test 2',function(){
    let arr1=[1,2,3,4,5];
    let arr2=[5,4,3,2,1];
    expect(codewars(arr1,arr2)).to.deep.equal([[1,5],[2,4],[3,3],[4,2],[5,1]]);
  });

  it('test 3',function(){
    let arr1=[0,1,3,4,5];
    let arr2=[1,0,3,2,1];
    expect(codewars(arr1,arr2)).to.deep.equal([[3,3],[4,2],[5,1]]);
  });

  it('test 4',function(){
    let arr1=[1,2,3,4,5];
    let arr2=[-1,2,-3,4,-5];
    expect(codewars(arr1,arr2)).to.deep.equal([[1,-1],[3,-3],[5,-5]]);
  });

  it('test 5',function(){
    let arr1=[1,2,3,0,5,-2];
    let arr2=[-1,2,-3,4,-5,6];
    expect(codewars(arr1,arr2)).to.deep.equal([[2,2],[0,4],[-2,6]]);
  });

});
