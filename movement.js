var map = {
    title: "Movement",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 0, -20], [0, 0, 0], [100, 0.5, 100], Math.floor(Math.random()*10), 0, 0, 0.6, false, false, false, false);
        a.e([0, 10, -20]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3(0.5, 0.5, 0.5));
        cc.set_monkey("speed", default_speed * 0);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0, -20], [0, 0, 0], [100, 0.5, 100]);
        a.re('E0', [0, 10, -20], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {
        if (controls.space) {
            speed = default_speed * Math.random() * 2;
        }
        if (controls.down) {
            speed = default_speed * 0;
        }
    }
}
