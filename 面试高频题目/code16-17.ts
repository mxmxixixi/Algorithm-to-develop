function letterCombinations(digits: string): string[] {
  if(digits.length === 0){
    return []
  }
  const assist:{[key:string]:string[]} = {
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z'],
  }
  let current = [...assist[digits[0]]]
  let pre = current
  for(let i=1;i<digits.length;i++){
    current= []
    pre.forEach((v)=>{
      assist[digits[i]].forEach((vi)=>{
        current.push(v+vi)
      })
    })
    pre = current
  }
  return current
};