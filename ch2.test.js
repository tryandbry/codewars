import {expect} from 'chai';
//import {spy} from 'sinon';
import * as codewars from './ch2';

describe('Chapter 2: Linked List',function(){
  describe('Base LinkedList functionality',function(){
    let list;
    beforeEach(function(){
      list = new codewars.LinkedList(1);
    });

    it('instantiates',function(){
      expect(list).to.be.an.instanceOf(codewars.LinkedList);
    });

    it('stores a value',function(){
      expect(list.head.val).to.equal(1);
    });

    it('adds to head',function(){
      expect(list.head.val).to.equal(1);
      list.pushToHead(2);
      expect(list.head.val).to.equal(2);
      list.pushToHead(3);
      expect(list.head.val).to.equal(3);
      /*
      expect(list.next.val).to.equal(2);
      expect(list.next.next.val).to.equal(3);
      */
    });

    it('adds to tail',function(){
      expect(list.head.val).to.equal(1);
      list.pushToTail(2);
      expect(list.tail.val).to.equal(2);
      list.pushToTail(3);
      expect(list.tail.val).to.equal(3);
    });

    it('removes nodes from the middle of the list',function(){
      let a = list.pushToTail(2);
      list.pushToTail(3);
      list.pushToTail(4);
      list.popNode(a);
      expect(list.head.val).to.equal(1);
      expect(list.head.next.val).to.equal(3);
      expect(list.head.next.next.val).to.equal(4);
    });

    it('removes nodes from the head',function(){
      list.pushToTail(2);
      list.popNode(list.head);
      expect(list.head.val).to.equal(2);
    });

    it('removes nodes from the tail',function(){
      list.pushToHead(2);
      list.popNode(list.tail);
      expect(list.tail.val).to.equal(2);
    });

    it('tracks list length',function(){
      expect(list.length).to.equal(1);
      list.pushToTail(2);
      expect(list.length).to.equal(2);
      list.pushToHead(3);
      expect(list.length).to.equal(3);
      list.popNode(list.head);
      expect(list.length).to.equal(2);
      list.popNode(list.tail);
      expect(list.length).to.equal(1);
    });
  });

  describe('Problem 1.1',function(){
    describe('dedupeList',function(){
      let list;
      beforeEach(function(){
        list = new codewars.LinkedList(1);
      });

      it('removes nodes with duplicate values',function(){
        list.pushToTail(1);
        list.pushToTail(1);
        list.pushToTail(1);
        list.pushToTail(1);
        codewars.dedupeList(list);
        expect(list.length).to.equal(1);
      });
    });

    describe('dedupeListNoBuffer',function(){
      /*
       * Note: same test(s) as dedupeList
       */
      let list;
      beforeEach(function(){
        list = new codewars.LinkedList(1);
      });

      it('removes nodes with duplicate values',function(){
        list.pushToTail(1);
        list.pushToTail(1);
        list.pushToTail(1);
        list.pushToTail(1);
        codewars.dedupeListNoBuffer(list);
        expect(list.length).to.equal(1);
      });
    });
  });
});





























