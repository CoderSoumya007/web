const l = document.getElementById("Course List");
const list = document.getElementsByTagName("li");
console.log(list);
const convt = [...list];
// convt.forEach((x) => {
//   x.style.color = "violet";
// });

const point = document.getElementById("hostel");
// point.classList.remove("descriptive");

//Adding/Removing Content from html page
// point.textContent = "";

//***************MOUSE EVETNTS*******************************/
point.addEventListener("mouseover", function () {
  // console.log("you moved uourmoau");
  document.querySelector(".display").innerHTML = "You are stalking me";
});

point.addEventListener("mouseleave", function () {
  document.querySelector(".display").innerHTML = "Hey,where you going";
});

//**************************KEYBOARD EVENTS*************************/
document.body.addEventListener("keydown", function (event) {
  document.getElementById(
    "keyboard"
  ).innerHTML = `You have just pressed ${event.key}`;
  // console.log(event);
});

// ***************************************************************
alert("hi")
a = prompt();
document.write(a)
console.error(a)