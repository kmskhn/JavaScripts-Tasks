// function main(input){
//     console.log(Validate(input));
// }

function notSpecial(inputString) {
    var Characters=/[a-zA-Z0-9]/igm;
    if(inputString.match(Characters)){
        return true;
    }else{
        return false;
    }

}
 

    function reverse(inputString) {
        InputArray = inputString.split('');
        var start  = 0;
        var end    = InputArray.length-1;
  
        while(start<end){
            if(!notSpecial(InputArray[start])){
                start++;
            }
            else if (!notSpecial(InputArray[end])){
                end--;
            }
            else {
                var temp          = InputArray[start];
                InputArray[start] = InputArray[end];
                InputArray[end]   = temp;
                start++;
                end--;
            }
           
        }

        
        console.log(InputArray.join(''));


    }




    reverse("abc#!*y@z124");
