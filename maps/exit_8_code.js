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
objects.other = [];
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
            } else {
                objects.shelf.rug = scene.meshes[i];
            }
        }
    }
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
    
}
function test() {
    if (!alive) {
        alpha = 0;
    }
    if (player.position.z < -19 && player.position.z > -20) {
        player.position.x = 0;
        player.position.z = -100;
        console.log(cheese);
    }
    if (player.position.z < -110 && player.position.z > -130 && player.position.x < 14) {
        if (messageCheck == 0) {
            window.tsTriggers[Object.keys(window.tsTriggers)[6]]("Exit " + alpha);
            messageCheck = 1;
        }
    } else {
        if (!(player.position.z < -110 && player.position.z > -130 && player.position.x < 14)) {
            if (messageCheck == 1) {
                window.tsTriggers[Object.keys(window.tsTriggers)[7]]();
                messageCheck = 0;
            }
        }
    }
    if (player.position.z > -10 && player.position.x > 14) {
        player.position.x = -500;
        alert("Welcome to exit 8! Your goal is to get to exit 8, but it won’t be easy. When you start at exit 0, you will see a daycare scene. Make sure to study it carefully! The exits after exit 0 will show the same scene, but something might have changed. If you notice a change, return through the door you entered. If not, go through the door at the other end. If you were right, you will progress to the next exit, and if not, you will be sent back to exit 0. Press P at any time to pause.");
    }
    switch (current) {
        case 0:
            if (player.position.z < -150) {
                current = 1;
                if (alpha == 0) {
                    anom = 0;
                } else {
                    anom = Math.round(Math.random());
                }
                resetObjects();
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
                if (guess == 0) {
                    rotation += Math.PI;
                    player.position.z = player.position.z + 30;
                } else {
                    player.position.z = player.position.z + 160;
                }
                player.position.x = -12;
                alpha++;
                current = 0;
            } else {
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
            break;
    }
}
let data = [15,9,-140,19.5,18,0.5,1,5,9,-105,30.5,18,0.5,1,10,9,-10,9.5,18,0.5,0,-5,9,-115,30.5,18,0.5,1,15,9,-120,19.5,18,0.5,0,5,9,-130,20.5,18,0.5,0,25,9,-134.75,30,18,0.5,1,35,9,-269.75,20,18,0.5,1,45,9,-264.75,30,18,0.5,1,25,9,-260,20.5,18,0.5,0,35,9,-250,20.5,18,0.5,0,25,9,-240,20.5,18,0.5,1,15,9,-245,30.5,18,0.5,1,5,9,5,10.5,18,0.5,1,15,9,-5,10.5,18,0.5,1,10,9,0,9.5,18,0.5,0,0,9,10,10.5,18,0.5,0,-10,9,-90,30.5,18,0.5,0,5,9,-15,10.5,18,0.5,1,-5,9,-5,30.5,18,0.5,1,0,9,-20,10.5,18,0.5,0,-15,9,-100,20.5,18,0.5,0,-25,9,-95,10.5,18,0.5,1];
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
