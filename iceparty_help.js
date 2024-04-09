document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        window.tsTriggers.onWin();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
        player.position.x = player.position.x + (-3 * Math.sin(rotation))
        player.position.z = player.position.z + (-3 * Math.cos(rotation))
    }
});
document.addEventListener('keydown', function(event) {
   let grav = -9;
    if (event.key === '3') {
     	grav = -3;
		applyNewGravity();
    }
	if (event.key === '4') {
     	grav = 0;
		applyNewGravity();
    }
 	if (event.key === '5') {
    	grav = 2;
		applyNewGravity();
    }
	if (event.key === '6') {
     	grav = -9;
		applyNewGravity();
    }
	function applyNewGravity() {
   		scene.gravity = new BABYLON.Vector3(0, grav, 0);
		gravity = scene.gravity;
		scene.getPhysicsEngine().setGravity(scene.gravity);
		player.applyGravity = true;
	}
});
