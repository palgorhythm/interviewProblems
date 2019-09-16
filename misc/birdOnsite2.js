"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");


const areIsomorphic = (s1,s2) => {
    if(s1.length !== s2.length) return false;
    const rMap = {};
    const fMap = {};
    for(let i = 0; i < s1.length; i++){
        if(rMap.hasOwnProperty(s2[i]) && rMap[s2[i]] !== s1[i]){
            return false;
        }
        if(fMap.hasOwnProperty(s1[i]) && fMap[s1[i]] !== s2[i]){
            return false;
        }
        fMap[s1[i]] = s2[i];
        rMap[s2[i]] = s1[i];
    }
    return true;
}

const allIsomorphic = arr => {
    // const withDups = [];
    // arr.forEach(s => {
    //     const counts = {};
        
    // })
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(j !== i){
                if(!areIsomorphic(arr[i],arr[j])){
                    return false;
                }
            }
        }
    }
    return true;
}

const groupWords = arr => {
    const cache = {};
    
}

const t = [
    {i:['foo','boo'],expected:true},
    {i:['abc','bbc'],expected:false},
    {i:['bot','abc'],expected:true},
    {i:['bba','arx'],expected:false},
]

const assert = (tests) => {
    tests.forEach(test => {
        console.log('input',test.i,'result',areIsomorphic(...test.i),'expected',test.expected);
    })
}

// assert(t);



const t2 = [
    {i:['aaa','bbb','ccc'],expected:true},
    {i:['abc','def','ghi'],expected:true},
    {i:['abc','xyz','fgf'],expected:false},
    {i:['lla','ppo','mmw','112'],expected:true},
]

const assert2 = (tests) => {
    tests.forEach(test => {
        console.log('input',test.i,'result',allIsomorphic(test.i),'expected',test.expected);
    })
}

assert2(t2);