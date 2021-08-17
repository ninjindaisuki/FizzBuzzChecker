function inputNumber(){
    input_num = Number(document.getElementById("number").value)
    console.log(input_num)
    ans_num = fizzBuzz(input_num);
    document.getElementById("input_number").innerText = `${input_num}`;
    document.getElementById("ans_number").innerText = `${ans_num}`;      
}

function fizzBuzz(num){
    let result = 0;
    if ((num % 3 == 0) && (num % 5 == 0)){
        result = "FizzBuzz";
    }else if(num % 3 == 0){
        result = "Fizz";
    }else if(num % 5 == 0){
        result = "Buzz"
    }else{
        result = num;
    }
    return result;
}