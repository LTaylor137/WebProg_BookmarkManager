// variables
let List = document.getElementById("List") as HTMLElement | null;
let UserInput = document.getElementById("UserInput") as HTMLTextAreaElement | null;
let AddButton = document.getElementById("AddButton") as HTMLButtonElement | null;
// let BMFavourite = document.getElementById("BMFavourite") as HTMLButtonElement | null;
// let BMRemove = document.getElementById("BMFavourite") as HTMLButtonElement | null;



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
            // AddButton.onclick = function Add() {
            AddButton.onclick = () => {
                this.icon = "o";
                this.title = UserInput.value;
                this.url = UserInput.value;
                // this.build();
                console.log("addbuttonclicked");
                this.build();
            }
        }

        // add bookmark
        if (AddButton == null || List == null || UserInput == null) {
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
            let checked = new Boolean(false);
            BMFavourite.onclick = function CheckItem() {
                if (checked == false) {
                    checked = true;
                    BMFavourite.classList.remove("NotFavourite");
                    BMFavourite.classList.add("Favourite");
                } else if (checked == true) {
                    checked = false;
                    BMFavourite.classList.remove("Favourite");
                    BMFavourite.classList.add("NotFavourite");
                }
            }

            let BMRemove: HTMLDivElement = document.createElement("div");
            BMRemove.classList.add("Favourite");
            BMBox.append(BMRemove);
            BMRemove.innerHTML = "X";

            //remove bookmark
            BMRemove.onclick = function remove() {
                BMBox.remove();
                console.log("bookmark removed")
            }

            //resets input text box
            UserInput.value = "";
        }
    }
}


let bm1 = new Bookmark("*", "My Bookmark Label", "www.websiteURLgoeshere.com");
let bm2 = new Bookmark("@", "My Second Bookmark", "www.coolpage.cool");

console.log(bm1);
console.log(bm2);

bm1.build();
bm2.build();



