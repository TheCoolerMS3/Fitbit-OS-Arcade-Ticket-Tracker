import * as document from "document";
import * as fs from "fs";
import { me } from "appbit";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const ticketstext = document.getElementById("ticketstext");
let tickets = 0;

// If tickets file exists, set tickets variable to it, else set tickets variable to 0
if (fs.existsSync("tickets.txt")) {
    console.log("file exists!");
    let fileContent = fs.readFileSync("tickets.txt", "ascii").trim(); 
    console.log(fileContent);

    tickets = parseInt(fileContent, 10);

    // Failsafe in case there's something wrong
    if (isNaN(tickets)) {
        tickets = 0;  
    }

    ticketstext.text = tickets.toString(); 
} else {
    tickets = 0;
    ticketstext.text = tickets.toString(); 
}

// Listen out for button presses to increment/decrement tickets variable
add.addEventListener("click", (evt) => {
    tickets += 1;
    ticketstext.text = tickets.toString();  
});

minus.addEventListener("click", (evt) => {
    tickets -= 1;
    ticketstext.text = tickets.toString();  
});

// Save tickets file on unload
me.onunload = () => {
    console.log('saving file');
    fs.writeFileSync("tickets.txt", tickets.toString(), "ascii"); 
};
