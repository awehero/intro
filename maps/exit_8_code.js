globalThis.alpha = 0;
globalThis.messageCheck = 0;
let intervalId = setInterval(function() {
    if (!isMapLoaded) {
        clearInterval(intervalId);
    }
    test();
},100);
function test() {
    if (!alive) {
        alpha = 0;
    }
    if ((player.position.z < -19) * (player.position.z > -20)) {
        player.position.x = 0;
        player.position.z = -100;
    }
    if ((player.position.z < -110) * (player.position.z > -130) * (player.position.x < 14)) {
        if (messageCheck = 0) {
            window.tsTriggers[Object.keys(window.tsTriggers)[6]]("Exit " + alpha);
            messageCheck = 1;
        }
    } else {
        if (!((player.position.z < -110) * (player.position.z > -130) * (player.position.x < 14))) {
            if (messageCheck = 1) {
                console.log("remove message");
                messageCheck = 0;
            }
        }
    }
    if ((player.position.z > -10) * (player.position.x > 14)) {
        player.position.x = -500;
        alert("Welcome to exit 8! Your goal is to get to exit 8, but it won’t be easy. When you start at exit 0, you will see a daycare scene. Make sure to study it carefully! The exits after exit 0 will show the same scene, but something might have changed. If you notice a change, return through the door you entered. If not, go through the door at the other end. If you were right, you will progress to the next exit, and if not, you will be sent back to exit 0. Press P at any time to pause.");
    }
}
let data = [   15,9,-140,19.5,18,0.5,1,5,9,-105,30.5,18,0.5,1,10,9,-10,9.5,18,0.5,0,-5,9,-110,40.5,18,0.5,1,15,9,-120,19.5,18,0.5,0,5,9,-130,20.5,18,0.5,0,25,9,-134.75,30,18,0.5,1,35,9,-269.75,20,18,0.5,1,45,9,-264.75,30,18,0.5,1,25,9,-260,20.5,18,0.5,0,35,9,-250,20.5,18,0.5,0,25,9,-240,20.5,18,0.5,1,15,9,-245,30.5,18,0.5,1,5,9,5,10.5,18,0.5,1,15,9,-5,10.5,18,0.5,1,10,9,0,9.5,18,0.5,0,0,9,10,10.5,18,0.5,0,0,9,-90,10.5,18,0.5,0,5,9,-15,10.5,18,0.5,1,-5,9,-5,30.5,18,0.5,1,0,9,-20,10.5,18,0.5,0];
globalThis.cubes = [];
for (var i = data.length - 1; i > 0; i-=7) {
    cubes.push({px:data[i-6],py:data[i-5],pz:data[i-4],sx:data[i-3],sy:data[i-2],sz:data[i-1],ry:data[i]});
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
