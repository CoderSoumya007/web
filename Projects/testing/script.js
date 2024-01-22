let btn = document.getElementById("click"); // Assuming "click" is the id of your button
let names = document.getElementById("name");
// btn.addEventListener("click", () => {
//     if(names.value==""){
//         alert("Empty Name ");
//     }
// });

function validateform() {
    if (names.value == "") {
        alert("Empty Name fieldj");
    }
}