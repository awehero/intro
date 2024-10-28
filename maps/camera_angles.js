var map = {
    title: "Test Map V8",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00007, 0.00007, -19.99993], [0, 0, 0], [20, 0.5, 40], "1", 0, 0, 0.6, false, false, false, false);
        a.p([-0.19986, 1.29014, -9.99986], [-0.73, 0.13, -0.17], [2, 2, 6], "1", 0, 0, 0.6, false, false, false, false);
        a.p([-1.99979, 0.30021, -6.06979], [0, 0.44, 0], [2, 2, 6], "1", 0, 0, 0.6, false, false, false, false);
        a.e([0.00028, 0.00028, -39.99972]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 0.5);
        cc.set_monkey("steer", default_steer * 1.25);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < -0.24992999999999999) {
                a.cam_cr(0.0);
                this.section_id += 1
            }
            break;
        case 1:
            if (PZ < -0.74958) {
                for (let spin = 0; spin < 3600; spin++) {
                    setTimeout(function() {
                        a.cam_cr(spin/10);
                    }, 100);
                }
                this.section_id += 1
            }
        case 63:
            if (PZ < -31.74951) {
                a.cam_cr(null);
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00007, 0.00007, -19.99993], [0, 0, 0], [20, 0.5, 40]);
        a.re('P1', [-0.19986, 1.29014, -9.99986], [-0.73, 0.13, -0.17], [2, 2, 6]);
        a.re('P2', [-1.99979, 0.30021, -6.06979], [0, 0.44, 0], [2, 2, 6]);
        a.re('E0', [0.00028, 0.00028, -39.99972], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
