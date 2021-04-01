/**
 * 数组中每个元素都循环一次
 */
function plusOne(digits: number[]): number[] {
  let carry = 1
  for(let j = digits.length-1;j>=0;j--){
    let add = digits[j] + carry
    carry = Math.floor(add/10)
    digits[j] =  add%10
  }
  if(carry){
    digits.unshift(carry)
  }
  return digits
};
/**
 * 涉及到进位的位数进行处理，其余的不需要处理
 */
function plusOne(digits: number[]): number[] {
  for(let j = digits.length-1;j>=0;j--){
    if(digits[j] !=9){
      digits[j]++
      break
    }else{
      digits[j] = 0
      if(j === 0){
        digits.unshift(1)
      }
    }
  }
  return digits
};