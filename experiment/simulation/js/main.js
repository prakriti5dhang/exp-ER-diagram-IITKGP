/*Redeveloped
Lab: Software Engineering
Exp:E-R Modeling from the Problem Statements
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";    
        document.getElementById("ex2").style.display="none";    
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex1").style.display="none";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex2").style.display="block"; 
      document.getElementById("dispres").style.display="block";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("dispviewbtn").disabled=false;
      document.getElementById("viewsol").disabled=true;
     
  }
    
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("exercise2").style.display="none";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("dispviewbtn").disabled=true;
        document.getElementById("viewsol").disabled=true;
        
    }
}
/* Submit button to directly view the solution*/

function viewsolutionb(){
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
}

function solview(){

  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="block";
  document.getElementById("viewsol").disabled=true;
}
 
/*********************************************Function for Table 1 ****************************************/


let  inpt1;
let newtrID, newtdID;
let  newtd,  newtdw, newtdwn,  newtda, newtda2 ;
var newtr;
var checkedvalue;
var myarray = [];
function addbtnt1(){

inpt1=document.getElementById("inp1").value;
checkedvalue= document.getElementById("chkinp1");
  



  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerow(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  
newtrID =  inpt1;
  //rbtn.appendChild(newIconbtn);   
newtr=document.createElement("tr");
newtr.setAttribute("id",newtrID);
newtd = document.createElement("td");
newtd.setAttribute("class","ent");
//newdiv = document.createElement("div");
//newdiv.setAttribute("class", "form-check");
newtr.appendChild(newtd);
//newtd.appendChild(newdiv);

let liTextNodeact = document.createTextNode(inpt1);
newtd.appendChild(liTextNodeact);
//newtd.appendChild(newIconbtn);

/**** Attribute *****/
newtdID =  "attri" +inpt1;
newtda = document.createElement("td");
newtda.setAttribute("id",newtdID);
newtr.appendChild(newtda);
let liTextNodeacta = document.createTextNode("");
newtda.appendChild(liTextNodeacta);

myarray.push(inpt1);

  if (inpt1 == "") {
    alert("Please Enter Entity Before Clicking Add Button");

  } else if((inpt1 !== "") && (checkedvalue.checked) ){

    

    /**** Weak entity ****/

newtdw = document.createElement("td");
newtdw.setAttribute("class","wentity");
newtr.appendChild(newtdw);


let liTextNodeactw = document.createTextNode("Yes");
newtdw.appendChild(liTextNodeactw);


  document.getElementById('tbodyt4').appendChild(newtr);
  document.getElementById('tbodyt4').appendChild(newtr);
 document.getElementById('tbodyt4').appendChild(newtr);
  



/*Entity = Select option from the dropdown  in table 2*/
let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select1 = document.getElementById('selectentity'); 
select1.appendChild(newOption);

/*Entity = Select option from the dropdown  in table 3*/
let newOptionID2;
newOptionID2 = 'newOption_' + inpt1;
  
let newOption2 = document.createElement('option');
let optionText2 = document.createTextNode(inpt1);
// set option text
newOption2.appendChild(optionText2);
// and option value

newOption2.setAttribute("id", newOptionID2);
newOption2.setAttribute('value',inpt1);
let select2 = document.getElementById('selectent31'); 
select2.appendChild(newOption2);


let newOptionID3;
newOptionID3 = 'newOption_' + inpt1;
  
let newOption3 = document.createElement('option');
let optionText3 = document.createTextNode(inpt1);
// set option text
newOption3.appendChild(optionText3);
// and option value

newOption3.setAttribute("id", newOptionID3);
newOption3.setAttribute('value',inpt1);
let select3 = document.getElementById('selectent32'); 
select3.appendChild(newOption3);


}




else if((inpt1 !== "") && (checkedvalue.checked == false) ){



  /**** Not a Weak entity ****/
  newtdwn = document.createElement("td");
newtdwn.setAttribute("class","nwentity");
//newdivwn = document.createElement("div");

newtr.appendChild(newtdwn);

let liTextNodeactwn = document.createTextNode("No");
newtdwn.appendChild(liTextNodeactwn);

  document.getElementById('tbodyt4').appendChild(newtr);
  document.getElementById('tbodyt4').appendChild(newtr);
  document.getElementById('tbodyt4').appendChild(newtr);
  


/*Entity = Select option from the dropdown  in table 2*/
let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select1 = document.getElementById('selectentity'); 
select1.appendChild(newOption);

/*Entity = Select option from the dropdown  in table 3*/
let newOptionID2;
newOptionID2 = 'newOption_' + inpt1;
  
let newOption2 = document.createElement('option');
let optionText2 = document.createTextNode(inpt1);
// set option text
newOption2.appendChild(optionText2);
// and option value

newOption2.setAttribute("id", newOptionID2);
newOption2.setAttribute('value',inpt1);
let select2 = document.getElementById('selectent31'); 
select2.appendChild(newOption2);


let newOptionID3;
newOptionID3 = 'newOption_' + inpt1;
  
let newOption3 = document.createElement('option');
let optionText3 = document.createTextNode(inpt1);
// set option text
newOption3.appendChild(optionText3);
// and option value

newOption3.setAttribute("id", newOptionID3);
newOption3.setAttribute('value',inpt1);
let select3 = document.getElementById('selectent32'); 
select3.appendChild(newOption3);

}




  



//else if((inpt1 !== inpt1 ) && (checkedvalue.checked == false)){
  /**** Attribute *****/

/*newtda2 = document.createElement("td");
newtda2.setAttribute("id",newtdID);
newtr.appendChild(newtda2);
let liTextNodeacta = document.createTextNode("");
newtda2.appendChild(liTextNodeacta);
  document.getElementById('row2').appendChild(newtd);
  document.getElementById('row2').appendChild(newtda2);
  document.getElementById('row2').appendChild(newtdwn);
}*/

document.getElementById("ftbl1").reset();
}





 /*************************************Function for Table 2***********************************************/  
let  inpt2;
 
 function addbtnt2() {
    

  let   newLi;
  inpt2=document.getElementById("inp2").value;
  var selent= document.getElementById("selectentity");
  var entval =selent.options[selent.selectedIndex].value;
  
  /* var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtnuc");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerowuc(this)"); */

  

 

      
          let Cell= document.getElementById("tbl4").rows[1].cells;
          var cellval= Cell[0].innerHTML;
         // let Cell2= document.getElementById("tbl4").rows[1].cells;
          //var cellval2= Cell2[2].innerHTML;
         // alert(cellval);
         
          let Cell20= document.getElementById("tbl4").rows[2].cells;
          var cellval20= Cell20[0].innerHTML;
          //let Cell22= document.getElementById("tbl4").rows[2].cells;
         // var cellval22= Cell22[2].innerHTML;

          var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

newLi = document.createElement("li");
let liTextNodeuc = document.createTextNode(inpt2);
  newLi.appendChild(liTextNodeuc);
  newLi.appendChild(newIconbtn); 
         // alert(cellval2);

    if (inpt2 == "") {
      alert("Please Enter Attribute Before Clicking Add Button");
    } 
    
    
      else if(entval == cellval)   {
  
        /*var table = document.getElementById("tbl4");
        var row = table.insertRow(1);
       var cellr10 = row.insertCell(0);
        var cellr11 = row.insertCell(1);
        var cellr12 = row.insertCell(2);
        cellr10.innerHTML = entval;
        cellr11.appendChild(newLi);
        cellr12.innerHTML = cellval2;*/
        document.getElementById(newtdID).appendChild(newLi);
        /*var cellr11 = Cell[1].appendChild(newLi);
        newtr.appendChild(cellr11);
        document.getElementById('tbodyt4').appendChild(newtr);*/
       /* var tablebody = document.getElementById("tbodyt4");
        var row = document.createElement("tr");
var cell1 = document.createElement("td");
var cell2 = document.createElement("td");
var cell3 = document.createElement("td");



 cell1.innerHTML = entval;
 cell2.appendChild(newLi);
 cell3.innerHTML = cellval2;
 row.appendChild(cell1);
 row.appendChild(cell2);
 row.appendChild(cell3);
 tablebody.appendChild(row);*/
        /*var row = table.insertRow(1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell0.innerHTML = entval;
        cell1.innerHTML = inpt2;*/
       
       // document.getElementById('tbodyt4').appendChild(newtr);
       // document.getElementById('attri').appendChild(newLi);
       // document.getElementById('tbodyt4').appendChild(newtr);
   
      }

      else if(entval == cellval20) { 
        document.getElementById(newtdID).appendChild(newLi);
      }
       /* var table = document.getElementById("tbl4");
        var row = table.insertRow(2);
       var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell0.innerHTML = entval;
        cell1.appendChild(newLi);
        cell2.innerHTML = cellval22;*/
        
        //document.getElementById('attri2').appendChild(newLi);
        //document.getElementById('tbodyt4').appendChild(newtr);
        //
        //document.getElementById('tbodyt4').appendChild(newtr);
   
      //}

    

  document.getElementById("ftbl2").reset();






    /*var category= document.getElementById("selectcat");
   var checkedvalue= document.querySelector('input[type=checkbox][name=categoryselect]:checked').value
    alert(checkedvalue);

    /*********************************************** Category-People*************************************************/ 
    /*if(((checkedvalue=="Mr Roy") || (checkedvalue=="boss")|| (checkedvalue=="son") || (checkedvalue=="Mr Bose") || (checkedvalue=="drives") || (checkedvalue=="passenger") || (checkedvalue=="persons") || (checkedvalue=="neighbour"))&& (category.options[category.selectedIndex].value==3) ){
        let pnewLi = document.createElement("li");
        let liTextNodep = document.createTextNode(checkedvalue);
        pnewLi.appendChild(liTextNodep);
        // this just makes sure a user cant enter in a blank value
       
        document.getElementById('peoplet3').appendChild(pnewLi);*/
          
      
        
        
    }

   
     /*************************************Function for Table 3***********************************************/  

     function addbtnt3(){
      var objsel1= document.getElementById("selectent31");
      var dobj1 =objsel1.options[objsel1.selectedIndex].value;
       //alert(dobj1);
       var inpt3=document.getElementById("inp3").value;
       //alert(inpt3);
       var objsel2= document.getElementById("selectent32");
       var dobj2 =objsel2.options[objsel2.selectedIndex].value;
       // alert(dobj2);
        var objselcont= document.getElementById("selectconst");
        var dobjconst =objselcont.options[objselcont.selectedIndex].value;
        // alert(dobjconst);
  
  
  var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtn");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerow(this)");

  var newIconbtn = document.createElement("i");
  newIconbtn.setAttribute("class", "bi bi-dash-circle");
       rbtn.appendChild(newIconbtn);   

if(dobj1 == dobj2){
  alert(dobj1 + "  is not related to  " +dobj2);
}
 else if(inpt3 == ""){
  alert("Relation cannot be blank");
}
else if((dobj1 !== dobj2)){
  
  var tr = document.createElement('tr');
  tr.setAttribute("id","t5uc");
  document.getElementById('tbodytbl5').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var tdval1=document.createTextNode(dobj1);
  var tdval2=document.createTextNode(inpt3);
  var tdval3=document.createTextNode(dobjconst);
  var tdval4=document.createTextNode(dobj2);
  
  //var tdval5=document.appendChild(newIconbtn);
 // tbody.appendChild(tr);
 
  
  
  
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(rbtn);
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  document.getElementById('tbodytbl5').appendChild(tr);

}


 
}



function removerow(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      
  } 
 

  else {
     return false;
  }
}


function removerowuc(btndel) {

if (typeof(btndel) == "object") {

    $(btndel).closest("li").remove();
   
   // x.remove(typeof(btndel));
   
} else {
    return false;
}


}





     


     







