var map = {
    title: "Test Map V8",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 0.25, -3], [0, -0.05, 0], [4, 0.3, 8], "1dc400", 0, 0, 0, false, false, false, false);
        a.p([0, 0.01, -60], [0, 0, 0], [100, 0.5, 10], "a1a1a1", 0, 0, 0.6, false, true, false, false);
        a.p([0, 0, -30], [0, 0, 0], [4, 0.5, 120], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([-6, 0, -80], [-0.45, 0, 0], [2, 0.5, 22], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1, -60], [0, 0, 0], [4, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([0, -0.25, -80], [0, 0, 0], [1000, 0.5, 320], "18a500", 0, 0, 0.6, false, true, false, false);
        a.e([0, 10, -20]);
    },
    post: function() {
        a.u('P4');
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
        case 4:
            if (PZ < -55) {
                this.section_id += 1
            }
            break;
        case 5:
            a.mov('P4', 'y', -0.1);
            if (PZ < -65) {
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0.25, -3], [0, -0.05, 0], [4, 0.3, 8]);
        a.re('P1', [0, 0.01, -60], [0, 0, 0], [100, 0.5, 10]);
        a.re('P2', [0, 0, -30], [0, 0, 0], [4, 0.5, 120]);
        a.re('P3', [-6, 0, -80], [-0.45, 0, 0], [2, 0.5, 22]);
        a.re('P4', [0, 1, -60], [0, 0, 0], [4, 2, 2]);
        a.re('P5', [0, -0.25, -80], [0, 0, 0], [1000, 0.5, 320]);
        a.re('E0', [0, 10, -20], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {
        if (controls.space) {
            speed = default_speed * 0.7;
        }
        if (controls.down) {
            speed = default_speed * 0;
        }
    }
}
