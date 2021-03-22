/**
 * 20. 有效的括号
 */
 function isValid(s: string): boolean {
  if(s.length <=1){
    return false
  }
  const rule = new Map<String,String>([
    [')','('],
    ['}','{'],
    [']','['],
  ])
  const ruleLeft = []
  for(let index=0;index<s.length;index++){
    if(!rule.has(`${s[index]}`)){
      ruleLeft.push(s[index])
    }else{
      if(rule.get(`${s[index]}`) !== ruleLeft.pop()){
          return false
      }
    }
  }
  return ruleLeft.length ==0
};
console.log("isValid",isValid("()"))