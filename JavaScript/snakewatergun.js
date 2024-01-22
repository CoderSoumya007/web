alert("Ready to play Snake Water Gun game")
a = prompt("So how many rounds you want to play")

let compwin = 0;
let userwin = 0;
for (let i = 0; i < a; i++) {

    comp = Math.round(Math.random() * (3 - 1) + 1);
    user = prompt("Enter 1 for snake,2 for water or 3 for Gun");

    if (comp == 1 && user == 2) {
        compwin++;
    } else if (comp == 1 && user == 3) {
        userwin++;
    } else if (comp == 2 && user == 1) {
        userwin++;
    } else if (comp == 2 && user == 3) {
        compwin++;
    }
    else if (comp == 3 && user == 1) {
        compwin++;
    } else if (comp == 3 && user == 2) {
        userwin++;
    } else {
    }
    document.write("You played:" + user)
    document.write("comp played:" + comp)

}
if (compwin > userwin) confirm("you lose")
else if (compwin < userwin) confirm("yOu won")
else confirm("Draw")
document.write("Your points:" + userwin)

let arr = [1, 2, 3, 4, 5, 6, 7];
x = arr.map(element => {
    return element
});
console.log(x)