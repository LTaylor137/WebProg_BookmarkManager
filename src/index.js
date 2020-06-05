// variables
var List = document.getElementById("List");
var UserInput = document.getElementById("UserInput");
var AddButton = document.getElementById("AddButton");
var RemoveAll = document.getElementById("RemoveAll");
//add list item function
if (AddButton == null) {
    alert("button not found");
}
else {
    AddButton.onclick = function Add(event) {
        event.preventDefault();
        console.log(AddButton);
        if (List == null) {
            alert("List not found");
        }
        else {
            var LIBox_1 = document.createElement("div");
            LIBox_1.classList.add("InlineBox");
            List.append(LIBox_1);
            if (UserInput == null) {
                alert("input not found");
            }
            else {
                console.log("list item created.");
                var ListItem_1 = document.createElement("div");
                ListItem_1.classList.add("listitem");
                LIBox_1.append(ListItem_1);
                ListItem_1.innerHTML = UserInput.value;
                var checked_1 = new Boolean(false);
                var RemoveButton_1 = document.createElement("div");
                //change colour of list item
                ListItem_1.onclick = function CheckItem() {
                    //change to grey and checked
                    if (checked_1 == false) {
                        checked_1 = true;
                        console.log("listitem checked");
                        console.log("checked = " + checked_1);
                        ListItem_1.classList.remove("listitem");
                        ListItem_1.classList.add("checked");
                        //adds the delete button
                        LIBox_1.append(RemoveButton_1);
                        RemoveButton_1.classList.add("listdel");
                        RemoveButton_1.innerHTML = "remove";
                        //delete list item function
                        RemoveButton_1.onclick = function Remove() {
                            ListItem_1.remove();
                            RemoveButton_1.remove();
                            LIBox_1.remove();
                        };
                        //change back to green
                    }
                    else if (checked_1 == true) {
                        checked_1 = false;
                        console.log("listitem unchecked");
                        console.log("checked = " + checked_1);
                        ListItem_1.classList.remove("checked");
                        ListItem_1.classList.add("listitem");
                        //removes the delete button again
                        RemoveButton_1.remove();
                    }
                };
                //resets input text box
                if (UserInput == null) {
                    console.log("UserInput not found");
                }
                else {
                    UserInput.value = "";
                    //pauses event
                    if (event == null) {
                        console.log("event not found");
                    }
                    else {
                        event.preventDefault();
                    }
                    // removes all items from list
                    if (RemoveAll == null) {
                        console.log("RemoveAll not found");
                    }
                    else {
                        RemoveAll.onclick = function RemoveAll() {
                            if (List == null)
                                return;
                            List.innerHTML = "";
                        };
                    }
                }
            }
        }
    }
}
