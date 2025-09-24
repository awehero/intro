globalThis.alpha = 0;
globalThis.beta = 0;
globalThis.messageCheck = 0;
globalThis.alertCheck = 0;
globalThis.current = 0;
globalThis.anom = 0;
globalThis.guess = 0;
globalThis.anomNum = 0;
globalThis.alternate = 0;
globalThis.objects = [];
objects.shelf = [];
objects.shelf.blocks = [];
objects.shelf.shelves = [];
objects.fort = [];
objects.fort.blueblocks = [];
objects.kitchen = [];
objects.kitchen.structure = [];
objects.kitchen.microwave = [];
objects.kitchen.microwave.row1 = [];
objects.kitchen.microwave.row2 = [];
objects.table = [];
objects.table.legs = [];
objects.table.seattops = [];
objects.table.seatbottoms = [];
objects.train = [];
objects.train.rugs = [];
objects.train.engine = [];
objects.train.enginewheels = [];
objects.train.car1wheels = [];
objects.train.car2wheels = [];
objects.train.car3wheels = [];
objects.train.track = [];
objects.breadby = [];
objects.demon = [];
objects.pans = [];
objects.drawing = [];
objects.moon = []
objects.sun = [];
objects.windowframes = [];
objects.walls = [];
objects.alternate = [];
objects.altspots = [];

function setColorUpdate(mesh, hexColor) {
  if (!mesh || !mesh.material) return;
  const newColor = BABYLON.Color3.FromHexString(hexColor);
  mesh.material.diffuseColor.copyFrom(newColor);
  mesh.material = mesh.material.clone(mesh.material.name + "_clone");
}

