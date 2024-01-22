const buttons = document.querySelectorAll(".row input");
const disp = document.querySelector("#display");

buttons.forEach(function (buttons) {
    buttons.addEventListener('click', calculate);
});

let calculated = false;
function calculate(event) {
    let value = event.target.value;
    if (value === "=") {
        try {
            if (disp.value == "") disp.value = "";
            else {
                disp.value = eval(disp.value);
            }
        } catch (err) {
            disp.value = "error";
        }
        calculated = true;
    } else {
        if (value == "AC") { disp.value = null; return };
        if (value == "Del") { disp.value = display.value.toString().slice(0, -1); return }
        if (calculated) {
            disp.value = value;
            calculated = false
            return;
        }
        disp.value += value;
    }
}
