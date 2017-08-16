/**
 * Created by YEFY on 2017/7/31.
 */
/*var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var content;

function readFileIfRequire(cd){
    if(!content){
        fs.readFile(__filename, 'utf8', function(err,data){
            content = data;
            console.log('readFileIfRequire: readFile');
            cd(err, content);
        });

    }else{
        //process.nextTick(function () {
            console.log('readFileIfRequire: cache');
            cd(null, content);
        //});
    }
}

readFileIfRequire(function (err, data) {
    console.log('1.length:', data.length);

    readFileIfRequire(function (err,data2) {
        console.log('2.length:', data2.length);
    });
    console.log('Reading file again...');

});

console.log('Reading file ...');*/

/*foo = function(bar) {
    console.log(bar);
    if(bar>1000){
        return;
    }
    return process.nextTick(function() {
        return foo(bar + 1);
    });
};
setImmediate(function () {
    console.log('nihao');
});
foo(1);*/
/*var arr= ['+', '-', ''];
var arr1 = ['1'];
for(var i= 2; i<10; i++){
    var j = arr1.length;
    for(var k= 0; k<j; k++){
        var temp = arr1.pop();
        for(var a=0;a<3; a++){
            var temp1 = temp + arr[a] + i.toString();
            arr1.unshift(temp1);
        }
    }
}
var m = arr1.length;
console.log(arr1.length);
for(var h=0; h<m; h++){
    var result = arr1.pop();
    if(eval(result)==100){
        console.log(result);
    }
}*/
/**
 * @param {string} s
 * @return {number}
 */
/*var lengthOfLongestSubstring = function(s) {
    if(s=="") return 0;
    var arr = s.split("");
    if(arr.length==1) return 1;
    var outcome = [arr[0]];
    for(var i= 0,h=arr.length;i<h;i++){
        for (var j= i+2; j<=h;j++ ){
            var arrTemp = arr.slice(i,j);
            if(arrTemp.length==filt(arrTemp).length){
                if(arrTemp.length>outcome.length){
                    outcome=arrTemp;
                }
            }
        }
    }
    console.log(outcome);
    return outcome.length;
};
//数组去重
function filt(arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) == index;
    });
}
console.log(filt(["a", "b", "a","c"]));

console.time("yefy");
console.log(lengthOfLongestSubstring("oueqeeswxcrphezvtctphjikywuzptlfprxuwqstu"));
console.timeEnd("yefy");
console.log(["a","b"].join(""));

function func(s) {
    if(s=="") return 0;
    var arr = s.split("");
    if(arr.length==1) return 1;
    for(var i= 0,h=arr.length; i<h; i++ ){
        for(var j=i+1;j<h;j++){
            if(arr[i]==arr[j]){
                var arr1 = arr.slice(0,j);
                var arr2 = arr.slice(j);
                var arr3 = arr.slice(i+1);
                var arr4 = arr.slice(0, i+1);
                var s1 = arr1.join("");
                var s2 = arr2.join("");
                var s3 = arr3.join("");
                var s4 = arr4.join("");
                return Math.max(func(s1),func(s2),func(s3),func(s4));
            }
        }
    }
    return arr.length;
}
console.time("yefy1");
console.log(func("oueqeeswxcrphezvtctphjikywuzptlfprxuwqstu"));
console.timeEnd("yefy1");*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var outcome = l3;
    var flag=0;
    while(l1!==null||l2!==null||flag){
        if(l1!==null){
            l3.val +=l1.val;
        }
        if(l2!==null){
            l3.val+=l2.val;
        }
        var temp = l3.val+flag;
        l3.val = temp%10;
        if(temp/10>=1){
            flag = 1;
        }else{
            flag = 0;
        }
        if((l1!=null&&l1.next!==null)||(l2!=null&&l2.next!==null)||flag){
            l3.next = new ListNode(0);
            l3 = l3.next;
        }
        if((l1!=null)&&l1.next) l1 = l1.next;
        else l1 = null;
        if((l2!=null)&&l2.next) l2 = l2.next;
        else l2 = null;

    }
    return outcome;
};
 function ListNode(a){
     this.val = a;
     this.next = null;
 }
var l1 = new ListNode(1);
l1.next = new ListNode(8);
//l1.next.next = new ListNode(3);
var l2 = new ListNode(0);
//l2.next = new ListNode(6);
//l2.next.next = new ListNode(4);


console.time("yefy");
var l3 =temp1= addTwoNumbers(l1, l2);
do{
    console.log(l3.val);
    temp1 = l3;
    l3 = l3.next;
}while(temp1.next);
console.timeEnd("yefy");*/

/*
var _ = require("./underscore");
var fibonacci = _.memoize(function(n){
    return n<2?n:arguments.callee(n-1)+arguments.callee(n-2);
});
console.time("yefy");
console.log(fibonacci(40));
console.timeEnd("yefy");
console.time("yefy2");
console.log(fibonacci(40));
console.timeEnd("yefy2");

var fibonacci1 =function(n) {
    return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
};
console.time('yefy1');
console.log(fibonacci1(40));
console.timeEnd('yefy1');*/


/*
var square = function(num){
    var key = JSON.stringify(Array.prototype.slice.call(num));

    if(!square.cache[key]){
        var result={};
        //Computation
        console.log("Computing value...");
        result = num*num;
        square.cache[key] = result;
    }

    return square.cache[key];
}

square.cache = {};

console.log(square([3]));*/
/*var max = Math.max.apply(null, [1, 2, 3, 4]);
console.log(max);
var obj = {
    length: 3,
    0: "first",
    1: "second",
    2: "thred"
};
var result = Array.prototype.slice.call([1,2,3]);
console.log(result);
var arr = ['1', '2', '3'];
var result1 = arr.slice();
arr[2] = '4';
console.log(result1);
console.log(arr);*/

function findMin(s){
    var arr = s.split('');
    var outcome = 0;
    for(var i=0,l=arr.length;i<l-1;){
        var same = 1;
        inner:
        for(var j=i+1;j<l;j++){
            if(arr[i]==arr[j]){
                same++;
            }else{
                break inner;
            }
        }
        i=j;
        outcome+= Math.floor(same/2);
    }
    return outcome;
}
var outcome = findMin('rrrrrr');
console.log(outcome);
