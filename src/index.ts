let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null) {
    alert("Button not found.");
} else {
    
    myButton.onclick = function () {
        if(myButton == undefined) return;
        alert("Hello World!");
    }
}// variables
let List = document.getElementById("List") as HTMLElement | null;
let UserInput = document.getElementById("UserInput") as HTMLTextAreaElement | null;
let AddButton = document.getElementById("AddButton") as HTMLButtonElement | null;
let RemoveAll = document.getElementById("RemoveAll") as HTMLButtonElement | null;

//add list item function
if (AddButton == null) {
    alert("button not found");
} else {
    AddButton.onclick = function Add(event) {
        event.preventDefault();
        console.log(AddButton);

        if (List == null) {
            alert("List not found");
        } else {
            let BMBox: HTMLDivElement = document.createElement("div");
            BMBox.classList.add("InlineBox");
            List.append(BMBox);

            if (UserInput == null) {
                alert("input not found");
            } else {
                console.log("bookmark created")
                let BMIcon: HTMLDivElement = document.createElement("div");
                BMIcon.classList.add("BMIcon");
                BMBox.append(BMIcon);
                BMIcon.innerHTML = UserInput.value;

                let checked = new Boolean(false);
                let RemoveButton: HTMLDivElement = document.createElement("div");

                //change colour of list item
                BMIcon.onclick = function CheckItem() {
                    
                    // //change to grey and checked
                    // if (checked == false) {
                    //     checked = true;
                    //     console.log("BMIcon checked")
                    //     console.log("checked = " + checked)
                    //     BMIcon.classList.remove("BMIcon");
                    //     BMIcon.classList.add("checked");

                        //adds the delete button
                        BMBox.append(RemoveButton);
                        RemoveButton.classList.add("listdel");
                        RemoveButton.innerHTML = "remove";

                        //delete list item function
                        RemoveButton.onclick = function Remove() {
                            BMIcon.remove();
                            RemoveButton.remove();
                            BMBox.remove();
                        }

                        //change back to green
                    } else if (checked == true) {
                        checked = false;
                        console.log("BMIcon unchecked")
                        console.log("checked = " + checked)
                        BMIcon.classList.remove("checked");
                        BMIcon.classList.add("BMIcon");

                        //removes the delete button again
                        RemoveButton.remove();
                    }
                }

                //resets input text box
                if (UserInput == null) {
                    console.log("UserInput not found");
                } else {
                    UserInput.value = "";

                    //pauses event
                    if (event == null) {
                        console.log("event not found");
                    } else {
                        event.preventDefault();
                    }

                    // removes all items from list
                    if (RemoveAll == null) {
                        console.log("RemoveAll not found");
                    } else {
                        RemoveAll.onclick = function RemoveAll() {
                            console.log("RemoveAll pressed");
                            if (List == null) return;
                            List.innerHTML = "";
                        }
                    }
                }
            }
        }
    }
}