for (var i = 19; i < scene.meshes.length; i++) {
    if (scene.meshes[i].position._z < -152 && scene.meshes[i].position._z > -190 && scene.meshes[i].position._x < 58 && scene.meshes[i].position._x > 30) {
        if (scene.meshes[i].position._z < -179 && scene.meshes[i].position._z > -184 && scene.meshes[i].position._x < 46 && scene.meshes[i].position._x > 39) {
            objects.shelf.blocks.push(scene.meshes[i]);
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ffffff"))) {
            objects.shelf.shelves.push(scene.meshes[i]);
        } else {
            if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ff00ff"))) {
                objects.shelf.pinkoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#c30000"))) {
                objects.shelf.redinnercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ff0000"))) {
                objects.shelf.redoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#fc7f00"))) {
                objects.shelf.orangeoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#c2c200"))) {
                objects.shelf.yellowinnercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ffff00"))) {
                objects.shelf.yellowoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00b800"))) {
                objects.shelf.greeninnercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00ff00"))) {
                objects.shelf.greenoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00ffff"))) {
                objects.shelf.cyanoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#0000bf"))) {
                objects.shelf.blueinnercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#0000ff"))) {
                objects.shelf.blueoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#9e00ff"))) {
                objects.shelf.purpleoutercube = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00479c"))) {
                objects.shelf.rug = scene.meshes[i];
            } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#9300ff"))) {
                objects.shelf.thecursedcrayon = scene.meshes[i];
            }
        }
    }
    if (scene.meshes[i].position._z < -155 && scene.meshes[i].position._z > -177 && scene.meshes[i].position._x < 10 && scene.meshes[i].position._x > -13) {
        if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#f97c00"))) {
            if (Math.round(scene.meshes[i].position._y*100)/100 == 2) {
                objects.table.legs.push(scene.meshes[i]);
            } else if (Math.round(scene.meshes[i].position._y*100)/100 == 3) {
                objects.table.seattops.push(scene.meshes[i]);
                if (scene.meshes[i].position._z > -160) {
                    objects.table.altswitch = scene.meshes[i];
                }
            } else if (Math.round(scene.meshes[i].position._y*100)/100 == 1.3) {
                objects.table.seatbottoms.push(scene.meshes[i]);
            } else {
                objects.table.table = scene.meshes[i];
            }
        } else if (scene.meshes[i].position._y > 50) {
            objects.drawing.push(scene.meshes[i]);
        }
    }
    if (scene.meshes[i].position._z < -187 && scene.meshes[i].position._z > -203 && scene.meshes[i].position._x < 7 && scene.meshes[i].position._x > -13) {
        if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00df03"))) {
            objects.train.rugs.push(scene.meshes[i]);
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#f4cf9c"))) {
            objects.train.track.push(scene.meshes[i]);
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00a2ff"))) {
            objects.train.engine.push(scene.meshes[i]);
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ff0000"))) {
            objects.train.car1 = scene.meshes[i];
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ffff00"))) {
            objects.train.car2 = scene.meshes[i];
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#0000ff"))) {
            objects.train.car3 = scene.meshes[i];
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00000a"))) {
            if (scene.meshes[i].position._x < -3.4) {
                objects.train.car3wheels.push(scene.meshes[i]);
            } else if (scene.meshes[i].position._x < -2.2) {
                objects.train.car2wheels.push(scene.meshes[i]);
            } else if (scene.meshes[i].position._x < -0.9) {
                objects.train.car1wheels.push(scene.meshes[i]);
            } else {
                objects.train.enginewheels.push(scene.meshes[i]);
            }
        }
    }
    if (scene.meshes[i].position._z < -212 && scene.meshes[i].position._z > -229.85 && scene.meshes[i].position._x < -1 && scene.meshes[i].position._x > -19.85) {
        if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#fbffff"))) {
            objects.kitchen.structure.push(scene.meshes[i]);
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#b0b0b0"))) {
            if (scene.meshes[i].position._y > 8.15) {
                objects.kitchen.microwave.row1.push(scene.meshes[i]);
            } else if (scene.meshes[i].position._y > 7.85) {
                objects.kitchen.microwave.row2.push(scene.meshes[i]);
            } else if (scene.meshes[i].position._y > 7.55) {
                objects.kitchen.microwave.row3 = scene.meshes[i];
            } else {
                objects.kitchen.microwave.row4 = scene.meshes[i];
            }
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#b3ffab"))) {
        objects.walls.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#001dd1"))) {
        objects.fort.blueblocks.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00d110"))) {
        objects.fort.greenblock = scene.meshes[i];
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#fcfcfc"))) {
        objects.window1 = scene.meshes[i];
    }
    if (scene.meshes[i].position._x > 250) {
        objects.breadby.push(scene.meshes[i]);
    }
    if (scene.meshes[i].position._x < -230) {
        objects.demon.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#cefeff"))) {
        objects.water = scene.meshes[i];
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#a0a0a0"))) {
        objects.pans.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ffff09"))) {
        objects.sun.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ffcd00"))) {
        objects.sun.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ffdc00"))) {
        objects.sun.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#d9d9d9"))) {
        objects.moon.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#a2a2a2"))) {
        objects.moon.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#f2d79e"))) {
        objects.floor = scene.meshes[i];
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#6f4500"))) {
        if (scene.meshes[i].position._z < -170) {
            objects.door2 = scene.meshes[i];
        } else {
            objects.door1 = scene.meshes[i];
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#e6c313"))) {
        if (scene.meshes[i].position._z < -170) {
            objects.doorknob2 = scene.meshes[i];
        } else {
            objects.doorknob1 = scene.meshes[i];
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(new BABYLON.Color3.FromHexString("#24fc03"))) {
        if (scene.meshes[i].id.substring(0,2) == "E0") {
            objects.finish = scene.meshes[i];
        } else if (scene.meshes[i].id.substring(0,2) == "E1") {
            objects.fakefinish = scene.meshes[i];
        } else if (scene.meshes[i].id.substring(0,1) == "Y") {
            objects.visualfinish = scene.meshes[i];
        }
    }
    if (Math.round(scene.meshes[i].position._x*100) == 6000 || Math.round(scene.meshes[i].position._x*100) == -2000) {
        if (scene.meshes[i].material.diffuseColor.equals(new BABYLON.Color3.FromHexString("#00000a"))) {
            objects.windowframes.push(scene.meshes[i]);
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#ff5900")) || scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#b03e00")) || scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#9201fe")) || scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#f8ffff")) || scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#f0f0f0")) || scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#acf5a4")) || scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#bdbcbc"))) {
        objects.alternate.push(scene.meshes[i]);
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#acf5a4"))) {
        objects.mysticcube = scene.meshes[i];
    }
}
light.direction = new BABYLON.Vector3(0, 1, 0.2);
let intervalId = setInterval(function() {
    if (!isMapLoaded) {
        for (var i = scene.meshes.length-1; i > 0; i--) {
            if (scene.meshes[i].id.substring(0,4) == "cube") {
                scene.removeMesh(scene.meshes[i]);
            }
        }
        babylonCanvas.style.filter = "none";
        light.direction = new BABYLON.Vector3(0, 1, 0);
        delete globalThis.alpha;
        delete globalThis.beta;
        delete globalThis.messageCheck;
        delete globalThis.alertCheck;
        delete globalThis.current;
        delete globalThis.anom;
        delete globalThis.anomNum;
        delete globalThis.guess;
        delete globalThis.cubes;
        delete globalThis.alternate;
        delete globalThis.objects;
        clearInterval(intervalId);
    }
    test();
},100);
function resetObjects() {
    scene.clearColor = new BABYLON.Color3.FromHexString("#717aff");

    objects.shelf.yellowinnercube.position._x = 44;
    objects.shelf.yellowinnercube.position._z = -168;
    objects.shelf.yellowoutercube.position._x = 44;
    objects.shelf.yellowoutercube.position._z = -168;

    setColorUpdate(objects.shelf.pinkoutercube, "ff00ff");
    setColorUpdate(objects.shelf.pinkoutercube, "#ff00ff");
    setColorUpdate(objects.shelf.redinnercube, "#c30000");
    setColorUpdate(objects.shelf.redoutercube, "#ff0000");
    setColorUpdate(objects.shelf.orangeoutercube, "#fc7f00");
    setColorUpdate(objects.shelf.yellowinnercube, "#c2c200");
    setColorUpdate(objects.shelf.yellowoutercube, "#ffff00");
    setColorUpdate(objects.shelf.greeninnercube, "#00b800");
    setColorUpdate(objects.shelf.greenoutercube, "#00ff00");
    setColorUpdate(objects.shelf.cyanoutercube, "#00ffff");
    setColorUpdate(objects.shelf.blueinnercube, "#0000bf");
    setColorUpdate(objects.shelf.blueoutercube, "#0000ff");
    setColorUpdate(objects.shelf.purpleoutercube, "#9e00ff");

    objects.shelf.blocks.forEach(obj=>{obj.position._y = 0.55;});
    objects.shelf.shelves.forEach(obj=>{setColorUpdate(obj, "#ffffff");});
    setColorUpdate(objects.shelf.rug, "#00479c");

    objects.fort.blueblocks.forEach(obj=>{setColorUpdate(obj, "#001dd1");});

    objects.kitchen.microwave.row4.position._y = 7.4;
    
    setColorUpdate(objects.train.car1, "#ff0000");
    objects.train.car1.position._y = 0.95165;
    
    setColorUpdate(objects.train.car2, "#ffff00");
    objects.train.car2.position._y = 0.95165;
    
    setColorUpdate(objects.train.car3, "#0000ff");
    objects.train.car3.position._y = 0.95165;
    objects.train.car3wheels.forEach(obj=>{obj.position._y = 0.58765;});

    objects.train.car1.position._z = -199.75;
    objects.train.car2.position._z = -199.75;
    objects.train.car3.position._z = -199.75;
    objects.train.car1wheels.forEach(obj=>{obj.position._z = -199.75});
    objects.train.car2wheels.forEach(obj=>{obj.position._z = -199.75});
    objects.train.car3wheels.forEach(obj=>{obj.position._z = -199.75});
    objects.train.engine.forEach(obj=>{obj.position._z = -199.75});
    objects.train.enginewheels.forEach(obj=>{obj.position._z = -199.75});

    objects.train.engine.forEach(obj=>{setColorUpdate(obj, "#00a2ff");});

    objects.train.rugs.forEach(obj=>{setColorUpdate(obj, "#00df03");});
    
    objects.walls.forEach(obj=>{setColorUpdate(obj, "#b3ffab");});
    objects.windowframes.forEach(obj=>{setColorUpdate(obj, "#00000a");});
    objects.window1.isVisible = true;
    objects.breadby.forEach(obj=>{obj.position._x = 59.6;});
    objects.demon.forEach(obj=>{obj.position._x = -40;});
    objects.demon.forEach(obj=>{obj.isVisible = false;});
    objects.drawing.forEach(obj=>{obj.position._y = 104.15;});
    objects.sun.forEach(obj=>{obj.position._z = -150});
    objects.moon.forEach(obj=>{obj.position._z = -450});
    objects.pans.forEach(obj=>{obj.position._y = 106.95;});
    objects.water.position._y = 207.25;
    objects.doorknob2.position._x = 23;
    objects.doorknob2.isVisible = true;
    objects.door2.isVisible = true;
    objects.fort.greenblock.isVisible = true;

    objects.shelf.thecursedcrayon.position._x = 56;
    objects.shelf.thecursedcrayon.position._y = 0.84;
    objects.shelf.thecursedcrayon.position._z = -170.8;

    objects.shelf.blocks[0].isVisible = true;
    objects.shelf.blocks[1].isVisible = true;
    objects.shelf.blocks[2].isVisible = true;
    objects.shelf.blocks[3].isVisible = true;
    objects.shelf.blocks.forEach(obj=>{obj.isVisible = true;});

    objects.table.legs.forEach(obj=>{setColorUpdate(obj, "#f97c00");});

    objects.table.seattops.forEach(obj=>{setColorUpdate(obj, "#f97c00");});
    objects.table.seatbottoms.forEach(obj=>{setColorUpdate(obj, "#f97c00");});

    setColorUpdate(objects.floor, "#f2d79e");
}
function fixAlt() {
    for (var i = 0; i < objects.alternate.length; i++) {
        objects.alternate[i].position._y = objects.altspots[i] + 100;
    }
}
for (var i = 0; i < objects.alternate.length; i++) {
    objects.altspots.push('');
    objects.altspots[i] = objects.alternate[i].position._y;
}
for (var i = 0; i < objects.alternate.length; i++) {
    objects.alternate[i].position._y = objects.altspots[i] + 100;
}
let start = 0; //remove
let switchCheck = 0;
let tpCheck = 0;
let backCheck = 0;
if (localStorage.getItem("beb2") == null) {
    localStorage.setItem("beb2", "0");
} else {
    beta = Number(localStorage.getItem("beb2"));
}
function test() {
    if (player.position._z > -5) {
        tpCheck = 0;
        if (!(backCheck == Math.round(backCheck))) {
            backCheck += 0.5;
        }
    }
    if (start == 1 && alternate == 1) {
        rotation = 0;
        player.position._x = 20;
        player.position._y = 1;
        player.position._z = -152;
        start = 0;
    }
    if (alternate == 1) {
        objects.shelf.thecursedcrayon.showBoundingBox = true;
    } else {
        objects.shelf.thecursedcrayon.showBoundingBox = false;
    }
    if (!alive) {
        alpha = 0;
        current = 0;
        babylonCanvas.style.filter = "none";
    }
    if (player.intersectsMesh(objects.shelf.thecursedcrayon, true) && alternate == 1) {
        score = 59998;
        player.position = objects.fakefinish.position;
    }
    if (player.intersectsMesh(objects.visualfinish, true) && alternate == 0) {
        if (tpCheck == 0) {
            tpCheck = 1;
            if (beta == 0) {
                score = score * 2;
            } else if (beta == 1) {
                score = score * 1.5;
            }
        }
        player.position = objects.fakefinish.position;
    }
    if (player.intersectsMesh(objects.table.altswitch, true) && alternate == 1) {
        alternate = 0;
        for (var i = 0; i < objects.alternate.length; i++) {
            objects.alternate[i].position._y = objects.altspots[i] + 100;
        }
        player.position._y = 100;
        alpha = 0;
    }
    if (player.intersectsMesh(objects.mysticcube, true) && alternate == 1) {
        alert("You've found the mystic cube... what does it do?");
    }
    if (player.position._z < -260 && player.position._z > -300 && alternate == 1 && (backCheck == Math.round(backCheck))) {
        if (backCheck == 0) {
            alert("Oops... you weren't supposed to see this... let me do something real quick.");
            setTimeout(function(){
                babylonCanvas.style.filter = "blur(25px)";
                alert("There we go. That should do the trick");
            },500);
        } else if (backCheck == 1) {
            alert("Oh, you're back again? You're not really supposed to be here.");
            babylonCanvas.style.filter = "blur(37px)";
        } else if (backCheck == 2) {
            alert("Stop coming here!");
            babylonCanvas.style.filter = "blur(50px)";
        } else if (backCheck == 3) {
            alert("You really don't seem to get it, do you?");
            babylonCanvas.style.filter = "blur(25px) contrast(50)";
        } else {
            babylonCanvas.style.filter = "blur(25px) contrast(50)";
        }
        backCheck = backCheck + 0.5;
    }
    if (alternate == 1 && player.position._z > -3) {
        rotation = 0;
        player.position._x = 20;
        player.position._y = 1;
        player.position._z = -152;
    }
    if (player.position._z < -19 && player.position._z > -20) {
        if (alternate == 0) {
            player.position._x = 0;
            player.position._z = -100;
            console.log(cheese);
        }
    }
    if (player.position._z < -110 && player.position._z > -130 && player.position._x < 13 && alternate == 0) {
        if (messageCheck == 0) {
            window.tsTriggers[Object.keys(window.tsTriggers)[0]]("Exit " + alpha);
            fixAlt();
            messageCheck = 1;
        }
    } else {
        if (messageCheck == 1) {
            window.tsTriggers[Object.keys(window.tsTriggers)[1]]();
            messageCheck = 0;
        }
    }
    if (player.position._z > -10 && player.position._x > 14 && player.position._x < 16) {
        player.position._x = -500;
        alert("At exit 0, study the scene. Later exits show the same scene with possible changes. If you spot a change, return through your entry door, and if not, go through the other. Correct choices advance you, wrong ones send you back to exit 0.");
    }
    if ((player.position._z < -90 && player.position._z > -150) || (player.position._z < -230 && player.position._z > -280)) {
        speed = 0.3;
    } else if (player.position._z < -153 && player.position._z > -174 && player.position._x < 60 && player.position._x > 31 && alternate == 1) {
        speed = 0.1;
    } else {
        speed = 0.196;
    }
    if (alternate == 1) {
        steer = 0.04;
        a.cam_d(1.5);
    }
    if (player.position._z > 8 && alternate == 0) {
        if (switchCheck == 0) {
            switchCheck = 1;
            let gp = prompt("0 - Alternate Gameplay\n1 - Easy\n2 - Medium\n3 - Hard");
            let options = [0, 1, 2, 3];
            if (gp in options) {
                switch (gp) {
                    case "0":
                        rotation = 0;
                        player.position._x = 20;
                        player.position._y = 1;
                        player.position._z = -152;
                        alternate = 1;
                        for (var i = 0; i < objects.alternate.length; i++) {
                            objects.alternate[i].position._y = objects.altspots[i];
                        }
                        alert("Your goal is to try to get to the cursed crayon, but be careful to avoid the lava!\n*You cannot save replays in this mode.*\nTouch the stool closest to the sun to go back to playing the full map!");
                        player.position._y = 100;
                        break;
                    case "1":
                        beta = 0;
                        localStorage.setItem("beb2", "0");
                        alert("You are now in easy mode!");
                        player.position._y = 100;
                        break;
                    case "2":
                        beta = 1;
                        localStorage.setItem("beb2", "1");
                        alert("You are now in medium mode!");
                        player.position._y = 100;
                        break;
                    case "3":
                        beta = 2;
                        localStorage.setItem("beb2", "2");
                        alert("You are now in hard mode!");
                        player.position._y = 100;
                        break;
                }
            } 
        }
    } else {
        if (player.position._z > 5 && player.position._z < 7 && alternate == 0) {
            switchCheck = 0;
        }
    }
    if (player.position._z > -10 && player.position._x < -14 && player.position._x > -16) {
        player.position._x = -500;
        let string = "";
        let string2 = "";
        let track = 0;
        let numFound = 0;
        if (localStorage.getItem("beb")) {
            let beb = JSON.parse(localStorage.getItem("beb"));
            Object.entries(beb).forEach(([key, value]) => {
                if (value === 0 || value == null) {
                    if (track < 22) {
                        string += "????????????? - Not Discovered!\n";
                    } else {
                        string2 += "????????????? - Not Discovered!\n";
                    }
                    track++;
                } else if (value === 1) {
                    if (track < 22) {
                        string += key.replace(/_/g, " ") + " - Found 1 time!\n";
                    } else {
                        string2 += key.replace(/_/g, " ") + " - Found 1 time!\n";
                    }
                    numFound++;
                    track++;
                } else {
                    if (track < 22) {
                        string += key.replace(/_/g, " ") + " - Found " + value + " times!\n";
                    } else {
                        string2 += key.replace(/_/g, " ") + " - Found " + value + " times!\n";
                    }
                    numFound++;
                    track++;
                }
            });
            string = "You have found " + numFound + "/30 anomalies!\n" + string + "Page 1/2";
            string2 = string2 + "Page 2/2";
        } else {
            string = "You have not discovered any anomalies yet!";
        }
        alert(string);
        if (track > 21) {
            alert(string2);
        }
    }
    if ((alpha == 9 || alpha > 19) || (alpha == 12 && beta == 1)) {
        //objects.finish.position._y = 0;
        objects.visualfinish.position._y = 0;
        objects.fakefinish.position._y = 1.5;
    } else {
        objects.finish.position._y = 100;
        objects.visualfinish.position._y = 100;
        objects.fakefinish.position._y = 80;
    }
    if (alpha < 15 && alternate == 0) {
        babylonCanvas.style.filter = "none";
    }
    if (alternate == 0) {
        switch (current) {
            case 0:
                if (alertCheck == 0) {
                    if (alpha == 10) {
                        if (beta == 0) {
                            alert("Hey. You can't keep going. At least not in easy mode...");
                            player.position._y = 100;
                        } else {
                            alert("Wait, you're still going?\nWell, I guess if you really want to, you can, but there's nothing else.");
                        }
                        alertCheck = 1;
                    }
                    if (alpha == 11) {
                        alert("Umm... you do realize there's no point continuing, right?");
                        alertCheck = 1;
                    }
                    if (alpha == 12) {
                        if (beta == 1) {
                            alert("Here, I'll even give you a finish.");
                        } else {
                            alert("There's nothing more, just restart the level");
                        }
                        alertCheck = 1;
                    }
                    if (alpha == 13) {
                        alert("Just what could be so interesting?");
                        if (beta == 1) {
                            alert("I'll guess you'll never know.");
                            alert("Especially since you're only playing the game on MEDIUM difficulty...");
                            player.position._y = 100;
                        }
                        alertCheck = 1;
                    }
                    if (alpha == 14) {
                        alert("Why are you even doing this?");
                        alertCheck = 1;
                    }
                    if (alpha == 15) {
                        alert("You think there's something else, don't you?");
                        alertCheck = 1;
                    }
                    if (alpha == 16) {
                        alert("I guess I'll just have to FORCE you to restart!");
                        babylonCanvas.style.filter = "blur(5px)";
                        alertCheck = 1;
                    }
                    if (alpha == 18) {
                        alert("You're still alive? How about THIS?");
                        babylonCanvas.style.filter = "blur(10px)";
                        alertCheck = 1;
                    }
                    if (alpha == 19) {
                        alert("Ok fine, I'll give you what you're looking for... if you can REALLY prove yourself.");
                        babylonCanvas.style.filter = "grayscale(0.99)";
                        alertCheck = 1;
                    }
                    if (alpha == 21) {
                        alert("Why?");
                        alert("Wow, you managed to get through that. I think you've earned the knowledge of the lore. https://www.youtube.com/watch?v=wnXVFE8KLo8");
                        player.position._y = 100;
                        alertCheck = 1;
                    }
                }
                if (player.position._z < -149) {
                    if (!alive) {
                        current = 0;
                    } else {
                        current = 1;
                    }
                    alertCheck = 0;
                    resetObjects();
                    if (alpha == 0) {
                        anom = 1;
                    } else {
                        k = Math.round(Math.random()*15);
                        if (k < 7) {
                            anom = 1;
                        } else {
                            anom = 0;
                        }
                        //anom = Math.round(Math.random());
                        if (anom == 0) {
                            if (alpha < 3 || beta == 0) {
                                n = 8;
                                j = Math.random();
                                anomNum = (j - (j%(1/n))) * n;
                                anomNum = Math.round(anomNum);
                                switch (anomNum) {
                                    case 0:
                                        scene.clearColor = new BABYLON.Color3.FromHexString("#02000a");
                                        break;
                                    case 1:
                                        objects.walls.forEach(obj=>{setColorUpdate(obj, "#abf7ff");});
                                        break;
                                    case 2:
                                        objects.drawing.forEach(obj=>{obj.position._y = 4.15;});
                                        break;
                                    case 3:
                                        objects.train.rugs.forEach(obj=>{setColorUpdate(obj, "#df0000");});
                                        break;
                                    case 4:
                                        setColorUpdate(objects.shelf.rug, "#9c6600");
                                        break;
                                    case 5:
                                        objects.sun.forEach(obj=>{obj.position._z = -450});
                                        objects.moon.forEach(obj=>{obj.position._z = -150});
                                        break;
                                    case 6:
                                        objects.table.seattops.forEach(obj=>{setColorUpdate(obj, "#fcc300");});
                                        objects.table.seatbottoms.forEach(obj=>{setColorUpdate(obj, "#fcc300");});
                                        break;
                                    case 7:
                                        setColorUpdate(objects.floor, "#dedede");
                                        break;
                                }
                            } else if (alpha < 6 || beta == 1) {
                                n = 13;
                                j = Math.random();
                                anomNum = (j - (j%(1/n))) * n;
                                anomNum = Math.round(anomNum);
                                switch (anomNum) {
                                    case 0:
                                        objects.train.car3.position._y = 1000;
                                        objects.train.car3wheels.forEach(obj=>{obj.position._y = 1000;});
                                        break;
                                    case 1:
                                        objects.pans.forEach(obj=>{obj.position._y = 6.95;});
                                        break;
                                    case 2:
                                        setColorUpdate(objects.shelf.pinkoutercube, "#9e00ff");
                                        setColorUpdate(objects.shelf.redinnercube, "#0000bf");
                                        setColorUpdate(objects.shelf.redoutercube, "#0000ff");
                                        setColorUpdate(objects.shelf.orangeoutercube, "#00ffff");
                                        setColorUpdate(objects.shelf.yellowinnercube, "#00b800");
                                        setColorUpdate(objects.shelf.yellowoutercube, "#00ff00");
                                        setColorUpdate(objects.shelf.greeninnercube, "#c2c200");
                                        setColorUpdate(objects.shelf.greenoutercube, "#ffff00");
                                        setColorUpdate(objects.shelf.cyanoutercube, "#fc7f00");
                                        setColorUpdate(objects.shelf.blueinnercube, "#c30000");
                                        setColorUpdate(objects.shelf.blueoutercube, "#ff0000");
                                        setColorUpdate(objects.shelf.purpleoutercube, "#ff00ff");
                                        break;
                                    case 3:
                                        objects.door2.isVisible = false;
                                        objects.doorknob2.isVisible = false;
                                        break;
                                    case 4:
                                        objects.demon.forEach(obj=>{obj.isVisible = true;});
                                        break;
                                    case 5:
                                        objects.breadby.forEach(obj=>{obj.position._x = 259.6;});
                                        break;
                                    case 6:
                                        objects.fort.blueblocks.forEach(obj=>{setColorUpdate(obj, "#7f00d1");});
                                        break;
                                    case 7:
                                        objects.water.position._y = 7.25;
                                        break;
                                    case 8:
                                        objects.shelf.shelves.forEach(obj=>{setColorUpdate(obj, "#ffdb97");});
                                        break;
                                    case 9:
                                        objects.train.car1.position._z = -190.25;
                                        objects.train.car2.position._z = -190.25;
                                        objects.train.car3.position._z = -190.25;
                                        objects.train.car1wheels.forEach(obj=>{obj.position._z = -190.25});
                                        objects.train.car2wheels.forEach(obj=>{obj.position._z = -190.25});
                                        objects.train.car3wheels.forEach(obj=>{obj.position._z = -190.25});
                                        objects.train.engine.forEach(obj=>{obj.position._z = -190.25});
                                        objects.train.enginewheels.forEach(obj=>{obj.position._z = -190.25});
                                        break;
                                    case 10:
                                        objects.shelf.thecursedcrayon.position._x = 50;
                                        objects.shelf.thecursedcrayon.position._y = 0.35;
                                        objects.shelf.thecursedcrayon.position._z = -202.8;
                                        break;
                                    case 11:
                                        objects.fort.greenblock.isVisible = false;
                                        break;
                                    case 12:
                                        objects.shelf.blocks.forEach(obj=>{obj.isVisible = false;});
                                        break;
                                }
                            } else {
                                n = 9;
                                j = Math.random();
                                anomNum = (j - (j%(1/n))) * n;
                                anomNum = Math.round(anomNum);
                                switch (anomNum) {
                                    case 0:
                                        objects.train.engine.forEach(obj=>{setColorUpdate(obj, "#9300ff");});
                                        break;
                                    case 1:
                                        setColorUpdate(objects.train.car1, "#0000ff");
                                        setColorUpdate(objects.train.car3, "#ff0000");
                                        break;
                                    case 2:
                                        objects.kitchen.microwave.row4.position._y = 1000;
                                        break;
                                    case 3:
                                        objects.shelf.yellowinnercube.position._x = 38;
                                        objects.shelf.yellowinnercube.position._z = -170;
                                        objects.shelf.yellowoutercube.position._x = 38;
                                        objects.shelf.yellowoutercube.position._z = -170;
                                        break;
                                    case 4:
                                        objects.window1.isVisible = false;
                                        break;
                                    case 5:
                                        objects.doorknob2.position._x = 17;
                                        break;
                                    case 6:
                                        objects.shelf.blocks[0].isVisible = false;
                                        objects.shelf.blocks[1].isVisible = false;
                                        objects.shelf.blocks[2].isVisible = false;
                                        objects.shelf.blocks[3].isVisible = false;
                                        break;
                                    case 7:
                                        objects.table.legs.forEach(obj=>{setColorUpdate(obj, "#b65b00");});
                                        break;
                                    case 8:
                                        objects.windowframes.forEach(obj=>{setColorUpdate(obj, "#393939");});
                                        break;
                                }
                            }
                        }
                    }
                }
                break;
            case 1:
                if (player.position._z > -130 && player.position._x < 12) {
                    guess = 0;
                    current = 2;
                }
                if (player.position._z < -250 && player.position._x > 28) {
                    guess = 1;
                    current = 2;
                }
                break;
            case 2:
                if (guess == anom) {
                    if (player.position._z < -50) {
                        if (guess == 0) {
                            rotation += Math.PI;
                            player.position._z = -110 - player.position._z - 110;
                            let beb = {};
                            if (localStorage.getItem("beb")) {
                                beb = JSON.parse(localStorage.getItem("beb"));
                            }
                            const defaultAnomalies = {
                                Night: 0,
                                Blue_Walls: 0,
                                Creepy_Drawing: 0,
                                Red_Rug: 0,
                                Brown_Rug: 0,
                                Moon: 0,
                                Chairs_Changed_Color: 0,
                                Floor_Changed_Color: 0,
                                Missing_Train_Car: 0,
                                Pan_on_Stove: 0,
                                Cube_Colors_Flipped: 0,
                                Door_is_Missing: 0,
                                Creepy_Guy_Outside_the_Window: 0,
                                Breadby_Missing: 0,
                                Purple_Fort_Blocks: 0,
                                Water_in_Sink: 0,
                                Shelves_Color_Changed: 0,
                                Train_on_Other_Side_of_the_Track: 0,
                                Cursed_Crayon_is_Moved: 0,
                                Green_Block_is_Missing: 0,
                                All_Wooden_Blocks_are_Missing: 0,
                                Purple_Train_Engine: 0,
                                Red_and_Blue_Train_Cars_are_Flipped: 0,
                                Microwave_Missing_Bottom_Button: 0,
                                Yellow_Cube_is_Moved: 0,
                                Window_Pane_Missing: 0,
                                Doorknob_is_on_the_Wrong_Side: 0,
                                Some_Wooden_Blocks_are_Missing: 0,
                                Table_Legs_Color_Changed: 0,
                                Window_Frames_Color_Changed: 0
                            };
                            for (const key in defaultAnomalies) {
                              if (!(key in beb)) {
                                beb[key] = 0;
                              }
                            }
                            let beb2 = {};
                            for (const key of Object.keys(defaultAnomalies)) {
                              if (key in beb) {
                                beb2[key] = beb[key];
                              }
                            }
                            localStorage.setItem("beb", JSON.stringify(beb2));
                            beb = JSON.parse(localStorage.getItem("beb"));
                            if (alpha < 3 || beta == 0) {
                                switch (anomNum) {
                                    case 0:
                                        beb.Night = beb.Night + 1;
                                        break;
                                    case 1:
                                        beb.Blue_Walls = beb.Blue_Walls + 1;
                                        break;
                                    case 2:
                                        beb.Creepy_Drawing = beb.Creepy_Drawing + 1;
                                        break;
                                    case 3:
                                        beb.Red_Rug = beb.Red_Rug + 1;
                                        break;
                                    case 4:
                                        beb.Brown_Rug = beb.Brown_Rug + 1;
                                        break;
                                    case 5:
                                        beb.Moon = beb.Moon + 1;
                                        break;
                                    case 6:
                                        beb.Chairs_Changed_Color = beb.Chairs_Changed_Color + 1;
                                        break;
                                    case 7:
                                        beb.Floor_Changed_Color = beb.Floor_Changed_Color + 1;
                                        break;
                                }
                            } else if (alpha < 6 || beta == 1) {
                                switch (anomNum) {
                                    case 0:
                                        beb.Missing_Train_Car = beb.Missing_Train_Car + 1;
                                        break;
                                    case 1:
                                        beb.Pan_on_Stove = beb.Pan_on_Stove + 1;
                                        break;
                                    case 2:
                                        beb.Cube_Colors_Flipped = beb.Cube_Colors_Flipped + 1;
                                        break;
                                    case 3:
                                        beb.Door_is_Missing = beb.Door_is_Missing + 1;
                                        break;
                                    case 4:
                                        beb.Creepy_Guy_Outside_the_Window = beb.Creepy_Guy_Outside_the_Window + 1;
                                        break;
                                    case 5:
                                        beb.Breadby_Missing = beb.Breadby_Missing + 1;
                                        break;
                                    case 6:
                                        beb.Purple_Fort_Blocks = beb.Purple_Fort_Blocks + 1;
                                        break;
                                    case 7:
                                        beb.Water_in_Sink = beb.Water_in_Sink + 1;
                                        break;
                                    case 8:
                                        beb.Shelves_Color_Changed = beb.Shelves_Color_Changed + 1;
                                        break;
                                    case 9:
                                        beb.Train_on_Other_Side_of_the_Track = beb.Train_on_Other_Side_of_the_Track + 1;
                                        break;
                                    case 10:
                                        beb.Cursed_Crayon_is_Moved = beb.Cursed_Crayon_is_Moved + 1;
                                        break;
                                    case 11:
                                        beb.Green_Block_is_Missing = beb.Green_Block_is_Missing + 1;
                                        break;
                                    case 12:
                                        beb.All_Wooden_Blocks_are_Missing = beb.All_Wooden_Blocks_are_Missing + 1;
                                        break;
                                }
                            } else {
                                switch (anomNum) {
                                    case 0:
                                        beb.Purple_Train_Engine = beb.Purple_Train_Engine + 1;
                                        break;
                                    case 1:
                                        beb.Red_and_Blue_Train_Cars_are_Flipped = beb.Red_and_Blue_Train_Cars_are_Flipped + 1;
                                        break;
                                    case 2:
                                        beb.Microwave_Missing_Bottom_Button = beb.Microwave_Missing_Bottom_Button + 1;
                                        break;
                                    case 3:
                                        beb.Yellow_Cube_is_Moved = beb.Yellow_Cube_is_Moved + 1;
                                        break;
                                    case 4:
                                        beb.Window_Pane_Missing = beb.Window_Pane_Missing + 1;
                                        break;
                                    case 5:
                                        beb.Doorknob_is_on_the_Wrong_Side = beb.Doorknob_is_on_the_Wrong_Side + 1;
                                        break;
                                    case 6:
                                        beb.Some_Wooden_Blocks_are_Missing = beb.Some_Wooden_Blocks_are_Missing + 1;
                                        break;
                                    case 7:
                                        beb.Table_Legs_Color_Changed = beb.Table_Legs_Color_Changed + 1;
                                        break;
                                    case 8:
                                        beb.Window_Frames_Color_Changed = beb.Window_Frames_Color_Changed + 1;
                                        break;
                                }
                            }
                            localStorage.setItem("beb", JSON.stringify(beb));
                        } else {
                            player.position._z = player.position._z + 160;
                        }
                        player.position._x = -12;
                        alpha++;
                        current = 0;
                    }
                } else {
                    if (player.position._z < -50) {
                        if (guess == 0) {
                            rotation += Math.PI;
                            player.position._z = -110 - player.position._z - 110;
                        } else {
                            player.position._z = player.position._z + 160;
                        }
                        player.position._x = -12;
                        alpha = 0;
                        current = 0;
                    }
                }
                break;
        }
    }
}
/*let data = [15,9,-140.25,20,18,0.5,1,5,9,-105,30.5,18,0.5,1,10,9,-10,9.5,18,0.5,0,-5,9,-115,30.5,18,0.5,1,15,9,-120,19.5,18,0.5,0,5,9,-130,20.5,18,0.5,0,25,9,-135,30.5,18,0.5,1,35,9,-269.75,20,18,0.5,1,45,9,-264.75,30,18,0.5,1,25,9,-260,20.5,18,0.5,0,35,9,-250,20.5,18,0.5,0,25,9,-240,20.5,18,0.5,1,15,9,-245,30.5,18,0.5,1,5,9,5,10.5,18,0.5,1,15,9,-5,10.5,18,0.5,1,10,9,0,9.5,18,0.5,0,0,9,10,10.5,18,0.5,0,-10,9,-90,30.5,18,0.5,0,5,9,-15,10.5,18,0.5,1,-5,9,5,10.5,18,0.5,1,0,9,-20,10.5,18,0.5,0,-15,9,-100,20.5,18,0.5,0,-25,9,-95,10.5,18,0.5,1,-10,9,-10,9.5,18,0.5,0,-10,9,0,9.5,18,0.5,0,-15,9,-5,10.5,18,0.5,1,-5,9,-15,10.5,18,0.5,1];
globalThis.cubes = [];
for (var i = data.length - 1; i > 0; i-=7) {
    cubes.push({px:data[i-6], py:data[i-5], pz:data[i-4], sx:data[i-3], sy:data[i-2], sz:data[i-1], ry:data[i]});
}
for (var i = 0; i < cubes.length; i++) {
    let data = cubes[i];
    let cube = BABYLON.MeshBuilder.CreateBox("cube" + i, {size: 1}, scene);
    cube.position = new BABYLON.Vector3(data.px, data.py, data.pz);
    cube.scaling = new BABYLON.Vector3(data.sx, data.sy, data.sz);
    cube.rotation.y = data.ry * (Math.PI/2);
    let material = new BABYLON.StandardMaterial("material" + i, scene);
    let texture = new BABYLON.Texture("https://awehero.github.io/intro/images/tiles2.jpg", scene);
    texture.uScale = data.sx / 8;
    texture.vScale = data.sy / 8;
    material.diffuseTexture = texture;
    cube.material = material;
}*/
/*cubedata = [-1104,0,-585,2,10,2,0,0,0,"0000ff",-1104,0.9,-530,6,0.5,6,0,0,0,"0000ff",-1108,3,-540,2,10,2,0,0,0,"0000ff",-1103.8,0.9,-547.6,2,0.5,1.4,0,0.17,0,"0000ff",-1111,0,-555,2,10,2,0,0,0,"0000ff",-1112,3,-507,6,10,6,0,0,0,"0000ff",-1108,0,-570,2,10,2,0,0,0,"0000ff",-1099,0.9,-597.4,2,0.5,5,0,0,0,"0000ff",-1113,0,-606,2,10,2,0,0,0,"0000ff",-1112,0,-628,2,10,2,0,0,0,"0000ff",-1099.85,0,-644.38,2,10,2,0,0,0,"0000ff",-1107.79,-0.1,-633.45,1,0.5,1,0,0,0,"0000ff",-1104.59,-0.1,-637.35,1,0.5,1,0,0,0,"0000ff",-1095,0.9,-577.7,2,0.5,6,0,-0.52,0,"ff0000",-1100,0,-505,6,0.5,10,0,0,0,"ff0000",-1104,0.9,-538,2,0.5,2,0,0,0,"ff0000",-1109,3,-550,2,10,2,0,0,0,"ff0000",-1106,0.9,-553.7,2,0.5,6,0,-0.52,0,"ff0000",-1103,3,-572,2,10,2,0,0,0,"ff0000",-1106,0.9,-566.7,2,0.5,4,0,0.79,0,"ff0000",-1104,3,-592,2,10,2,0,0,0,"ff0000",-1099,0.9,-586.7,0.4,0.5,4,0,-0.61,0,"ff0000",-1117,3,-611,2,10,2,0,0,0,"ff0000",-1111,3,-634,2,10,2,0,0,0,"ff0000",-1107.39,-0.1,-630.85,1,0.5,1,0,0.09,0,"ff0000",-1106.89,-0.1,-635.95,1,0.5,1,0,0,0,"ff0000",-1104,0.9,-549.7,2,0.5,1.4,0,-0.26,0,"ff00ff",-1109,0,-535,2,10,2,0,0,0,"ff00ff",-1110,3,-565,2,10,2,0,0,0,"ff00ff",-1101,3,-580,2,10,2,0,0,0,"ff00ff",-1108,3,-602,2,10,2,0,0,0,"ff00ff",-1115,3,-624,2,10,2,0,0,0,"ff00ff",-1104,3,-641,2,10,2,0,0,0,"ff00ff",-1099,0,-574,2,10,2,0,0,0,"ffff00",-1105,1.9,-513,6,0.5,10,0,0,0.7,"ffff00",-1110,3,-530,2,10,2,0,0,0,"ffff00",-1104,0.9,-545.7,2,0.5,1.4,0,0,0,"ffff00",-1111,3,-560,2,10,2,0,0,0,"ffff00",-1100.59,0.9,-568.55,2,0.5,5,0,1.57,0,"ffff00",-1104,0,-598,2,10,2,0,0,0,"ffff00",-1099.59,0.9,-591.55,0.4,0.5,5,0,0.17,0,"ffff00",-1116,0,-618,2,10,2,0,0,0,"ffff00",-1109,0,-639,2,10,2,0,0,0,"ffff00",-1107.29,-0.1,-632.15,1,0.5,1,0,0,0,"ffff00",-1105.69,-0.1,-636.75,1,0.5,1,0,0,0,"ffff00",-1102.29,-0.1,-638.75,1,0.5,1,0,0,0,"ff0000",-1101.19,-0.1,-639.55,1,0.5,1,0,0,0,"ffff00",-1100.39,-0.1,-640.65,1,0.5,1,0,0,0,"0000ff",-1097.4,0.9,-582.6,0.4,0.5,4,0,-0.26,0,"ffffff",-1108.49,-0.1,-627.75,0.4,0.5,5,0,0.35,0,"ffffff",-1107.59,-0.1,-634.75,1,0.5,1,0,0,0,"ffffff",-1103.39,-0.1,-637.95,1,0.5,1,0,0,0,"ffffff",-1108,5.9,-521,6,0.5,10,0,0,1.13,"ffffff",-1104,0.9,-535,4,0.5,3,0,0,0,"ffffff",-1104,0.9,-542,0.4,0.5,5,0,0,0,"ffffff",-1108,0.9,-560.7,2,0.5,6,0,0,0,"ffffff",-1107,0,-545,2,10,2,0,0,0,"ffffff",-1095.18,0.9,-571.4,2,0.5,5,0,0.79,0,"ffffff"];
globalThis.cubes = [];
for (var i = 0; i < cubedata.length; i+=10) {
    cubes.push({px:cubedata[i], py:cubedata[i+1], pz:cubedata[i+2], sx:cubedata[i+3], sy:cubedata[i+4], sz:cubedata[i+5],  rx:cubedata[i+6], ry:cubedata[i+7], rz:cubedata[i+8], mat:cubedata[i+9]});
}
for (var i = 0; i < cubes.length; i++) {
    let data = cubes[i];
    let cube = BABYLON.MeshBuilder.CreateBox("cube2" + i, {width: data.sx, height: data.sy, depth: data.sz}, scene);
    cube.position = new BABYLON.Vector3(data.px, data.py, data.pz);
    let material = new BABYLON.StandardMaterial("material" + i, scene);
    material.diffuseColor, "#" + data.mat);
    cube.material = material;
    cube.rotation.x = data.rx;
    cube.rotation.y = -1*data.ry;
    cube.rotation.z = -1*data.rz;
    cube.physicsImpostor = new BABYLON.PhysicsImpostor(cube, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
}
cubedata = [20,0.25,-157,10,0.5,14,0,0,0,"9201fe",10,2,-163,12,0.5,2,0,0,0.35,"9201fe",-5.5,2,-180,1,0.5,12,0,0.26,0,"9201fe",-1.5,2,-208.27,1.4,0.5,12,-0.35,0,0,"9201fe",-8.5,5.15,-215.3,1.4,0.5,12,-0.21,-1.57,0,"9201fe",47,2,-194.2,4,4,8,0,0.79,0,"9201fe",42.2,2,-205.7,4,4,4,0,-0.35,0,"9201fe",39.6,2,-215.3,4,4,4,0,0.35,0,"9201fe",41,2,-210.2,4,4,8,0,1.31,0,"9201fe",29,2,-223,4,4,4,0,-0.44,0,"9201fe",34.7,2,-219.9,4,4,8,0,-0.09,0,"9201fe",28.7,3.75,-226.5,4,0.5,0.6,0,-0.61,0,"9201fe",27,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",25,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",21.75,3.75,-226,4,0.5,0.6,0,-0.61,0,"9201fe",21,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",19,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",17,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",16,3.75,-228,4,0.5,0.6,0,-0.61,0,"9201fe",13,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",10,3.75,-226,4,0.5,0.6,0,-0.61,0,"9201fe",8,3.75,-226,4,0.5,0.6,0,-0.61,0,"9201fe",7,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",5,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",0,2,-225,4,4,4,0,0,0,"9201fe",3,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",-1.49,4.15,-166.8,1.36,0.26,0.44,0,-0.79,0,"b03e00",45.6,1.86,-161.8,2.6,2.8,2.6,0,-1.31,0,"b03e00",41.6,1.86,-159.8,2.6,2.8,2.6,0,-1.83,0,"b03e00",36.6,1.86,-157.8,2.6,2.8,2.6,0,-1.13,0,"b03e00",31.6,1.86,-160.8,2.6,2.8,2.6,0,-2.27,0,"b03e00",36.6,1.86,-163.8,2.6,2.8,2.6,0,-1.57,0,"b03e00",40.6,1.86,-165.8,2.6,2.8,2.6,0,-0.7,0,"b03e00",31.6,1.86,-167.8,2.6,2.8,2.6,0,-0.17,0,"b03e00",33.6,1.86,-171.8,2.6,2.8,2.6,0,0.52,0,"b03e00",38.2,1.86,-172.2,2.6,2.8,2.6,0,-0.61,0,"b03e00",47.6,1.86,-170.8,2.6,2.8,2.6,0,0.17,0,"b03e00",51.5,1.86,-172.7,2.6,2.8,2.6,0,-0.96,0,"b03e00",-3.6,4.15,-171.6,3.6,0.26,0.9,0,0.87,0,"b03e00",2.25,4.15,-166.2,2.7,0.26,0.9,0,-0.87,0,"b03e00",-3.6,4.15,-164.4,3.6,0.26,0.9,0,-0.87,0,"b03e00",2.25,4.15,-169.8,2.7,0.26,0.9,0,0.87,0,"b03e00",-1.49,4.15,-169.2,1.36,0.26,0.44,0,0.79,0,"b03e00",3.02,4.15,-168,2.1,0.26,0.9,0,1.57,0,"b03e00",-7.17,3.5,-223.56,0.2,2,0.4,0,-0.09,0,"bcbcbc",-5.24,3.5,-226.72,5.4,6,6,0,-0.09,0,"f1f1f1",15,9,-230,0.5,18,0.5,0,0,0,"f8ffff",25,9,-230,0.5,18,0.5,0,0,0,"f8ffff",15,9,-150,0.5,18,0.5,0,0,0,"f8ffff",25,9,-150,0.5,18,0.5,0,0,0,"f8ffff",20,0.01,-190,80,0.5,80,0,0,0,"ff5900",-16.5,3.27,-221,3.02,6.5,4.02,0,0,0,"ff5900",-14.4,6.27,-221,1.2,0.5,1,0,0,0,"ff5900",-13.85,3.27,-221,0.3,6.5,1,0,0,0,"ff5900",39,0.55,-186.6,0.4,0.4,0.8,0,-0.79,0,"ff5900",36,0.55,-188.6,0.4,0.4,0.8,0,1.05,0,"ff5900",32,0.55,-182.6,0.4,0.4,0.8,0,-1.57,0,"ff5900",37,0.55,-179.6,0.4,0.4,0.8,0,-0.61,0,"ff5900",42,0.55,-177.6,0.4,0.4,0.8,0,0.26,0,"ff5900",48,0.55,-178.6,0.4,0.4,0.8,0,0.7,0,"ff5900",55,0.55,-180.6,0.4,0.4,0.8,0,2.18,0,"ff5900",52,0.55,-183.6,0.4,0.4,0.8,0,-0.79,0,"ff5900",53,0.55,-186.6,0.4,0.4,0.8,0,0.52,0,"ff5900",47,0.55,-183.6,0.4,0.4,0.8,0,-0.26,0,"ff5900",52,0.55,-176.6,0.4,0.4,1.6,0,0.35,0,"ff5900",57,0.55,-183.6,0.4,0.4,1.6,0,2.62,0,"ff5900",49,0.55,-181.6,0.4,0.4,1.6,0,0,0,"ff5900",51,0.55,-188.6,0.4,0.4,1.6,0,-1.22,0,"ff5900",41,0.55,-174.6,0.4,0.4,1.6,0,-0.09,0,"ff5900",34,0.55,-180.6,0.4,0.4,1.6,0,0.79,0,"ff5900",32,0.55,-188.6,0.4,0.4,1.6,0,-0.26,0,"ff5900",44,0.55,-185.6,0.4,0.4,1.6,0,0.87,0,"ff5900",45.6,1.75,-161.8,3,3,3,0,-1.31,0,"ff5900",41.6,1.75,-159.8,3,3,3,0,-1.83,0,"ff5900",36.6,1.75,-157.8,3,3,3,0,-1.13,0,"ff5900",31.6,1.75,-160.8,3,3,3,0,-2.27,0,"ff5900",36.6,1.75,-163.8,3,3,3,0,-1.57,0,"ff5900",40.6,1.75,-165.8,3,3,3,0,-0.7,0,"ff5900",31.6,1.75,-167.8,3,3,3,0,-0.17,0,"ff5900",33.6,1.75,-171.8,3,3,3,0,0.52,0,"ff5900",38.2,1.75,-172.2,3,3,3,0,-0.61,0,"ff5900",47.6,1.75,-170.8,3,3,3,0,0.17,0,"ff5900",51.5,1.75,-172.7,3,3,3,0,-0.96,0,"ff5900",57,0.5,-175,6.02,0.52,4.52,0,0,0,"ff5900",57,4.5,-169,6.02,0.52,16.52,0,0,0,"ff5900",57,4.5,-161,6.02,8.52,0.52,0,0,0,"ff5900",57,8.5,-169,6.02,0.52,16.52,0,0,0,"ff5900",57,4.5,-165,6.02,8.52,0.52,0,0,0,"ff5900",57,4.5,-169,6.02,8.52,0.52,0,0,0,"ff5900",57,4.5,-173,6.02,8.52,0.52,0,0,0,"ff5900",57,4.5,-177,6.02,8.52,0.52,0,0,0,"ff5900",57,0.5,-165,6.02,0.52,8.52,0,0,0,"ff5900",-3,0.41,-195,8,0.12,9,0,0,0,"ff5900"];
globalThis.cubes = [];
for (var i = 0; i < cubedata.length; i+=10) {
    cubes.push({px:cubedata[i], py:cubedata[i+1], pz:cubedata[i+2], sx:cubedata[i+3], sy:cubedata[i+4], sz:cubedata[i+5],  rx:cubedata[i+6], ry:cubedata[i+7], rz:cubedata[i+8], mat:cubedata[i+9]});
}
for (var i = 0; i < cubes.length; i++) {
    let data = cubes[i];
    let cube = BABYLON.MeshBuilder.CreateBox("cube2" + i, {width: data.sx, height: data.sy, depth: data.sz}, scene);
    cube.position = new BABYLON.Vector3(data.px, data.py, data.pz);
    let material = new BABYLON.StandardMaterial("material" + i, scene);
    material.diffuseColor, "#" + data.mat);
    cube.material = material;
    cube.rotation.x = data.rx;
    cube.rotation.y = -1*data.ry;
    cube.rotation.z = -1*data.rz;
    cube.physicsImpostor = new BABYLON.PhysicsImpostor(cube, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
    if (cube.mat == "ff5900") {
        objects.killfloor = cube;
        killBlocks.push(cube);
    }
    objects.alternate.push(cube);
    cube.isVisible = false;
}
cylinderdata = [-1091,0,-579,2,10,2,0,0,0,"0000ff",-1102,0,-562,2,10,2,0,0,0,"0000ff",-1099,3,-609,2,10,2,0,0,0,"0000ff",-1106,3,-625,2,10,2,0,0,0,"0000ff",-1111.6,0,-623,1.4,6,1.4,0.79,0,1.57,"0000ff",-1100.4,1,-641.8,2,2,2,0,0,0,"9300f7",-1090,3,-573,2,10,2,0,0,0,"ff0000",-1099,3,-530,2,10,2,0,0,0,"ff0000",-1101,0,-543,2,10,2,0,0,0,"ff0000",-1104,3,-558,2,10,2,0,0,0,"ff0000",-1101,3,-548,2,10,2,0,0,0,"ff0000",-1095,3,-597,2,10,2,0,0,0,"ff0000",-1100,0,-603,2,4,2,0,0,1.57,"ff0000",-1110,3,-616,2,10,2,0,0,0,"ff0000",-1102,3,-635,2,10,2,0,0,0,"ff0000",-1111.6,0,-611.4,1.4,6,1.4,-0.79,0,1.57,"ff0000",-1097,3,-563,2,10,2,0,0,0,"ff00ff",-1094,3,-584,2,10,2,0,0,0,"ff00ff",-1100,0,-534,2,10,2,0,0,0,"ff00ff",-1105,0,-612,2,10,2,0,0,0,"ff00ff",-1104,0,-630,2,10,2,0,0,0,"ff00ff",-1093,0,-567,2,10,2,0,0,0,"ffff00",-1096,0,-590,2,10,2,0,0,0,"ffff00",-1102,0,-553,2,10,2,0,0,0,"ffff00",-1101,3,-539,2,10,2,0,0,0,"ffff00",-1114,0,-617.3,1.4,6,1.4,-1.57,0,1.57,"ffff00",-1102,0,-605,2,4,2,0,0,1.57,"ffff00",-1095,0,-604,2,10,2,0,0,0,"ffff00",-1109,0,-621,2,10,2,0,0,0,"ffff00",-1098,0,-639,2,10,2,0,0,0,"ffff00",-1107,0,-608.5,2,4,2,0,0,1.57,"ffffff",-1099,0,-601,2,2,2,0,0,1.57,"ffffff",-1095,3,-520,10,10,10,0,0,0,"ff0000",-1104,0,-606.8,1,6,1,0,0,1.57,"0000ff"];
globalThis.cubes = [];
for (var i = 0; i < cylinderdata.length; i+=10) {
    cubes.push({px:cylinderdata[i], py:cylinderdata[i+1], pz:cylinderdata[i+2], sx:cylinderdata[i+3], sy:cylinderdata[i+4], sz:cylinderdata[i+5],  rx:cylinderdata[i+6], ry:cylinderdata[i+7], rz:cylinderdata[i+8], mat:cylinderdata[i+9]});
}
for (var i = 0; i < cubes.length; i++) {
    let data = cubes[i];
    let cylinder = BABYLON.MeshBuilder.CreateCylinder("cube3" + i, {diameterTop: 1, diameterBottom: 1, height: 1}, scene);
    cylinder.position = new BABYLON.Vector3(data.px, data.py, data.pz);
    cylinder.scaling = new BABYLON.Vector3(data.sx, data.sy, data.sz);
    let material = new BABYLON.StandardMaterial("material" + i, scene);
    material.diffuseColor, "#" + data.mat);
    cylinder.material = material;
    cylinder.rotation.x = data.ry;
    cylinder.rotation.y = data.rx;
    cylinder.rotation.z = -1*data.rz;
    cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
}


cubedata = [20,0.25,-157,10,0.5,14,0,0,0,"9201fe",10,2,-163,12,0.5,2,0,0,0.35,"9201fe",-5.5,2,-180,1,0.5,12,0,0.26,0,"9201fe",-1.5,2,-208.27,1.4,0.5,12,-0.35,0,0,"9201fe",-8.5,5.15,-215.3,1.4,0.5,12,-0.21,-1.57,0,"9201fe",47,2,-194.2,4,4,8,0,0.79,0,"9201fe",42.2,2,-205.7,4,4,4,0,-0.35,0,"9201fe",39.6,2,-215.3,4,4,4,0,0.35,0,"9201fe",41,2,-210.2,4,4,8,0,1.31,0,"9201fe",29,2,-223,4,4,4,0,-0.44,0,"9201fe",34.7,2,-219.9,4,4,8,0,-0.09,0,"9201fe",28.7,3.75,-226.5,4,0.5,0.6,0,-0.61,0,"9201fe",27,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",25,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",21.75,3.75,-226,4,0.5,0.6,0,-0.61,0,"9201fe",21,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",19,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",17,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",16,3.75,-228,4,0.5,0.6,0,-0.61,0,"9201fe",13,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",10,3.75,-226,4,0.5,0.6,0,-0.61,0,"9201fe",8,3.75,-226,4,0.5,0.6,0,-0.61,0,"9201fe",7,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",5,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",0,2,-225,4,4,4,0,0,0,"9201fe",3,3.75,-227,4,0.5,0.6,0,-0.61,0,"9201fe",-1.49,4.15,-166.8,1.36,0.26,0.44,0,-0.79,0,"b03e00",45.6,1.86,-161.8,2.6,2.8,2.6,0,-1.31,0,"b03e00",41.6,1.86,-159.8,2.6,2.8,2.6,0,-1.83,0,"b03e00",36.6,1.86,-157.8,2.6,2.8,2.6,0,-1.13,0,"b03e00",31.6,1.86,-160.8,2.6,2.8,2.6,0,-2.27,0,"b03e00",36.6,1.86,-163.8,2.6,2.8,2.6,0,-1.57,0,"b03e00",40.6,1.86,-165.8,2.6,2.8,2.6,0,-0.7,0,"b03e00",31.6,1.86,-167.8,2.6,2.8,2.6,0,-0.17,0,"b03e00",33.6,1.86,-171.8,2.6,2.8,2.6,0,0.52,0,"b03e00",38.2,1.86,-172.2,2.6,2.8,2.6,0,-0.61,0,"b03e00",47.6,1.86,-170.8,2.6,2.8,2.6,0,0.17,0,"b03e00",51.5,1.86,-172.7,2.6,2.8,2.6,0,-0.96,0,"b03e00",-3.6,4.15,-171.6,3.6,0.26,0.9,0,0.87,0,"b03e00",2.25,4.15,-166.2,2.7,0.26,0.9,0,-0.87,0,"b03e00",-3.6,4.15,-164.4,3.6,0.26,0.9,0,-0.87,0,"b03e00",2.25,4.15,-169.8,2.7,0.26,0.9,0,0.87,0,"b03e00",-1.49,4.15,-169.2,1.36,0.26,0.44,0,0.79,0,"b03e00",3.02,4.15,-168,2.1,0.26,0.9,0,1.57,0,"b03e00",-7.17,3.5,-223.56,0.2,2,0.4,0,-0.09,0,"bcbcbc",-5.24,3.5,-226.72,5.4,6,6,0,-0.09,0,"f1f1f1",15,9,-230,0.5,18,0.5,0,0,0,"f8ffff",25,9,-230,0.5,18,0.5,0,0,0,"f8ffff",15,9,-150,0.5,18,0.5,0,0,0,"f8ffff",25,9,-150,0.5,18,0.5,0,0,0,"f8ffff",20,0.01,-190,80,0.5,80,0,0,0,"ff5900",-16.5,3.27,-221,3.02,6.5,4.02,0,0,0,"ff5900",-14.4,6.27,-221,1.2,0.5,1,0,0,0,"ff5900",-13.85,3.27,-221,0.3,6.5,1,0,0,0,"ff5900",39,0.55,-186.6,0.4,0.4,0.8,0,-0.79,0,"ff5900",36,0.55,-188.6,0.4,0.4,0.8,0,1.05,0,"ff5900",32,0.55,-182.6,0.4,0.4,0.8,0,-1.57,0,"ff5900",37,0.55,-179.6,0.4,0.4,0.8,0,-0.61,0,"ff5900",42,0.55,-177.6,0.4,0.4,0.8,0,0.26,0,"ff5900",48,0.55,-178.6,0.4,0.4,0.8,0,0.7,0,"ff5900",55,0.55,-180.6,0.4,0.4,0.8,0,2.18,0,"ff5900",52,0.55,-183.6,0.4,0.4,0.8,0,-0.79,0,"ff5900",53,0.55,-186.6,0.4,0.4,0.8,0,0.52,0,"ff5900",47,0.55,-183.6,0.4,0.4,0.8,0,-0.26,0,"ff5900",52,0.55,-176.6,0.4,0.4,1.6,0,0.35,0,"ff5900",57,0.55,-183.6,0.4,0.4,1.6,0,2.62,0,"ff5900",49,0.55,-181.6,0.4,0.4,1.6,0,0,0,"ff5900",51,0.55,-188.6,0.4,0.4,1.6,0,-1.22,0,"ff5900",41,0.55,-174.6,0.4,0.4,1.6,0,-0.09,0,"ff5900",34,0.55,-180.6,0.4,0.4,1.6,0,0.79,0,"ff5900",32,0.55,-188.6,0.4,0.4,1.6,0,-0.26,0,"ff5900",44,0.55,-185.6,0.4,0.4,1.6,0,0.87,0,"ff5900",45.6,1.75,-161.8,3,3,3,0,-1.31,0,"ff5900",41.6,1.75,-159.8,3,3,3,0,-1.83,0,"ff5900",36.6,1.75,-157.8,3,3,3,0,-1.13,0,"ff5900",31.6,1.75,-160.8,3,3,3,0,-2.27,0,"ff5900",36.6,1.75,-163.8,3,3,3,0,-1.57,0,"ff5900",40.6,1.75,-165.8,3,3,3,0,-0.7,0,"ff5900",31.6,1.75,-167.8,3,3,3,0,-0.17,0,"ff5900",33.6,1.75,-171.8,3,3,3,0,0.52,0,"ff5900",38.2,1.75,-172.2,3,3,3,0,-0.61,0,"ff5900",47.6,1.75,-170.8,3,3,3,0,0.17,0,"ff5900",51.5,1.75,-172.7,3,3,3,0,-0.96,0,"ff5900",57,0.5,-175,6.02,0.52,4.52,0,0,0,"ff5900",57,4.5,-169,6.02,0.52,16.52,0,0,0,"ff5900",57,4.5,-161,6.02,8.52,0.52,0,0,0,"ff5900",57,8.5,-169,6.02,0.52,16.52,0,0,0,"ff5900",57,4.5,-165,6.02,8.52,0.52,0,0,0,"ff5900",57,4.5,-169,6.02,8.52,0.52,0,0,0,"ff5900",57,4.5,-173,6.02,8.52,0.52,0,0,0,"ff5900",57,4.5,-177,6.02,8.52,0.52,0,0,0,"ff5900",57,0.5,-165,6.02,0.52,8.52,0,0,0,"ff5900",-3,0.41,-195,8,0.12,9,0,0,0,"ff5900"];
globalThis.cubes = [];
for (var i = 0; i < cubedata.length; i+=10) {
    cubes.push({px:cubedata[i], py:cubedata[i+1], pz:cubedata[i+2], sx:cubedata[i+3], sy:cubedata[i+4], sz:cubedata[i+5],  rx:cubedata[i+6], ry:cubedata[i+7], rz:cubedata[i+8], mat:cubedata[i+9]});
}
for (var i = 0; i < cubes.length; i++) {
    let data = cubes[i];
    let cube = BABYLON.MeshBuilder.CreateBox("cube2" + i, {width: data.sx, height: data.sy, depth: data.sz}, scene);
    cube.position = new BABYLON.Vector3(data.px, data.py, data.pz);
    let material = new BABYLON.StandardMaterial("material" + i, scene);
    material.diffuseColor, "#" + data.mat);
    cube.material = material;
    cube.rotation.x = data.rx;
    cube.rotation.y = -1*data.ry;
    cube.rotation.z = -1*data.rz;
    cube.physicsImpostor = new BABYLON.PhysicsImpostor(cube, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
    if (cube.mat == "ff5900" || cube.mat == "b03e00") {
        killBlocks.push(cube);
    }
    objects.alternate.push(cube);
    cube.isVisible = false;
}
cylinderdata = [-1.5,4,-215.3,3,0.5,3,0,0,0,"9201fe",-16,6.32,-222.5,1.6,0.5,1.6,0,0,0,"f8ffff",-16.1,6.32,-221,1.6,0.5,1.6,0,0,0,"f8ffff",-15.5,6.32,-219.6,1.6,0.5,1.6,-0.05,0,0.03,"f8ffff",-13.85,0,-221,3,0.52,3,0,0,0,"ff5900",48.9,0.55,-186,0.4,1.6,0.4,1.57,-0.87,0,"ff5900",57.9,0.55,-187,0.4,1.6,0.4,1.57,0.17,0,"ff5900",51.9,0.55,-180,0.4,1.6,0.4,1.57,0.79,0,"ff5900",44.9,0.55,-176,0.4,1.6,0.4,1.57,-0.44,0,"ff5900",37.9,0.55,-176,0.4,1.6,0.4,1.57,-2.97,0,"ff5900",31.9,0.55,-178,0.4,1.6,0.4,1.57,-2.01,0,"ff5900",32.9,0.55,-186,0.4,1.6,0.4,1.57,-1.57,0,"ff5900",41.9,0.55,-188,0.4,1.6,0.4,1.57,-2.01,0,"ff5900",-7,0.41,-195,9,0.12,9,0,0,0,"ff5900",1,0.41,-195,9,0.12,9,0,0,0,"ff5900",0,4,-168,9,0.52,9,0,0,0,"ff5900"];
globalThis.cubes = [];
for (var i = 0; i < cylinderdata.length; i+=10) {
    cubes.push({px:cylinderdata[i], py:cylinderdata[i+1], pz:cylinderdata[i+2], sx:cylinderdata[i+3], sy:cylinderdata[i+4], sz:cylinderdata[i+5],  rx:cylinderdata[i+6], ry:cylinderdata[i+7], rz:cylinderdata[i+8], mat:cylinderdata[i+9]});
}
for (var i = 0; i < cubes.length; i++) {
    let data = cubes[i];
    let cylinder = BABYLON.MeshBuilder.CreateCylinder("cube3" + i, {diameterTop: 1, diameterBottom: 1, height: 1}, scene);
    cylinder.position = new BABYLON.Vector3(data.px, data.py, data.pz);
    cylinder.scaling = new BABYLON.Vector3(data.sx, data.sy, data.sz);
    let material = new BABYLON.StandardMaterial("material" + i, scene);
    material.diffuseColor, "#" + data.mat);
    cylinder.material = material;
    cylinder.rotation.x = data.ry;
    cylinder.rotation.y = data.rx;
    cylinder.rotation.z = -1*data.rz;
    cylinder.physicsImpostor = new BABYLON.PhysicsImpostor(cylinder, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 0, friction: 0.6}, scene);
    if (cylinder.mat == "ff5900" || cylinder.mat == "b03e00") {
        killBlocks.push(cylinder);
    }
    objects.alternate.push(cylinder);
    cylinder.isVisible = false;
}*/



/*for (var i = 17; i < scene.meshes.length; i++) {
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#9300f7"))) {
        objects.alternatefinish = scene.meshes[i];
    }
}*/
