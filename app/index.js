import * as document from "document";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const ticketstext = document.getElementById("ticketstext");
let tickets = 0;

add.addEventListener("click", (evt) => {
    console.log(tickets)
    tickets = (tickets + 1)
    console.log (tickets)
    ticketstext.text = (tickets)
  })
  
minus.addEventListener("click", (evt) => {
    console.log(tickets)
    tickets = (tickets - 1)
    console.log (tickets)
    ticketstext.text = (tickets)
 })
  