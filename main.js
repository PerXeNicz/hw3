let count = 10;
let ans = Math.round(Math.random()*99)+1
var input;
let x= document.getElementById("hid");
let output = '';

console.log(ans)
console.log(count)
x.style.display="none";
    
function sol(){
    input = document.getElementById('tex').value;
    output += input +' ';
    if(input<0||input>100||input==''){
        document.querySelector('.pa').textContent='Previous answer: '+output ;
        document.querySelector('.status').textContent='Wrong input!!!';
        document.querySelector('.status').setAttribute('style','background-color:red;');
        document.querySelector('#turn').textContent='You have '+count+' turns left';
    }
    else if(input>ans){
        document.querySelector('.pa').textContent='Previous answer: '+output;
        document.querySelector('.status').textContent='Wrong!!!';
        document.querySelector('.status').setAttribute('style','background-color:red;');
        document.querySelector('.guide').textContent='Last guess was too high.';
        count--;
        document.querySelector('#turn').textContent='You have '+count+' turns left';
        console.log(count);
    }else if(input<ans){
        document.querySelector('.pa').textContent='Previous answer: '+output ;
        document.querySelector('.status').textContent='Wrong!!!';
        document.querySelector('.status').setAttribute('style','background-color:red;');
        document.querySelector('.guide').textContent='Last guess was too low.';
        count--;
        document.querySelector('#turn').textContent='You have '+count+' turns left';
        console.log(count);
    }else if(input==ans){
        document.querySelector('.int_tex').setAttribute('disabled',true);
        document.querySelector('.button').setAttribute('disabled',true);
        document.querySelector('.status').setAttribute('style','background-color:green;');
        document.querySelector('.status').textContent='You win';
        document.querySelector('#turn').textContent='You have '+count+' turns left';
        x.style.display="block";
        count=10;
        console.log(count);
    }
    if(count<=0){
        document.querySelector('.pa').textContent='Previous answer: '+output;
        document.querySelector('.status').textContent='Gameover!';
        document.querySelector('.status').setAttribute('style','background-color:red;');
        document.querySelector('.int_tex').setAttribute('disabled',true);
        document.querySelector('.button').setAttribute('disabled',true);
        document.querySelector('#turn').textContent='You have '+count+' turns left';
        x.style.display="block";
        count=10;
    }
}

