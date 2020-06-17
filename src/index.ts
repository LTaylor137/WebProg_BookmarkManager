// variables
let List = document.getElementById("List") as HTMLElement | null;
let LabelInput = document.getElementById("LabelInput") as HTMLTextAreaElement | null;
let URLInput = document.getElementById("URLInput") as HTMLTextAreaElement | null;
let AddButton = document.getElementById("AddButton") as HTMLButtonElement | null;
let BackButton = document.getElementById("BackButton") as HTMLButtonElement | null;
let Add = document.getElementById("Add") as HTMLButtonElement | null;
let Header = document.getElementById("Header") as HTMLButtonElement | null;
let Title = document.getElementById("Title") as HTMLButtonElement | null;
// let BMFavourite = document.getElementById("BMFavourite") as HTMLButtonElement | null;
// let BMRemove = document.getElementById("BMFavourite") as HTMLButtonElement | null;

// Add.onclick = () => {

//     console.log("add clicked");
//     LabelInput?.remove();
//     URLInput?.remove();
//     Title.innerHTML = "";
//     Title.classList.remove("Title");
//     Title.classList.add("InputBox");
//     BackButton.innerHTML = "<";

//     Add.remove();

//     Title.append(LabelInput);
//     LabelInput.classList.add("Input");

//     Title.append(URLInput);
//     URLInput.classList.add("Input");

//     Header.append(AddButton);
//     AddButton.classList.add("Add");

//     AddButton.innerHTML = "+";
// }

// BackButton.onclick = () => {

//     console.log("back clicked");
//     LabelInput?.remove();
//     URLInput?.remove();
//     Title.innerHTML = "Bookmarks";
//     Title.classList.remove("InputBox");
//     Title.classList.add("Title");
//     BackButton.innerHTML = "";

//     AddButton.remove();
//     Header.append(Add);
// }

export class Bookmark {
    icon: string;
    title: string;
    url: string;

    // constructor
    constructor(Icon: string, Title: string, URL: string) {
        this.icon = Icon;
        this.title = Title;
        this.url = URL;
    }

    //method
    build(): void {

        if (AddButton == null) {
            alert("button not found");
        } else {
            AddButton.onclick = () => {

                // swap title for input fields.
                let AddNew = new Boolean(false);
                if (AddNew == false) {
                    AddNew = true;
                    console.log("addnewpressed");
                    console.log("add clicked");
                    LabelInput?.remove();
                    URLInput?.remove();
                    Title.innerHTML = "";
                    Title.classList.remove("Title");
                    Title.classList.add("InputBox");
                    BackButton.innerHTML = "<";

                    Add.remove();

                    Title.append(LabelInput);
                    LabelInput.classList.add("Input");

                    Title.append(URLInput);
                    URLInput.classList.add("Input");

                    Header.append(AddButton);
                    AddButton.classList.add("Add");

                    AddButton.innerHTML = "+";




                    if (URLInput?.value.length == 0) {
                        console.log("no URLinput")
                        return;
                    } else {
                        this.icon = "o";
                        this.title = LabelInput.value;
                        this.url = URLInput.value;

                        console.log("addbuttonclicked");
                        this.build();
                    }
                }


                BackButton.onclick = () => {


                    AddNew = false;
                    console.log("back clicked");
                    LabelInput?.remove();
                    URLInput?.remove();
                    Title.innerHTML = "Bookmarks";
                    Title.classList.remove("InputBox");
                    Title.classList.add("Title");
                    BackButton.innerHTML = "";

                    AddButton.remove();
                    Header.append(Add);
                }

            }

            // add bookmark
            if (AddButton == null || List == null || URLInput == null || LabelInput == null) {
                alert("element not found");
            } else {

                console.log("bookmark created")

                let BMBox: HTMLDivElement = document.createElement("div");
                BMBox.classList.add("InlineBox");
                List.append(BMBox);

                let BMIcon: HTMLDivElement = document.createElement("div");
                BMIcon.classList.add("Icon");
                BMBox.append(BMIcon);
                BMIcon.innerHTML = this.icon;

                let BMTextBox: HTMLDivElement = document.createElement("div");
                BMTextBox.classList.add("BookmarkText");
                BMBox.append(BMTextBox);

                let BMLabel: HTMLDivElement = document.createElement("div");
                BMLabel.classList.add("BMLabel");
                BMTextBox.append(BMLabel);
                BMLabel.innerHTML = this.title;

                let BMURL: HTMLDivElement = document.createElement("div");
                BMURL.classList.add("BMURL");
                BMTextBox.append(BMURL);
                BMURL.innerHTML = this.url;

                let BMFavourite: HTMLDivElement = document.createElement("div");
                BMFavourite.classList.add("NotFavourite");
                BMBox.append(BMFavourite);
                BMFavourite.innerHTML = "<3";

                //add favourite status
                let check = new Boolean(false);
                BMFavourite.onclick = function CheckItem() {
                    if (check == false) {
                        check = true;
                        BMFavourite.classList.remove("NotFavourite");
                        BMFavourite.classList.add("Favourite");
                    } else if (check == true) {
                        check = false;
                        BMFavourite.classList.remove("Favourite");
                        BMFavourite.classList.add("NotFavourite");
                    }
                }

                let BMRemove: HTMLDivElement = document.createElement("div");
                BMRemove.classList.add("Favourite");
                BMBox.append(BMRemove);
                BMRemove.innerHTML = "X";

                //swap title and input fields.



                //remove bookmark
                BMRemove.onclick = function remove() {
                    BMBox.remove();
                    console.log("bookmark removed")
                }

                //resets input text box
                LabelInput.value = "";
                URLInput.value = "";

            }
        }
    }


let bm1 = new Bookmark("*", "My Bookmark Label", "www.websiteURLgoeshere.com");
let bm2 = new Bookmark("^", "My Second Bookmark", "www.coolpage.cool");

console.log(bm1);
console.log(bm2);

bm1.build();
bm2.build();


