var map = {
    title: "Test Map V8",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 0, -20], [0, 0, 0], [6, 0.5, 100], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0.25, -3], [0, -0.05, 0], [6, 0.3, 8], "1dc400", 0, 0, 0, false, false, false, false);
        a.p([0, -0.25, -20], [0, 0, 0], [100, 0.5, 100], "18a500", 0, 0, 0.6, false, true, false, false);
        a.e([0, 10, -20]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#ffffff"));
        cc.set_monkey("speed", default_speed * 0);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < -5) {
                a.msg_set("Press space to start!");
                this.section_id += 1
            }
            break;
        case 1:
            if (PZ < -15) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -10) {
                a.msg_set("Press the down arrow to stop!");
                this.section_id += 1
            }
            break;
        case 3:
            if (PZ < -30) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0, -20], [0, 0, 0], [6, 0.5, 100]);
        a.re('P1', [0, 0.25, -3], [0, -0.05, 0], [6, 0.3, 8]);
        a.re('P2', [0, -0.25, -20], [0, 0, 0], [100, 0.5, 100]);
        a.re('E0', [0, 10, -20], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {
        if (controls.space) {
            speed = default_speed * 1;
        }
        if (controls.down) {
            speed = default_speed * 0;
        }
    }
}
