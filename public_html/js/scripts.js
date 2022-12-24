function newItem(){

/*javascript
1. Adding a new item to the list of items: 
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }*/
    
//jQuery Show error message
    function showErrorMessage(input,message){
        
        let container = $(input).parent(); // The .input-wrapper
        //Create div element with error-message class
        let div = $("<div></div>");
        //Remove exisiting error message
        let error = $(".error-message");
        if (error){
            console.log("Existing error.");
           $("container").remove(error);
         
        }
       
        // Now add the error if the message isn’t empty.
        if (message){
            console.log(message);
            $(div).addClass("error-message");
            (div).append(message);
           
            //Add error div to parent element ie. container
            $(".container").append(div);
        }
           
    }
//jQuery Add new item to the list of items

    //Create element li and add class
    let li = $("<li></li>");
   // newLiElement.addClass(".list");
    
    //Get input value
    let inputValue = $("#input").val();
    //console.log(inputValue);
    
    //select ol with #list. 
      let list = $('#list');
      
    //Check if inputvalue is empty
    if (inputValue === '') {
        showErrorMessage(inputValue,"You must write something.");
        
       
    } else { //Not empty, 
        //Append input value to li
       li.append(inputValue);

       //Append new li to ol
        list.append(li);
    }
    
    
    
    
 /*2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.addEventListener("dblclick",crossOut);
*/
//jQuery Cross out an item from the list of items
    function crossOut(){
        console.log("strike");
        li.addClass("strike");
        $("li").toggle("strike");
    }
    //Add event listener to li for crossing out when double click
    li.on("dbclick", crossOut);
 /*3(i). Adding the delete button "X": 
   let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete");
 	}
     
  */
 /*4. Reordering the items: 
   $('#list').sortable();
*/
}

 





