function newItem(){

    //Show error message
    function showErrorMessage(input,message){
        let container = $(input).parent(); // The .input-wrapper
        let error = $(".error-message");
        //Remove exisiting error message
        if (error){
            $(".error-message").remove();
        }
        // Add the error message class if there is no eror message.
        if (message){
            //Create div element with error-message class
            let div = $("<div></div>");
            $(div).addClass("error-message");
            (div).append(message);
           
            //Add error div to parent element ie. container
            container.append(div);
        }
    }
   //Delete list item when x button is clicked.
   function deleteListItem(){
        li.addClass("delete");
   }
    
    //Add new item to the list of items

    //Create element li
    let li = $("<li></li>");
   
    //Select input
    let input = $("input");
    
    //Get input value
    let inputValue = $("#input").val();
    //console.log(inputValue);
    
    //select ol with #list. 
    let list = $('#list');
      
    //Check if inputvalue is empty
    if (inputValue === '') {
        showErrorMessage(input,"You must write something.");
       
    } else { //Not empty, 
        //Append input value to li
       li.append(inputValue);
       //Append new li to ol
        list.append(li);
        
        //Adding delete button (X) to each li and add crossOutButton class to each X button
        let xButton = $("<button></button>");
        xButton.append(document.createTextNode("X"));
        xButton.addClass("crossOutButton"); 
        xButton.on("click", deleteListItem);
        li.append(xButton);
        
       
        //Add on click event listener to li to crossOut
        li.on("dblclick", function crossOut(){
            li.toggleClass("strike");
        });
        
        //Call showErrorMessage to pass null as message
        showErrorMessage(input,null);
        
        }
    
    //  Reordering items in the list.
        list.sortable();
  
}

 





