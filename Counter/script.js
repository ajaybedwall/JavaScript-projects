let count = 0;
document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("count").innerHTML=count;
    if (count<0){
        document.getElementById("count").style.color="red"

    }
}
document.getElementById("reset").onclick = function(){
    count= 0;
    document.getElementById("count").innerHTML=count;
    document.getElementById("count").style.color="black"

}
document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("count").innerHTML=count;
    if (count>0){
        document.getElementById("count").style.color="green"

    }
}