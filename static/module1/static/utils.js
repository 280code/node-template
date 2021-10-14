/*
 * @Author: 280code
 * @Date: 2021-10-13 19:34:40
 * @LastEditTime: 2021-10-13 21:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \canvas\基础\utils.js
 */
    function random(minnimum,maximum){
        return Math.random()*(maximum-minnimum)+minnimum;
    }


    //传入一个最小值和最大值，以及一个数字。
//如果数字小于最小值，则返回最小值，如果数字大于最大值，则返回最大值
/**
 * @description: 限定数字的范围
 * @param {*} max：数字能达到的最大值
 * @param {*} min：数字能达到的最小值
 * @param {*} n：需要检测的数字
 * @return {*}  n>max?max:n||n<min?min:n
 */        
    function toCheck(max,min,n){
    if(n>max){
        return max;
    }
    if(n<min){
        return min
    }
    return n
}
/**
 * @description: 返回一个从0至给定数值的整数
 * @param {*} num 随机整数的最大值
 * @return {*} 返回从0~num的数字
 */        
    function IntRandom(num){
    return parseInt(Math.random()*num);
}
/**
 * @description: 返回一个rgb格式的随机颜色，需要与IntRandom函数合用
 * @param {*} 无
 * @return {*} 返回一个随机颜色
 */        
    function RRColor(){
    return `rgb(${IntRandom(255)},${IntRandom(255)},${IntRandom(255)})`;
}