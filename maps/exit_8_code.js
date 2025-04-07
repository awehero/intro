globalThis.alpha = 0;
globalThis.messageCheck = 0;
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
        } else if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#00000a"))) {
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
    if (scene.meshes[i].material.diffuseColor.equals(BABYLON.Color3.FromHexString("#6f4500"))) {
        if (scene.meshes[i].position.z < -170) {
            objects.door2 = scene.meshes[i];
        } else {
            objects.door1 = scene.meshes[i];
        }
    }
    if (scene.meshes[i].material.diffuseColor.equals(new BABYLON.Color3.FromHexString("#24fc03"))) {
        if (scene.meshes[i].id.substring(0,1) == "E") {
            objects.finish = scene.meshes[i];
        } else {
            objects.fakefinish = scene.meshes[i];
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
        delete globalThis.alpha;
        delete globalThis.messageCheck;
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
    objects.window1.isVisible = true;
    objects.breadby.forEach(obj=>{obj.position.x = 259.6;});
    objects.demon.forEach(obj=>{obj.position.x = -240;});
    objects.drawing.forEach(obj=>{obj.position.y = 104.15;});
    objects.sun.forEach(obj=>{obj.isVisible = true;});
    objects.moon.forEach(obj=>{obj.isVisible = false;});
    objects.pans.forEach(obj=>{obj.position.y = 106.95;});
    objects.water.position.y = 207.25;
    objects.door2.isVisible = true;
}
function test() {
    if (!alive) {
        alpha = 0;
    }
    if (player.position.z < -19 && player.position.z > -20) {
        player.position.x = 0;
        player.position.z = -100;
        console.log(cheese);                                                                        //DELETE THIS LATER
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
        if (localStorage.getItem("beb")) {
            let beb = JSON.parse(localStorage.getItem("beb"));
            Object.entries(beb).forEach(([key, value]) => {
                if (value === 0) {
                    string += "????????????? - Not Discovered!\n";
                } else if (value === 1) {
                    string += key.replace(/_/g, " ") + " - Found 1 time!\n";
                } else {
                    string += key.replace(/_/g, " ") + " - Found " + value + " times!\n";
                }
            });
        } else {
            string = "You have not discovered any anomalies yet!";
        }
        alert(string);
    }
    if (alpha == 8) {
        objects.finish.position.y = 0;
        objects.fakefinish.position.y = 1.5;
    } else {
        objects.finish.position.y = 100;
        objects.fakefinish.position.y = 100;
    }
    switch (current) {
        case 0:
            if (alpha == 9) {
                //alert("Wait, you're still going?\nWell, I guess if you really want to, you can.");
            }
            if (player.position.z < -149) {
                current = 1;
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
                            n = 6;
                            j = Math.random();
                            anomNum = (j - (j%(1/n))) * n;
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
                            }
                        } else if (alpha < 6) {
                            n = 10;
                            j = Math.random();
                            anomNum = (j - (j%(1/n))) * n;
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
                                    break;
                                case 4:
                                    objects.demon.forEach(obj=>{obj.position.x = -40;});
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
                            }
                        } else {
                            n = 5;
                            j = Math.random();
                            anomNum = (j - (j%(1/n))) * n;
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
                                }
                            }
                        } else {
                            beb = {Night:0,Blue_Walls:0,Creepy_Drawing:0,Red_Rug:0,Brown_Rug:0,Moon:0,Missing_Train_Car:0,Pan_on_Stove:0,Cube_Colors_Flipped:0,Door_is_Missing:0,Creepy_Guy_Outside_the_Window:0,Breadby:0,Purple_Fort_Blocks:0,Water_in_Sink:0,Shelves_Color_Changed:0,Train_on_Other_Side_of_the_Track:0,Purple_Train_Engine:0,Red_and_Blue_Train_Cars_are_Flipped:0,Microwave_Missing_Bottom_Button:0,Yellow_Cube_is_Moved:0,Window_Pane_Missing:0};
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
