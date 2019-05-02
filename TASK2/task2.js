function main(InputString) {
  var str    = InputString.split(',');
  var final  = newRange(str);
  var result = final.map((final)=> {
        return parseInt(final,10);
      });

  console.log(findUnique(result));
  
}

function newRange(arr) {
  var final = arr;
  arr.forEach(function (num, index) {
    
    if (num.indexOf("-") > -1) {
      console.log(num);
      var rangeElement = num.split('-');
      var start        = +rangeElement[0];
      var stop         = +rangeElement[1];
      replace          = expandRange(start, stop);
      final.splice(index, 1);
      final            = final.concat(replace);  
     console.log(start,stop); 
    }
    
  })

  return final;
}

function expandRange(start, stop) {
  var expandedArray = [];
  for (var i = start; i <= stop; i++) {
    expandedArray.push(i);
  }

  return expandedArray;

}

function findUnique(arr) {
  var unique    = [];
  var duplicate = [];
  for (let i = 0; i < arr.length; i++){
    if(unique.includes(arr[i]) && !duplicate.includes(arr[i])){
      duplicate.push(arr[i]);
    }
    else{
      unique.push(arr[i]);
    }
  }
  return [unique, duplicate];
}

main("1,2,2,6,8,3,3,6,1,5-10,4,15-20");
