function merge2String(s1, s2){
    var result = '';
    if(s1.length >= s2.length){
        for(var i = 0; i < s2.length; i++){
            result += s1[i] + s2[i];
        }
        for(var i = s2.length; i < s1.length; i++){
            result += s1[i];
        }
    }
    else{
        for(var i = 0; i < s1.length; i++){
            result += s1[i] + s2[i];
        }
        for(var i = s1.length; i < s2.length; i++){
            result += s2[i];
        }
    }
    return result;
}
console.log(merge2String('abc', '123'));
console.log(merge2String('abc', '0123'));
console.log(merge2String('abcd', '123'));