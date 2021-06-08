console.log("Rajesh");
// document.querySelector("body").style.backgroundColor="red";


function getrandom1(){

    return  Math.floor(Math.random()*6);
}
function getrandom2(){

    return  Math.floor(Math.random()*6);
}
var  val=getrandom1();
var val2=getrandom2();
console.log(val);
var ele1=document.querySelector(".img1 ");
var ele2=document.querySelector(".img2 ");
if(val==1){
ele1.src="images/dice1.png";
}
else if(val==2){
  ele1.src="images/dice2.png";
}else if(val==3){
ele1.src="images/dice3.png";
}else if(val==4){
  ele1.src="images/dice4.png";
}else if(val==5){
ele1.src="images/dice5.png";
}else{
  ele1.src="images/dice6.png";
}
if(val2==1){
ele2.src="images/dice1.png";
}
else if(val2==2){
  ele2.src="images/dice2.png";
}else if(val2==3){
ele2.src="images/dice3.png";
}else if(val2==4){
  ele2.src="images/dice4.png";
}else if(val2==5){
ele2.src="images/dice5.png";
}else{
  ele2.src="images/dice6.png";
}

  if(val>val2){
    document.querySelector("h1").innerHTML="Player 1 win";
  }else if(val<val2){
    document.querySelector("h1").innerHTML="Player 2 win";
  }else{
    document.querySelector("h1").innerHTML="Match Drow";
  }
