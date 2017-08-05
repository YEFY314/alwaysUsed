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
var lengthOfLongestSubstring = function(s) {
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
console.timeEnd("yefy1");
