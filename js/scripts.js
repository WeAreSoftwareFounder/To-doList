
    //javascript
    //1. Adding a new item to the list of items: 
  function newItem() {
  //1. Adding a new item to the list of items:
    let li = $("<li>");
    let inputValue = $("#input").val();
    let text = $(document.createTextNode(inputValue));
    li.append(text);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = $("#list");
    list.append(li);
  }

  //2. Crossing out an item from the list of items:
  li.dblclick(function() {
    li.toggleClass("strike");
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton>").text("X");
  li.append(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  crossOutButton.click(function() {
    li.addClass("delete");
  });

  // 4. Reordering the items:
  $("#list").sortable();
}
    
     
    
    
    
    
    
    
    
    