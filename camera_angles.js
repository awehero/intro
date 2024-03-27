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
                a.cam_cr(2.0);
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -1.24986) {
                a.cam_cr(4.0);
                this.section_id += 1
            }
            break;
        case 3:
            if (PZ < -1.74951) {
                a.cam_cr(6.0);
                this.section_id += 1
            }
            break;
        case 4:
            if (PZ < -2.74951) {
                a.cam_cr(10.0);
                this.section_id += 1
            }
            break;
        case 5:
            if (PZ < -2.24986) {
                a.cam_cr(8.0);
                this.section_id += 1
            }
            break;
        case 6:
            if (PZ < -3.25) {
                a.cam_cr(12.0);
                this.section_id += 1
            }
            break;
        case 7:
            if (PZ < -3.74993) {
                a.cam_cr(14.0);
                this.section_id += 1
            }
            break;
        case 8:
            if (PZ < -4.24986) {
                a.cam_cr(16.0);
                this.section_id += 1
            }
            break;
        case 9:
            if (PZ < -4.74979) {
                a.cam_cr(18.0);
                this.section_id += 1
            }
            break;
        case 10:
            if (PZ < -5.74972) {
                a.cam_cr(22.0);
                this.section_id += 1
            }
            break;
        case 11:
            if (PZ < -5.25) {
                a.cam_cr(20.0);
                this.section_id += 1
            }
            break;
        case 12:
            if (PZ < -6.24965) {
                a.cam_cr(24.0);
                this.section_id += 1
            }
            break;
        case 13:
            if (PZ < -7.24965) {
                a.cam_cr(28.0);
                this.section_id += 1
            }
            break;
        case 14:
            if (PZ < -7.74951) {
                a.cam_cr(30.0);
                this.section_id += 1
            }
            break;
        case 15:
            if (PZ < -6.75) {
                a.cam_cr(26.0);
                this.section_id += 1
            }
            break;
        case 16:
            if (PZ < -8.24993) {
                a.cam_cr(32.0);
                this.section_id += 1
            }
            break;
        case 17:
            if (PZ < -8.74986) {
                a.cam_cr(34.0);
                this.section_id += 1
            }
            break;
        case 18:
            if (PZ < -9.24979) {
                a.cam_cr(36.0);
                this.section_id += 1
            }
            break;
        case 19:
            if (PZ < -9.74972) {
                a.cam_cr(38.0);
                this.section_id += 1
            }
            break;
        case 20:
            if (PZ < -10.24958) {
                a.cam_cr(40.0);
                this.section_id += 1
            }
            break;
        case 21:
            if (PZ < -10.74993) {
                a.cam_cr(42.0);
                this.section_id += 1
            }
            break;
        case 22:
            if (PZ < -11.24951) {
                a.cam_cr(44.0);
                this.section_id += 1
            }
            break;
        case 23:
            if (PZ < -11.74993) {
                a.cam_cr(46.0);
                this.section_id += 1
            }
            break;
        case 24:
            if (PZ < -12.24986) {
                a.cam_cr(48.0);
                this.section_id += 1
            }
            break;
        case 25:
            if (PZ < -12.74979) {
                a.cam_cr(50.0);
                this.section_id += 1
            }
            break;
        case 26:
            if (PZ < -13.24972) {
                a.cam_cr(52.0);
                this.section_id += 1
            }
            break;
        case 27:
            if (PZ < -13.74965) {
                a.cam_cr(54.0);
                this.section_id += 1
            }
            break;
        case 28:
            if (PZ < -14.24958) {
                a.cam_cr(56.0);
                this.section_id += 1
            }
            break;
        case 29:
            if (PZ < -14.74951) {
                a.cam_cr(58.0);
                this.section_id += 1
            }
            break;
        case 30:
            if (PZ < -15.25) {
                a.cam_cr(60.0);
                this.section_id += 1
            }
            break;
        case 31:
            if (PZ < -15.74979) {
                a.cam_cr(62.0);
                this.section_id += 1
            }
            break;
        case 32:
            if (PZ < -16.24972) {
                a.cam_cr(64.0);
                this.section_id += 1
            }
            break;
        case 33:
            if (PZ < -16.74965) {
                a.cam_cr(66.0);
                this.section_id += 1
            }
            break;
        case 34:
            if (PZ < -17.24958) {
                a.cam_cr(68.0);
                this.section_id += 1
            }
            break;
        case 35:
            if (PZ < -17.75) {
                a.cam_cr(70.0);
                this.section_id += 1
            }
            break;
        case 36:
            if (PZ < -18.24993) {
                a.cam_cr(72.0);
                this.section_id += 1
            }
            break;
        case 37:
            if (PZ < -18.74986) {
                a.cam_cr(74.0);
                this.section_id += 1
            }
            break;
        case 38:
            if (PZ < -19.24979) {
                a.cam_cr(76.0);
                this.section_id += 1
            }
            break;
        case 39:
            if (PZ < -19.74972) {
                a.cam_cr(78.0);
                this.section_id += 1
            }
            break;
        case 40:
            if (PZ < -20.24965) {
                a.cam_cr(80.0);
                this.section_id += 1
            }
            break;
        case 41:
            if (PZ < -20.74958) {
                a.cam_cr(82.0);
                this.section_id += 1
            }
            break;
        case 42:
            if (PZ < -21.24951) {
                a.cam_cr(84.0);
                this.section_id += 1
            }
            break;
        case 43:
            if (PZ < -21.75) {
                a.cam_cr(86.0);
                this.section_id += 1
            }
            break;
        case 44:
            if (PZ < -22.24993) {
                a.cam_cr(88.0);
                this.section_id += 1
            }
            break;
        case 45:
            if (PZ < -22.74979) {
                a.cam_cr(90.0);
                this.section_id += 1
            }
            break;
        case 46:
            if (PZ < -23.24972) {
                a.cam_cr(92.0);
                this.section_id += 1
            }
            break;
        case 47:
            if (PZ < -23.74965) {
                a.cam_cr(94.0);
                this.section_id += 1
            }
            break;
        case 48:
            if (PZ < -24.24958) {
                a.cam_cr(96.0);
                this.section_id += 1
            }
            break;
        case 49:
            if (PZ < -24.74951) {
                a.cam_cr(98.0);
                this.section_id += 1
            }
            break;
        case 50:
            if (PZ < -25.24986) {
                a.cam_cr(100.0);
                this.section_id += 1
            }
            break;
        case 51:
            if (PZ < -25.74979) {
                a.cam_cr(102.0);
                this.section_id += 1
            }
            break;
        case 52:
            if (PZ < -26.24972) {
                a.cam_cr(104.0);
                this.section_id += 1
            }
            break;
        case 53:
            if (PZ < -26.74965) {
                a.cam_cr(106.0);
                this.section_id += 1
            }
            break;
        case 54:
            if (PZ < -27.24958) {
                a.cam_cr(108.0);
                this.section_id += 1
            }
            break;
        case 55:
            if (PZ < -27.75) {
                a.cam_cr(110.0);
                this.section_id += 1
            }
            break;
        case 56:
            if (PZ < -28.24993) {
                a.cam_cr(112.0);
                this.section_id += 1
            }
            break;
        case 57:
            if (PZ < -28.74986) {
                a.cam_cr(114.0);
                this.section_id += 1
            }
            break;
        case 58:
            if (PZ < -29.24979) {
                a.cam_cr(116.0);
                this.section_id += 1
            }
            break;
        case 59:
            if (PZ < -29.74972) {
                a.cam_cr(118.0);
                this.section_id += 1
            }
            break;
        case 60:
            if (PZ < -30.24965) {
                a.cam_cr(120.0);
                this.section_id += 1
            }
            break;
        case 61:
            if (PZ < -30.74958) {
                a.cam_cr(122.0);
                this.section_id += 1
            }
            break;
        case 62:
            if (PZ < -31.24951) {
                a.cam_cr(124.0);
                this.section_id += 1
            }
            break;
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
