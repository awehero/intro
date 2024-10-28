var map = {
    title: "Easy Map",
    song: "env2",
    maker: "awehero54",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 0, -20], [0, 0, 0], [40, 0.5, 60], "1", 0, 0, 0.6, false, false, false, false);
        a.e([0, 0, -20]);
    },
    post: function() {
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0, -20], [0, 0, 0], [40, 0.5, 60]);
        a.re('E0', [0, 0, -20], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
