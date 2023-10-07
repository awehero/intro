var map = {
    title: "Testing",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 3, -30], [0, 0, 0], [2, 2, 2], "1", 0, 1, 0.6, false, false, false, false);
        a.p([0, 0, -20], [0, 0, 0], [100, 0.5, 40], "1", 0, 0, 0.6, false, false, false, false);
        a.e([10, 10, -20]);
    },
    post: function() {
        a.u('P0');
        a.u('E0');
        cc.set_monkey("gravity", new BABYLON.Vector3(null,-1.8,null));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("cameraDownAngle", 90.0 * Math.PI / 180);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PX = player.position.x;
        switch (this.section_id) {
        case 0:
            if (PX < -10) {
                scene.clearColor = new BABYLON.Color3.FromHexString("#ff0000");
                this.section_id += 1
            }
            break;
        case 1:
            if (PX < -20) {
                scene.clearColor = cc.get("scene.clearColor", null);
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 3, -30], [0, 0, 0], [2, 2, 2]);
        a.re('P1', [0, 0, -20], [0, 0, 0], [100, 0.5, 40]);
        a.re('E0', [0, 1, -20], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
   render_update: function() {
        if (controls.left) {
            scene.clearColor = new BABYLON.Color3.FromHexString("#0000ff");
        }
        if (controls.right) {
            scene.clearColor = new BABYLON.Color3.FromHexString("#ff00ff");
        }
    }
}
