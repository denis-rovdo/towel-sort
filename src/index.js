
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let str = [];
 if(matrix === undefined){
  return str;
 }else{
  let arr = matrix.forEach((element, i) => {
    if(i % 2 === 0){
      str.push(...element)}
      else{
        str.push(...(element.reverse()));
      }
    });
    return str;
 }  

};

