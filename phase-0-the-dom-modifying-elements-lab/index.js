let body = document.getElementsByTagName("body")[0];
let main = document.querySelector("#main");
main.remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = `Misha 'is the champion'`;
body.appendChild(newHeader);
