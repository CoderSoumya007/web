let cell = document.querySelectorAll(".cell");
let end = document.querySelector(".endbox");
let won = document.querySelector(".endbox h1 p")

let togg = document.querySelector(".togglebutton");
let togglebar = document.querySelector(".togglebar")

togg.addEventListener("click", () => {
    togglebar.classList.add("togglebar-active")

    document.querySelector(".togglebar ul").querySelector("#MultiPlayer").addEventListener("click", () => {
        togglebar.classList.remove("togglebar-active");

        document.querySelectorAll(".cell p").forEach((value) => {
            value.textContent = "";
            i = 0;
        });
        cell.forEach((event) => {
            event.addEventListener("click", drawMultiplayer)
        })
    });
    document.querySelector(".togglebar ul").querySelector("#SinglePlayer").addEventListener("click", () => {
        togglebar.classList.remove("togglebar-active");
        document.querySelectorAll(".cell p").forEach((value) => {
            value.textContent = "";
            i = 0;
        });
        cell.forEach((event) => {
            event.addEventListener("click", drawSingleplayer)
        })
    });
})

cell.forEach((event) => {
    event.addEventListener("click", drawMultiplayer)
})

let i = 0;
function drawMultiplayer() {
    if (i % 2 == 0 && this.querySelector("p").textContent == "") {
        this.querySelector("p").textContent = "X";
        i++;
    }
    else if (i % 2 != 0 && this.querySelector("p").textContent == "") {
        this.querySelector("p").textContent = "O";
        i++;
    }
    let check = checkWin();
    if (i == 9 && check == false) {
        endGame("DRAW");
    }
}

// ****************For Single Player****************************
function drawSingleplayer() {
    let check = checkWin();
    if (check == true) i = 100;
    if (i % 2 == 0 && this.querySelector("p").textContent == "") {
        this.querySelector("p").textContent = "X";
        i++;
    }
    else if (i % 2 != 0 && i <= 8) {
        rand = Math.round(Math.random() * (8));
        while (cell[rand].querySelector("p").textContent != "") {
            rand = Math.round(Math.random() * (8));
            console.log("Generating nm" + rand)
        }
        cell[rand].querySelector("p").textContent = "O";
        i++;
    }
    check = checkWin();
    if (i == 9 && check == false) {
        endGame("DRAW");
        return;
    }

}
function checkWin() {
    let boxtext = document.querySelectorAll('p');
    let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let x = 0;
    win.forEach(e => {
        if (boxtext[e[0]].textContent != "" && boxtext[e[1]].textContent != "" && boxtext[e[2]].textContent != "")
            if (boxtext[e[0]].textContent == boxtext[e[1]].textContent && boxtext[e[2]].textContent == boxtext[e[1]].textContent) {
                endGame(boxtext[e[0]].textContent + " WINS");
                x = 1;
            }
    });
    if (x == 1) return true;
    return false;
}

function endGame(value) {
    won.textContent = value;
    document.querySelector(".containendbox").style.visibility = "visible"
    end.classList.add("open-endbox");
    document.querySelector(".container").classList.add("bodyfilter")
    end.querySelector("button").addEventListener("click", () => {
        document.querySelectorAll(".cell p").forEach((value) => {
            value.textContent = "";
            document.querySelector(".containendbox").style.visibility = "hidden"
            document.querySelector(".container").classList.remove("bodyfilter")
            end.classList.remove("open-endbox");
            i = 0;
        })
    })

}