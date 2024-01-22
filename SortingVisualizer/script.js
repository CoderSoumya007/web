// let size = 200;
var slider = document.querySelector("#size");
let sortbutton = document.querySelector("#sortbutton");
let stop = document.querySelector("#Stop");
let speed = document.querySelector("#speed");
let delay = speed.value;

//for updating the speed of sorting;
speed.oninput = function () {
    delay = Math.abs(speed.value);
}

//for default creation of array
createarray(slider.value);

//creating array after sliding
slider.oninput = function () {
    createarray(slider.value);
}

//creating array of size from slider
function createarray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.random());
    }
    createbar(arr);
}

//creating tthe bar divs from respective array elements as height
function createbar(arr) {
    // console.log("array created");
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = 100 * arr[i] + "%";
        bar.style.width = 100 / arr.length + "%";
        bar.style.background = "rgb(0, 195, 255)";
        container.appendChild(bar);
    }
}

//to sort the array
async function sort() {
    let sorted = false;
    stop.style.visibility = "visible";
    slider.disabled = true;
    const bars = document.querySelectorAll("#container div");
    sortbutton.disabled = true;
    let terminate = false;
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {

            //to terminate the process if clicked
            stop.addEventListener("click", function () { terminate = true; });
            if (terminate == true) {
                stop.style.visibility = "hidden";
                sortbutton.disabled = false;
                slider.disabled = false;
                return;
            }

            // Play the check sound before comparing elements
            await playCheckSound();

            //for highlighting the comparing bars 
            bars[j].style.background = 'red';
            bars[j + 1].style.background = 'red';

            if (parseFloat(bars[j].style.height) > parseFloat(bars[j + 1].style.height)) {
                await waituntildone(delay);
                swap(bars[j], bars[j + 1]);
            }

            await waituntildone(delay);
            bars[j].style.background = 'rgb(0, 195, 255)';
            bars[j + 1].style.background = 'rgb(0, 195, 255)';
        }
        bars[bars.length - i - 1].style.background = 'green';
    }

    //disable/enable buttons
    await playCompletionSound();
    sortbutton.disabled = false;
    stop.style.visibility = "hidden";
    slider.disabled = false;
    sorted = true;
}

//to decrease or increase the speed of sorting animation
function waituntildone(milisec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('') }, milisec);
    });
}

// to swap the variables or bar height
// function swap(ele1, ele2) {
//     let temp = ele1.style.height;
//     ele1.style.height = ele2.style.height;
//     ele2.style.height = temp;
//*******************************************For Sound Track********************************************** */
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

//sound track for swaps.
const swapSoundUrl = 'mixkit-plastic-bubble-click-1124.wav'; // Replace with the actual path to your sound file
let swapSoundBuffer;
//sound track for checks
let checkSoundPlaybackRate = 1.0; // Adjust this value to control the frequency for element checks
const checkSoundUrl = 'mixkit-click-melodic-tone-1129.wav'; // Replace with the actual path to your check sound file
let checkSoundBuffer;
//sound for sorting completion
let completionSoundPlaybackRate = 1.0;
const checkCompletionSoundUrl = 'mixkit-animated-small-group-applause-523.wav';
let checkCompletionSoundBuffer;

// Load the sound asynchronously
async function loadSwapSound() {
    const response = await fetch(swapSoundUrl);
    const buffer = await response.arrayBuffer();
    swapSoundBuffer = await audioContext.decodeAudioData(buffer);

    //check sound 
    const response2 = await fetch(checkSoundUrl);
    const buffer2 = await response2.arrayBuffer();
    checkSoundBuffer = await audioContext.decodeAudioData(buffer2);

    //completion sound
    const response3 = await fetch(checkCompletionSoundUrl);
    const buffer3 = await response3.arrayBuffer();
    checkCompletionSoundBuffer = await audioContext.decodeAudioData(buffer3);
}

loadSwapSound();

// Update the swap function to include playing the swap sound
async function swap(ele1, ele2) {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;

    // Play the swap sound
    if (swapSoundBuffer) {
        const source = audioContext.createBufferSource();
        source.buffer = swapSoundBuffer;
        source.connect(audioContext.destination);
        source.start();
    }
}

async function playCheckSound() {
    if (checkSoundBuffer) {
        const source = audioContext.createBufferSource();
        source.buffer = checkSoundBuffer;

        // Adjust the playback rate for element checks
        source.playbackRate.value = checkSoundPlaybackRate;

        source.connect(audioContext.destination);
        source.start();
    }
}

async function playCompletionSound() {
    if (checkCompletionSoundBuffer) {
        const source = audioContext.createBufferSource();
        source.buffer = checkCompletionSoundBuffer;

        // Adjust the playback rate for completion
        source.playbackRate.value = completionSoundPlaybackRate;

        source.connect(audioContext.destination);
        source.start();
    }
}