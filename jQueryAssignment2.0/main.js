// ASSIGNMENT:  write the document ready function
// PURPOSE OF CODE:  
 
$(document).ready(() => {    //Allows us to make sure the document is loaded. 
    

// ASSIGNMENT:  write the jQ code that shows the dropdown menu for the cart
// PURPOSE OF CODE:  

$('#cart').on('click',() => {   //Declares an id of "cart", and telling the console that the user can click on it.
    $('#cartMenu').show();    //Telling the console whatever is labeled "cartMenu" in the html to show what is listed under.
})



// ASSIGNMENT write the jQ code that shows the dropdown menu for the account
// PURPOSE OF CODE:

$('#account').on('click', () => {   //Declaring account as an id and telling it you can click on it.
    $('#accountMenu').show();      //Telling the console what is labeled "accountMenu" to show what is listed underneath it.
})


// ASSIGNMENT:  write the jQ code that shows the dropdown menu for help
// PURPOSE OF CODE:

$('#help').on('click', () => {   //Declares an id "help" and tells the console you can click on it.
    $('#helpMenu').show();     //Tells the console when "helpMenu" is called to list what is beneth it.
})

// ASSIGNMENT:  write the jQ code that causes the menu to disappear
// PURPOSE OF CODE:

$('.dropdown-menu').on('mouseleave', () => {   //Declares an id of dropdown menu and tells it when the mouse leaves to do something.
    $('dropdown-menu').hide();      //Tells the console when the "dropdown-menu" is called upon, that when the mouse leaves the menu area, the menu will hide.
})
})
