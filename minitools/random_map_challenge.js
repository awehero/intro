javascript:(function(){if (localStorage.getItem("isEndingStatsOn") == "off") {
    alert("You must turn on ending stats in settings, then refresh the page!");
    throw new Error("Ending stats not on");
};
let popup = document.createElement("div");
let body = document.body;
let style = document.createElement("style");
let script = document.createElement("script");
window.difficulty = 0;
window.length = 0;
window.allElements = document.querySelectorAll("*");
window.listLength = 0;
window.int = null;
popup.id = "popup";
popup.style.height = "200px";
popup.style.width = "200px";
popup.style.position = "absolute";
popup.style.top = "100px";
popup.style.left = "30px";
popup.style.backgroundColor = "white";
popup.style.color = "black";
popup.style.zIndex = "100";
popup.innerHTML = `
<h2>Random Map Challenge</h2>
<div id="before">
<button id="start" onclick="startGame()">Start</button>
<div class="stat">
    min - <select id="min">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3" selected>3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
    </select>-
    <select id="max">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9" selected>9</option>
        <option value="10">10</option>
        <option value="11">11</option>
    </select> - max
</div>
<div class="stat">
    Time - <select id="amount">
        <option value=60>60</option>
        <option value=120>120</option>
        <option value=180>180</option>
        <option value=240>240</option>
        <option value=300 selected>300</option>
        <option value=600>600</option>
        <option value=900>900</option>
        <option value=1200>1200</option>
        <option value=1500>1500</option>
        <option value=1800>1800</option>
        <option value=2700>2700</option>
        <option value=3600>3600</option>
    </select>
</div>
</div>
<div id="after">
<button id="skip" onclick="skip()">Skip</button>
<div class="stat"><div>Score: </div> <div id="points">0</div></div>
<div class="stat"><div>Maps Completed: </div> <div id="mapsCompleted">0</div></div>
<div>Time Left: </div>
<div id="timer">0</div>
</div>
`;
style.innerText = `
.stat {
    display: flex;
    justify-content: center;
}
#after {
    display: none;
}
`;
script.innerText = `
const pressR = new KeyboardEvent('keydown', { key: 'r', code: 'KeyR' });
const pressX = new KeyboardEvent('keydown', { key: 'x', code: 'KeyX' });
window.startTime = Number(amount.value);
window.time = 0;
window.minV = 3;
window.maxV = 9;
window.playing = false;
setInterval(()=>{
    if (isMapLoaded && time > 0.05 && playing) {
        time = time-0.1;
        if (time < 0.1) {
            time = 0;
            over();
        }
        timer.innerText = Math.round(time*10)/10;
    }
},100);
function startGame() {
    minV = Number(min.value);
    maxV = Number(max.value);
    before.style.display = "none";
    after.style.display = "block";
    clearInterval(int);
    score.innerText = 0;
    count.innerText = 0;
    time = startTime;
    kill();
}
function over() {
    clearInterval(int);
    kill();
    time = 0;
}
function skip() {
    clearInterval(int);
    kill();
}
function kill() {
    document.dispatchEvent(pressR);
    int = setInterval(()=>{if(!alive){clearInterval(int);menu()}},10);
}
function menu() {
    document.dispatchEvent(pressX);
    if (time > 0.05) {
        int = setInterval(()=>{if(!isMapLoaded){clearInterval(int);finder()}},10);
    }
}
function finder() {
    console.log("finding");
    let finder;
    for (const element of allElements) {
        if (element.innerText == "Finder") {
            finder = element;
            break;
        }
    }
    finder.click();
    let length = document.getElementsByClassName("mapListing").length;
    let random;
    for (const element of allElements) {
        if (element.innerText == "Random") {
            random = element;
            break;
        }
    }
    random.click();
    int = setInterval(()=>{if(length != document.getElementsByClassName("mapListing").length){clearInterval(int);checkMap();}},10);
}
function checkMap() {
    difficulty = Number(document.getElementsByClassName("mapListing")[document.getElementsByClassName("mapListing").length-1].children[1].children[1].children[0].children[1].innerText);
    if (difficulty <= maxV && difficulty >= minV) {
        clickMap();
    } else {
        document.getElementsByClassName("mapListing")[document.getElementsByClassName("mapListing").length-1].remove();
        finder();
    }
}
function clickMap() {
    document.getElementsByClassName("mapListing")[document.getElementsByClassName("mapListing").length-1].click();
    int = setInterval(()=>{if(isMapLoaded){clearInterval(int);checkFinish();}},10);
}
function checkFinish() {
    playing = true;
    document.getElementsByClassName("mapListing")[document.getElementsByClassName("mapListing").length-1].remove();
    int = setInterval(()=>{
        let touching = false;
        for (var i = 0; i < endings.length; i++) {
            if (player.intersectsMesh(endings[i], true)) {
                touching = true;
            }
        }
        if(touching){
            clearInterval(int);
            waitForSave();
        }
    },500);
}
function waitForSave() {
    playing = false;
    updateStats();
    int = setInterval(()=>{
        if(document.getElementsByClassName("endingButton").length == 3){
            clearInterval(int);
            setTimeout(()=>{
                menu();
            },100);
        }
    },100);
}
function updateStats() {
    let index = document.getElementsByClassName("endingBottomLeftCorner")[0].children.length == 2 ? 1 : 2;
    let text = document.getElementsByClassName("endingBottomLeftCorner")[0].children[index].innerText;
    let length = Math.round(Number(text.substring(14,text.length-1))*60);
    let increase = difficulty * (length/2);
    points.innerText = Number(points.innerText) + increase;
    count.innerText = Number(count.innerText) + 1;
}
`;
body.append(style);
body.appendChild(popup);
window.points = document.getElementById("points");
window.count = document.getElementById("mapsCompleted");
window.timer = document.getElementById("timer");
window.before = document.getElementById("before");
window.after = document.getElementById("after");
window.min = document.getElementById("min");
window.max = document.getElementById("max");
window.amount = document.getElementById("amount");
body.append(script);
})();
