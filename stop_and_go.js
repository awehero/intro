var map = {
    title: "Test Map V8",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 1, 0],
    init: function() {
        a.p([0, -0.25, -79.99965], [0, 0, 0], [1000, 0.5, 320], "18a500", 0, 0, 0.6, false, true, false, false);
        a.p([0, 0, -135.99958], [0, 0, 0], [2, 0.5, 10], "1dc400", 0, 0, 0.0, false, false, false, false);
        a.p([0, 0.25, -2.99951], [0, -0.09, 0], [4, 0.3, 8], "1dc400", 0, 0, 0.0, false, false, false, false);
        a.p([0, 0, -116], [0, 0, 0], [4, 0.5, 30], "1dc400", 0, 0, 0.6, true, false, false, false);
        a.p([-8.99, 0, -81.49], [-0.79, 0, 0], [2, 0.5, 22], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -29.99986], [0, 0, 0], [4, 0.5, 120], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([-13.05, 0, -84.51], [-0.37, 0, 0], [1, 0.5, 22], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([-7.37, 0, -92.82], [0.58, 0, 0], [1.5, 0.5, 6], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([-5.91, 0, -93.77], [0, 0, 0], [1.5, 0.5, 6], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([-4.37, 0, -93.77], [0.51, 0, 0], [1.5, 0.5, 6], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([-2.19, 0, -96.46], [-0.17, 0, 0], [1.5, 0.5, 10], "1dc400", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0.01, -60], [0, 0, 0], [4, 0.5, 10], "a1a1a1", 0, 0, 0.6, false, true, false, false);
        a.p([0, 0.01, -158.99993], [0, 0, 0], [4, 0.5, 4], "a1a1a1", 0, 0, 0.6, false, false, false, false);
        a.p([0, 1, -59.99986], [0, 0, 0], [4, 2, 2], "ff0000", 999999.0, 0, 0.6, false, false, false, false);
        a.p([0, 3, -109.99979], [0, 0, 0], [4, 6, 1], "ff0000,0.5", 999999.0, 0, 0.6, false, false, false, false);
        a.p([0, 6, -112.99972], [0, 0, 0], [4, 6, 1], "ff0000,0.5", 999999.0, 0, 0.6, false, false, false, false);
        a.e([0, 15.02, -195.28]);
    },
    post: function() {
        a.u('P1');
        a.u('P13');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#ffffff"));
        cc.set_monkey("cameraDownAngle", 90 * Math.PI / 180);
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
            if (PZ < -10) {
                a.msg_set("Press the down arrow to stop!");
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -54.99979) {
                this.section_id += 1
            }
            break;
        case 3:
            a.mov('P13', 'y', -0.1);
            if (PZ < -64.99978999999999) {
                this.section_id += 1
            }
            break;
        case 4:
            if (PZ < -100.99986) {
                a.cam_cr(90.0);
                a.jh(1.5);
                steer = default_steer * 0.0;
                rotation = 0.0 * Math.PI / 180;
                this.section_id += 1
            }
            break;
        case 5:
            if (PZ < -120.99986) {
                a.cam_cr(null);
                a.jh(null);
                steer = cc.get("steer", null);
                this.section_id += 1
            }
            break;
        case 6:
            if (PZ < -132.5) {
                this.section_id += 1
            }
            break;
        case 7:
            a.rot('P1', 'x', 10.0);
            if (PZ < -141) {
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, -0.25, -79.99965], [0, 0, 0], [1000, 0.5, 320]);
        a.re('P1', [0, 0, -135.99958], [0, 0, 0], [2, 0.5, 10]);
        a.re('P2', [0, 0.25, -2.99951], [0, -0.09, 0], [4, 0.3, 8]);
        a.re('P3', [0, 0, -116], [0, 0, 0], [4, 0.5, 30]);
        a.re('P4', [-8.99, 0, -81.49], [-0.79, 0, 0], [2, 0.5, 22]);
        a.re('P5', [0, 0, -29.99986], [0, 0, 0], [4, 0.5, 120]);
        a.re('P6', [-13.05, 0, -84.51], [-0.37, 0, 0], [1, 0.5, 22]);
        a.re('P7', [-7.37, 0, -92.82], [0.58, 0, 0], [1.5, 0.5, 6]);
        a.re('P8', [-5.91, 0, -93.77], [0, 0, 0], [1.5, 0.5, 6]);
        a.re('P9', [-4.37, 0, -93.77], [0.51, 0, 0], [1.5, 0.5, 6]);
        a.re('P10', [-2.19, 0, -96.46], [-0.17, 0, 0], [1.5, 0.5, 10]);
        a.re('P11', [0, 0.01, -60], [0, 0, 0], [4, 0.5, 10]);
        a.re('P12', [0, 0.01, -158.99993], [0, 0, 0], [4, 0.5, 4]);
        a.re('P13', [0, 1, -59.99986], [0, 0, 0], [4, 2, 2]);
        a.re('P14', [0, 3, -109.99979], [0, 0, 0], [4, 6, 1]);
        a.re('P15', [0, 6, -112.99972], [0, 0, 0], [4, 6, 1]);
        a.re('E0', [0, 15.02, -195.28], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {
        if (controls.space) {
            speed = default_speed * 0.7;
        }
        if (controls.down) {
            speed = default_speed * 0;
        }}
}
