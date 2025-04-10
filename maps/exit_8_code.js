globalThis.alpha = 0;
globalThis.messageCheck = 0;
globalThis.alertCheck = 0;
globalThis.current = 0;
globalThis.anom = 0;
globalThis.guess = 0;
globalThis.anomNum = 0;
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

for (var i = 17; i < scene.meshes.length; i++) {
    if (scene.meshes[i].position.z < -152 && scene.meshes[i].position.z > -190 && scene.meshes[i].position.x < 58 && scene.meshes[i].position.x > 30) {
        if (scene.meshes[i].position.z < -179 && scene.meshes[i].position.z > -184 && scene.meshes[i].position.x < 46 && scene.meshes[i].position.x > 39) {
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
            } else {
                objects.shelf.thecursedcrayon = scene.meshes[i];
            }
        }
    }
    if (scene.meshes[i].position.z < -155 && scene.meshes[i].position.z > -177 && scene.meshes[i].position.x < 10 && scene.meshes[i].position.x > -13) {
        if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#f97c00"))) {
            if (Math.round(scene.meshes[i].position.y*100)/100 == 2) {
                objects.table.legs.push(scene.meshes[i]);
            } else if (Math.round(scene.meshes[i].position.y*100)/100 == 3) {
                objects.table.seattops.push(scene.meshes[i]);
            } else if (Math.round(scene.meshes[i].position.y*100)/100 == 1.3) {
                objects.table.seatbottoms.push(scene.meshes[i]);
            } else {
                objects.table.table = scene.meshes[i];
            }
        } else {
            objects.drawing.push(scene.meshes[i]);
        }
    }
    if (scene.meshes[i].position.z < -187 && scene.meshes[i].position.z > -203 && scene.meshes[i].position.x < 7 && scene.meshes[i].position.x > -13) {
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
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#000000"))) {
            if (scene.meshes[i].position.x < -3.4) {
                objects.train.car3wheels.push(scene.meshes[i]);
            } else if (scene.meshes[i].position.x < -2.2) {
                objects.train.car2wheels.push(scene.meshes[i]);
            } else if (scene.meshes[i].position.x < -0.9) {
                objects.train.car1wheels.push(scene.meshes[i]);
            } else {
                objects.train.enginewheels.push(scene.meshes[i]);
            }
        }
    }
    if (scene.meshes[i].position.z < -212 && scene.meshes[i].position.z > -229.85 && scene.meshes[i].position.x < -1 && scene.meshes[i].position.x > -19.85) {
        if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#fbffff"))) {
            objects.kitchen.structure.push(scene.meshes[i]);
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#b0b0b0"))) {
            if (scene.meshes[i].position.y > 8.15) {
                objects.kitchen.microwave.row1.push(scene.meshes[i]);
            } else if (scene.meshes[i].position.y > 7.85) {
                objects.kitchen.microwave.row2.push(scene.meshes[i]);
            } else if (scene.meshes[i].position.y > 7.55) {
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
    if (scene.meshes[i].position.x > 250) {
        objects.breadby.push(scene.meshes[i]);
    }
    if (scene.meshes[i].position.x < -230) {
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
        if (scene.meshes[i].position.z < -170) {
            objects.door2 = scene.meshes[i];
        } else {
            objects.door1 = scene.meshes[i];
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#e6c313"))) {
        if (scene.meshes[i].position.z < -170) {
            objects.doorknob2 = scene.meshes[i];
        } else {
            objects.doorknob1 = scene.meshes[i];
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(new BABYLON.Color3.FromHexString("#24fc03"))) {
        if (scene.meshes[i].id.substring(0,1) == "E") {
            objects.finish = scene.meshes[i];
        } else {
            objects.fakefinish = scene.meshes[i];
        }
    }
    if (Math.round(scene.meshes[i].position.x*100) == 6000 || Math.round(scene.meshes[i].position.x*100) == -2000) {
        if (scene.meshes[i].material.diffuseColor.equals(new BABYLON.Color3.FromHexString("#000000"))) {
            objects.windowframes.push(scene.meshes[i]);
        }
    }
}
let intervalId = setInterval(function() {
    if (!isMapLoaded) {
        for (var i = scene.meshes.length-1; i > 0; i--) {
            if (scene.meshes[i].id.substring(0,4) == "cube") {
                scene.removeMesh(scene.meshes[i]);
            }
        }
        canvas.style.filter = "none";
        delete globalThis.alpha;
        delete globalThis.messageCheck;
        delete globalThis.alertCheck;
        delete globalThis.current;
        delete globalThis.anom;
        delete globalThis.anomNum;
        delete globalThis.guess;
        delete globalThis.cubes;
        delete globalThis.objects;
        clearInterval(intervalId);
    }
    test();
},100);
function resetObjects() {
    scene.clearColor = new BABYLON.Color3.FromHexString("#717aff");

    objects.shelf.yellowinnercube.position.x = 44;
    objects.shelf.yellowinnercube.position.z = -168;
    objects.shelf.yellowoutercube.position.x = 44;
    objects.shelf.yellowoutercube.position.z = -168;
    
    objects.shelf.pinkoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#ff00ff");
    objects.shelf.redinnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#c30000");
    objects.shelf.redoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#ff0000");
    objects.shelf.orangeoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#fc7f00");
    objects.shelf.yellowinnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#c2c200");
    objects.shelf.yellowoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#ffff00");
    objects.shelf.greeninnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#00b800");
    objects.shelf.greenoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#00ff00");
    objects.shelf.cyanoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#00ffff");
    objects.shelf.blueinnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#0000bf");
    objects.shelf.blueoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#0000ff");
    objects.shelf.purpleoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#9e00ff");

    objects.shelf.blocks.forEach(obj=>{obj.position.y = 0.55;});
    objects.shelf.shelves.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#ffffff");});
    objects.shelf.rug.material.diffuseColor = new BABYLON.Color3.FromHexString("#00479c");

    objects.fort.blueblocks.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#001dd1");});

    objects.kitchen.microwave.row4.position.y = 7.4;
    
    objects.train.car1.material.diffuseColor = new BABYLON.Color3.FromHexString("#ff0000");
    objects.train.car1.position.y = 0.95165;
    
    objects.train.car2.material.diffuseColor = new BABYLON.Color3.FromHexString("#ffff00");
    objects.train.car2.position.y = 0.95165;
    
    objects.train.car3.material.diffuseColor = new BABYLON.Color3.FromHexString("#0000ff");
    objects.train.car3.position.y = 0.95165;
    objects.train.car3wheels.forEach(obj=>{obj.position.y = 0.58765;});

    objects.train.car1.position.z = -199.75;
    objects.train.car2.position.z = -199.75;
    objects.train.car3.position.z = -199.75;
    objects.train.car1wheels.forEach(obj=>{obj.position.z = -199.75});
    objects.train.car2wheels.forEach(obj=>{obj.position.z = -199.75});
    objects.train.car3wheels.forEach(obj=>{obj.position.z = -199.75});
    objects.train.engine.forEach(obj=>{obj.position.z = -199.75});
    objects.train.enginewheels.forEach(obj=>{obj.position.z = -199.75});

    objects.train.engine.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#00a2ff");});

    objects.train.rugs.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#00df03");});
    
    objects.walls.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#b3ffab");});
    objects.windowframes.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#000000");});
    objects.window1.isVisible = true;
    objects.breadby.forEach(obj=>{obj.position.x = 259.6;});
    objects.demon.forEach(obj=>{obj.position.x = -40;});
    objects.demon.forEach(obj=>{obj.isVisible = false;});
    objects.drawing.forEach(obj=>{obj.position.y = 104.15;});
    objects.sun.forEach(obj=>{obj.isVisible = true;});
    objects.moon.forEach(obj=>{obj.isVisible = false;});
    objects.pans.forEach(obj=>{obj.position.y = 106.95;});
    objects.water.position.y = 207.25;
    objects.doorknob2.position.x = 23;
    objects.doorknob2.isVisible = true;
    objects.door2.isVisible = true;
    objects.fort.greenblock.isVisible = true;

    objects.shelf.thecursedcrayon.position.x = 56;
    objects.shelf.thecursedcrayon.position.y = 0.84;
    objects.shelf.thecursedcrayon.position.z = -170.8;

    objects.shelf.blocks[0].isVisible = true;
    objects.shelf.blocks[1].isVisible = true;
    objects.shelf.blocks[2].isVisible = true;
    objects.shelf.blocks[3].isVisible = true;
    objects.shelf.blocks.forEach(obj=>{obj.isVisible = true;});

    objects.table.legs.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#f97c00");});

    objects.table.seattops.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#f97c00");});
    objects.table.seatbottoms.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#f97c00");});

    objects.floor.material.diffuseColor = new BABYLON.Color3.FromHexString("#f2d79e");
}
function test() {
    if (!alive) {
        alpha = 0;
        canvas.style.filter = "none";
    }
    if (player.position.z < -19 && player.position.z > -20) {
        player.position.x = 0;
        player.position.z = -100;
        console.log(cheese);
    }
    if (player.position.z < -110 && player.position.z > -130 && player.position.x < 13) {
        if (messageCheck == 0) {
            window.tsTriggers[Object.keys(window.tsTriggers)[6]]("Exit " + alpha);
            messageCheck = 1;
        }
    } else {
        if (!(player.position.z < -110 && player.position.z > -130 && player.position.x < 13)) {
            if (messageCheck == 1) {
                window.tsTriggers[Object.keys(window.tsTriggers)[7]]();
                messageCheck = 0;
            }
        }
    }
    if (player.position.z > -10 && player.position.x > 14 && player.position.x < 16) {
        player.position.x = -500;
        alert("Welcome to exit 8! Your goal is to get to exit 8, but it won’t be easy. When you start at exit 0, you will see a daycare scene. Make sure to study it carefully! The exits after exit 0 will show the same scene, but something might have changed. If you notice a change, return through the door you entered. If not, go through the door at the other end. If you were right, you will progress to the next exit, and if not, you will be sent back to exit 0. Press P at any time to pause.");
    }
    if (player.position.z > -10 && player.position.x < -14 && player.position.x > -16) {
        player.position.x = -500;
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
    if (alpha == 9 || alpha > 19) {
        objects.finish.position.y = 0;
        objects.fakefinish.position.y = 1.5;
    } else {
        objects.finish.position.y = 100;
        objects.fakefinish.position.y = 100;
    }
    switch (current) {
        case 0:
            if (alertCheck == 0) {
                if (alpha == 10) {
                    alert("Wait, you're still going?\nWell, I guess if you really want to, you can, but there's nothing else.");
                    alertCheck = 1;
                }
                if (alpha == 11) {
                    alert("You realize there's no point continuing, right?");
                    alertCheck = 1;
                }
                if (alpha == 12) {
                    alert("Just restart already, there's nothing more.");
                    alertCheck = 1;
                }
                if (alpha == 13) {
                    alert("Like seriously, there's nothing else!");
                    alertCheck = 1;
                }
                if (alpha == 14) {
                    alert("Please, just restart the level!");
                    alertCheck = 1;
                }
                if (alpha == 15) {
                    alert("You think there's something else, don't you?");
                    alertCheck = 1;
                }
                if (alpha == 16) {
                    alert("Try playing like this then!");
                    canvas.style.filter = "blur(5px)";
                    alertCheck = 1;
                }
                if (alpha == 18) {
                    alert("Still not bored? How about this?");
                    canvas.style.filter = "blur(10px)";
                    alertCheck = 1;
                }
                if (alpha == 19) {
                    alert("Ok, fine I'll give you the finish.");
                    canvas.style.filter = "grayscale(1)";
                    alertCheck = 1;
                }
                if (alpha == 21) {
                    alert("Why?");
                    change_state.die("Wow, you still didn't give in. Ok, I think you've earned the knowledge of the lore. https://youtube.com/youtubelinkhere");
                    alertCheck = 1;
                }
            }
            if (player.position.z < -149) {
                current = 1;
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
                        if (alpha < 3) {
                            n = 8;
                            j = Math.random();
                            anomNum = (j - (j%(1/n))) * n;
                            anomNum = Math.round(anomNum);
                            switch (anomNum) {
                                case 0:
                                    scene.clearColor = new BABYLON.Color3.FromHexString("#0b003e");
                                    break;
                                case 1:
                                    objects.walls.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#abf7ff");});
                                    break;
                                case 2:
                                    objects.drawing.forEach(obj=>{obj.position.y = 4.15;});
                                    break;
                                case 3:
                                    objects.train.rugs.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#df0000");});
                                    break;
                                case 4:
                                    objects.shelf.rug.material.diffuseColor = new BABYLON.Color3.FromHexString("#9c6600");
                                    break;
                                case 5:
                                    objects.sun.forEach(obj=>{obj.isVisible = false;});
                                    objects.moon.forEach(obj=>{obj.isVisible = true;});
                                    break;
                                case 6:
                                    objects.table.seattops.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#fcc300");});
                                    objects.table.seatbottoms.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#fcc300");});
                                    break;
                                case 7:
                                    objects.floor.material.diffuseColor = new BABYLON.Color3.FromHexString("#dedede");
                                    break;
                            }
                        } else if (alpha < 6) {
                            n = 13;
                            j = Math.random();
                            anomNum = (j - (j%(1/n))) * n;
                            anomNum = Math.round(anomNum);
                            switch (anomNum) {
                                case 0:
                                    objects.train.car3.position.y = 1000;
                                    objects.train.car3wheels.forEach(obj=>{obj.position.y = 1000;});
                                    break;
                                case 1:
                                    objects.pans.forEach(obj=>{obj.position.y = 6.95;});
                                    break;
                                case 2:
                                    objects.shelf.pinkoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#9e00ff");
                                    objects.shelf.redinnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#0000bf");
                                    objects.shelf.redoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#0000ff");
                                    objects.shelf.orangeoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#00ffff");
                                    objects.shelf.yellowinnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#00b800");
                                    objects.shelf.yellowoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#00ff00");
                                    objects.shelf.greeninnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#c2c200");
                                    objects.shelf.greenoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#ffff00");
                                    objects.shelf.cyanoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#fc7f00");
                                    objects.shelf.blueinnercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#c30000");
                                    objects.shelf.blueoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#ff0000");
                                    objects.shelf.purpleoutercube.material.diffuseColor = new BABYLON.Color3.FromHexString("#ff00ff");
                                    break;
                                case 3:
                                    objects.door2.isVisible = false;
                                    objects.doorknob2.isVisible = false;
                                    break;
                                case 4:
                                    objects.demon.forEach(obj=>{obj.isVisible = true;});
                                    break;
                                case 5:
                                    objects.breadby.forEach(obj=>{obj.position.x = 59.6;});
                                    break;
                                case 6:
                                    objects.fort.blueblocks.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#7f00d1");});
                                    break;
                                case 7:
                                    objects.water.position.y = 7.25;
                                    break;
                                case 8:
                                    objects.shelf.shelves.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#ffdb97");});
                                    break;
                                case 9:
                                    objects.train.car1.position.z = -190.25;
                                    objects.train.car2.position.z = -190.25;
                                    objects.train.car3.position.z = -190.25;
                                    objects.train.car1wheels.forEach(obj=>{obj.position.z = -190.25});
                                    objects.train.car2wheels.forEach(obj=>{obj.position.z = -190.25});
                                    objects.train.car3wheels.forEach(obj=>{obj.position.z = -190.25});
                                    objects.train.engine.forEach(obj=>{obj.position.z = -190.25});
                                    objects.train.enginewheels.forEach(obj=>{obj.position.z = -190.25});
                                    break;
                                case 10:
                                    objects.shelf.thecursedcrayon.position.x = 50;
                                    objects.shelf.thecursedcrayon.position.y = 0.35;
                                    objects.shelf.thecursedcrayon.position.z = -202.8;
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
                                    objects.train.engine.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#9300ff");});
                                    break;
                                case 1:
                                    objects.train.car1.material.diffuseColor = new BABYLON.Color3.FromHexString("#0000ff");
                                    objects.train.car3.material.diffuseColor = new BABYLON.Color3.FromHexString("#ff0000");
                                    break;
                                case 2:
                                    objects.kitchen.microwave.row4.position.y = 1000;
                                    break;
                                case 3:
                                    objects.shelf.yellowinnercube.position.x = 38;
                                    objects.shelf.yellowinnercube.position.z = -170;
                                    objects.shelf.yellowoutercube.position.x = 38;
                                    objects.shelf.yellowoutercube.position.z = -170;
                                    break;
                                case 4:
                                    objects.window1.isVisible = false;
                                    break;
                                case 5:
                                    objects.doorknob2.position.x = 17;
                                    break;
                                case 6:
                                    objects.shelf.blocks[0].isVisible = false;
                                    objects.shelf.blocks[1].isVisible = false;
                                    objects.shelf.blocks[2].isVisible = false;
                                    objects.shelf.blocks[3].isVisible = false;
                                    break;
                                case 7:
                                    objects.table.legs.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#b65b00");});
                                    break;
                                case 8:
                                    objects.windowframes.forEach(obj=>{obj.material.diffuseColor = new BABYLON.Color3.FromHexString("#393939");});
                                    break;
                            }
                        }
                    }
                }
            }
            break;
        case 1:
            if (player.position.z > -130 && player.position.x < 12) {
                guess = 0;
                current = 2;
            }
            if (player.position.z < -250 && player.position.x > 28) {
                guess = 1;
                current = 2;
            }
            break;
        case 2:
            if (guess == anom) {
                if (player.position.z < -50) {
                    if (guess == 0) {
                        rotation += Math.PI;
                        player.position.z = player.position.z + 30;
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
                            Breadby: 0,
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
                        if (alpha < 3) {
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
                        } else if (alpha < 6) {
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
                                    beb.Breadby = beb.Breadby + 1;
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
                        player.position.z = player.position.z + 160;
                    }
                    player.position.x = -12;
                    alpha++;
                    current = 0;
                }
            } else {
                if (player.position.z < -50) {
                    if (guess == 0) {
                        rotation += Math.PI;
                        player.position.z = player.position.z + 30;
                    } else {
                        player.position.z = player.position.z + 160;
                    }
                    player.position.x = -12;
                    alpha = 0;
                    current = 0;
                }
            }
            break;
    }
}
let data = [15,9,-140.25,20,18,0.5,1,5,9,-105,30.5,18,0.5,1,10,9,-10,9.5,18,0.5,0,-5,9,-115,30.5,18,0.5,1,15,9,-120,19.5,18,0.5,0,5,9,-130,20.5,18,0.5,0,25,9,-135,30.5,18,0.5,1,35,9,-269.75,20,18,0.5,1,45,9,-264.75,30,18,0.5,1,25,9,-260,20.5,18,0.5,0,35,9,-250,20.5,18,0.5,0,25,9,-240,20.5,18,0.5,1,15,9,-245,30.5,18,0.5,1,5,9,5,10.5,18,0.5,1,15,9,-5,10.5,18,0.5,1,10,9,0,9.5,18,0.5,0,0,9,10,10.5,18,0.5,0,-10,9,-90,30.5,18,0.5,0,5,9,-15,10.5,18,0.5,1,-5,9,5,10.5,18,0.5,1,0,9,-20,10.5,18,0.5,0,-15,9,-100,20.5,18,0.5,0,-25,9,-95,10.5,18,0.5,1,-10,9,-10,9.5,18,0.5,0,-10,9,0,9.5,18,0.5,0,-15,9,-5,10.5,18,0.5,1,-5,9,-15,10.5,18,0.5,1];
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
    let texture = new BABYLON.Texture("https://awehero.github.io/intro/images/tiles.jpg", scene);
    texture.uScale = data.sx / 4;
    texture.vScale = data.sy / 4;
    material.diffuseTexture = texture;
    cube.material = material;
}
