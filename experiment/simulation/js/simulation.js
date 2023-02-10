/*Redeveloped
Lab: Software Engineering
Exp:E-R Modeling from the Problem Statements
File Name: simulation.js
Author: Prakriti Dhang */

function playsimulation(){
   
    document.getElementById("playbtn").disabled=true;
    document.getElementById("stp1").style.display="block";
    document.getElementById("p11").style.display="block";
    document.getElementById("s1").style.display="block";
    document.getElementById("nextbtn").style.display="block";
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("prebtn").disabled=true;
    document.getElementById("stp1").disabled=false;

    setTimeout(s12, 1000);

    function s12(){
        document.getElementById("s2").style.display="block";
        setTimeout(s13, 1000);
    }

 function s13(){
    document.getElementById("s3").style.display="block";
    setTimeout(s14, 1000);
 }
 function s14(){
    document.getElementById("s4").style.display="block";
    setTimeout(s15, 1000);
 }
function s15(){
    document.getElementById("s5").style.display="block";
    document.getElementById("nextbtn").disabled=false;
}

}

function goback(){

}
var count=0;
countnxtbtn;
function gonext(){
    count++;
    countnxtbtn=count;
     if(countnxtbtn == 1){
        document.getElementById("nextbtn").disabled=true;
        document.getElementById("p11").style.display="none";
        document.getElementById("p2").style.display="block";
        document.getElementById("s1a").style.display="block";
        document.getElementById("head1").innerText="Identify Entity sets and Attributes";
        setTimeout(stp1b, 1000);

    function stp1b(){
        document.getElementById("s1b").style.display="block";
        setTimeout(stp1c, 1000);
    }

 function stp1c(){
    document.getElementById("s1c").style.display="block";
    document.getElementById("nextbtn").disabled=false;
    
 }
 
    
}

if(countnxtbtn == 2){
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="block";
    document.getElementById("s1d").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1e, 1000);

function stp1e(){
    document.getElementById("s1e").style.display="block";
    setTimeout(stp1f, 1000);
}

function stp1f(){
document.getElementById("s1f").style.display="block";
document.getElementById("nextbtn").disabled=false;

}


}

if(countnxtbtn == 3){
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("s1g").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1h, 1000);

function stp1h(){
    document.getElementById("s1h").style.display="block";
    setTimeout(stp1i, 1000);
}

function stp1i(){
document.getElementById("s1i").style.display="block";
document.getElementById("nextbtn").disabled=false;

}


}


if(countnxtbtn == 4){
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="block";
    document.getElementById("s1j").style.display="block";
    document.getElementById("head1").innerText="Identify Entity sets and Attributes";
    setTimeout(stp1k, 1000);

function stp1k(){
    document.getElementById("s1k").style.display="block";
    setTimeout(stp1l, 1000);
}

function stp1l(){
document.getElementById("s1l").style.display="block";
setTimeout(stp1m, 1000);


}

function stp1m(){
    document.getElementById("s1m").style.display="block";
    document.getElementById("nextbtn").disabled=false;
    
    }

}
if(countnxtbtn == 5){
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="block";
    document.getElementById("stp1").disabled=false;
    document.getElementById("stp2").disabled=false;
    document.getElementById("head1").innerText="Draw Entity";
    
     
}
}


function gostep1(){
    document.getElementById("stp1").style.display="block";
    document.getElementById("p11").style.display="block";
    document.getElementById("s1").style.display="block";
    document.getElementById("nextbtn").style.display="block";
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("prebtn").disabled=true;
    document.getElementById("stp1").disabled=false;
}