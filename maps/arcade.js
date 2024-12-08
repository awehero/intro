var map = {
    compilerVersion: 9,
    title: "Test Map V9",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        //Code
        globalThis.elementCheck;
        globalThis.tickets = 0;
        globalThis.currentGame = "main";
        globalThis.games = [0,0];
        globalThis.sliderdir = 1;
        globalThis.sliderspeed = 0.25;
        globalThis.xcatch = 0;
        globalThis.powercatch = 0;
        globalThis.firstjump = true;
        globalThis.secondjump = false;
        globalThis.currentBall = 0;
        globalThis.activeBall = 1;
        globalThis.bestElement = document.getElementById("overlayBestTime"); //Replace with document.getElementById("hudBest");
        if (typeof ticketElement === 'undefined') {
            let parentElement = document.getElementById("overlay");
            //Ticket Element
            globalThis.ticketElement = document.createElement("div");
            ticketElement.style.visibility = "visible";
            ticketElement.style.bottom = "124px";
            ticketElement.setAttribute("data-v-31fa11aa", ""); //Replace with "data-v-6e4630ee", ""
            ticketElement.id = "ticketElement";
            ticketElement.classList.add("textLarge", "overlayTime"); //Replace with "textLarge", "hudTimeAndBest"
            ticketElement.textContent = "Tickets: " + 0;
            parentElement.appendChild(ticketElement);
            //Attempts Left Element
            globalThis.attemptsElement = document.createElement("div");
            attemptsElement.style.visibility = "hidden";
            attemptsElement.style.bottom = "168px";
            attemptsElement.setAttribute("data-v-31fa11aa", ""); //Replace with "data-v-6e4630ee", ""
            attemptsElement.id = "attemptsElement";
            attemptsElement.classList.add("textLarge", "overlayTime"); //Replace with "textLarge", "hudTimeAndBest"
            attemptsElement.textContent = "";
            parentElement.appendChild(attemptsElement);
        } else {
            let parentElement = document.getElementById("overlay");
            parentElement.appendChild(ticketElement);
            parentElement.appendChild(attemptsElement);
        }
        //Main
        a.p([29.98014, 4.00014, -16.99986], [0, 0, 0], [1, 8, 8], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-29.97979, 4.00021, -16.99979], [0, 0, 0], [1, 8, 8], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-783.99972, 1.50028, -81.96972], [0, 0, 0], [8, 3, 1], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-796.99965, 1.50035, -81.96965], [0, 0, 0], [8, 3, 1], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-809.99958, 1.50042, -81.96958], [0, 0, 0], [8, 3, 1], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-822.99951, 1.50049, -81.96951], [0, 0, 0], [8, 3, 1], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-836, 1.5, -81.97], [0, 0, 0], [8, 3, 1], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-788.37993, 4.93007, -81.96993], [0, 0, 3.14], [0.5, 2.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-787.46986, 4.93014, -81.96986], [0, 0, 3.14], [0.5, 2.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-786.55979, 4.30021, -81.96979], [0, 0, 0], [0.5, 1.2, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-784.36972, 4.40028, -81.96972], [0, -1.57, 3.14], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-783.87965, 5.38035, -81.96965], [0, 0, 3.14], [0.5, 1.6, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-782.54958, 5.02042, -81.96958], [0, 0, 0], [1.5, 0.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-783.05951, 4.30049, -81.96951], [0, 0, 0], [0.5, 1.2, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-782.06, 4.3, -81.97], [0, 0, 0], [0.5, 1.2, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-781.05993, 4.30007, -81.96993], [0, 0, 0], [0.5, 1.2, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-781.07986, 5.32014, -81.96986], [0, -1.57, 0], [0.5, 1, 0.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.y([-779.85979, 5.48021, -81.96979], [0, -1.57, 0], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-779.38972, 4.50028, -81.96972], [0, 0, 0], [0.5, 1.6, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-802.78965, 4.93035, -81.96965], [0, 0, 3.14], [0.5, 2.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-801.87958, 4.93042, -81.96958], [0, 0, 3.14], [0.5, 2.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-785.96951, 4.40049, -81.96951], [0, -1.57, 3.14], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-800.97, 4.3, -81.97], [0, 0, 0], [0.5, 1.2, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-800.37993, 4.40007, -81.96993], [0, -1.57, 3.14], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-795.30986, 4.47014, -81.92986], [0, 0, 0], [1, 0.26, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-798.28979, 5.38021, -81.96979], [0, 0, 3.14], [0.5, 1.6, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-793.76972, 4.99028, -81.96972], [0, 0, 0.85], [0.5, 1, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-793.69965, 4.34035, -81.96965], [0, 0, 2.38], [0.5, 1.4, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.p([-793.13958, 4.93042, -81.96958], [0, 0, 3.14], [0.5, 2.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-791.61951, 5.92049, -81.96951], [0, -1.57, 0], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-791.59, 5.25, -81.93], [0, 0, 0.85], [1.5, 0.5, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-791.61993, 4.43007, -81.96993], [0, -1.57, 0], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-797.04986, 4.47014, -81.92986], [0, 0, 0], [1, 0.26, 1], "00c200", 0, 0, 0.6, false, false, false, false);
        a.y([-795.28979, 4.38021, -81.96979], [0, -1.57, 0], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.y([-797.02972, 4.38028, -81.96972], [0, -1.57, 0], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.p([-774.99965, 7.00035, -66.99965], [0, 0, 0], [1, 14, 31], "01037e", 0, 0, 0.6, false, false, false, false);
        a.y([-779.85958, 5.48042, -81.94958], [0, -1.57, 0], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.y([-784.36951, 4.40049, -81.94951], [0, -1.57, 3.14], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.p([-791.86, 5.51, -81.95], [0, 0, 0], [1, 1, 1], "01037e", 0, 0, 0.6, false, false, false, false);
        a.y([-795.28993, 4.38007, -81.94993], [0, -1.57, 0], [0.9, 1, 0.9], "01037e", 0, 0, 0.6, false, 1, false);
        a.p([-795.76986, 4.22014, -81.94986], [0, 0, 0], [0.6, 0.24, 1], "01037e", 0, 0, 0.6, false, false, false, false);
        a.y([-785.96979, 4.40021, -81.94979], [0, -1.57, 3.14], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.y([-800.37972, 4.40028, -81.94972], [0, -1.57, 3.14], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.p([-809.99965, 7.00035, -81.99965], [0, 0, 0], [71, 14, 1], "01037e", 0, 0, 0.6, false, false, false, false);
        a.p([-844.99958, 7.00042, -66.99958], [0, 0, 0], [1, 14, 31], "01037e", 0, 0, 0.6, false, false, false, false);
        a.p([-797.50951, 4.22049, -81.94951], [0, 0, 0], [0.6, 0.24, 1], "01037e", 0, 0, 0.6, false, false, false, false);
        a.y([-797.03, 4.38, -81.95], [0, -1.57, 0], [0.9, 1, 0.9], "01037e", 0, 0, 0.6, false, 1, false);
        a.p([-809.99993, 7.00007, -51.99993], [0, 0, 0], [71, 14, 1], "01037e", 0, 0, 0.6, false, false, false, false);
        a.p([-791.36986, 4.88014, -81.94986], [0, 0, 0], [1, 1, 1], "01037e", 0, 0, 0.6, false, false, false, false);
        a.y([-791.63979, 4.34021, -81.94979], [0, -1.57, 3.14], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.p([0.00028, 7.00028, 8.00028], [0, 0, 0], [61, 14, 1], "1", 0, 0, 0.6, false, false, false, false);
        a.p([-29.99965, 7.00035, -16.99965], [0, 0, 0], [1, 14, 51], "1", 0, 0, 0.6, false, false, false, false);
        a.p([30.00042, 7.00042, -16.99958], [0, 0, 0], [1, 14, 51], "1", 0, 0, 0.6, false, false, false, false);
        a.y([-791.63951, 6.14049, -81.94951], [0, -1.57, 3.14], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.y([-798.78, 4.4, -81.97], [0, -1.57, 3.14], [1.5, 1, 1.5], "00c200", 0, 0, 0.6, false, 1, false);
        a.y([-798.77993, 4.40007, -81.94993], [0, -1.57, 3.14], [0.5, 1, 0.5], "01037e", 0, 0, 0.6, false, 1, false);
        a.p([0.00014, 0.00014, -16.99986], [0, 0, 0], [60, 0.5, 50], "1", 0, 0, 0.6, false, false, false, false);
        a.p([-809.99979, 0.00021, -66.99979], [0, 0, 0], [70, 0.5, 30], "01037e", 0, 0, 0.6, false, false, false, false);
        //Tutorial
        a.p([771.49, 0, -99.42], [0, 0, 0], [2, 50, 198], "1", 0, 0, 0.6, false, false, false, false);
        a.p([831.49007, 0.00007, -99.41993], [0, 0, 0], [2, 50, 198], "1", 0, 0, 0.6, false, false, false, false);
        a.p([800.00014, 0.00014, -113.99986], [0, 0, 0], [10, 0.5, 150], "1", 0, 0, 0.6, false, false, false, false);
        //Skeeball
        a.p([3.50014, -0.02986, -191.99986], [0, 0, 0], [1, 0.5, 2], "00ff00", 0, 0, 0.6, false, true, false, false);
        a.p([0.00021, 0.00021, -189.99979], [0, 0, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, true, false, false, false);
        a.p([0.00028, 0.00028, -188.99972], [0, 0, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, true, false, false, false);
        a.p([0.00035, 0.00035, -200.99965], [0, 0, 0], [8, 0.5, 20], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0.00042, 0.10042, -211.29958], [0, 0.1, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0.00049, 0.20049, -211.49951], [0, 0.21, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0, 0.3, -211.7], [0, 0.31, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0.00007, 0.40007, -211.89993], [0, 0.42, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0.00014, 0.50014, -212.09986], [0, 0.52, 0], [8, 0.5, 2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0.00028, 4.47028, -229.83972], [0, 0.44, 0], [8.2, 4, 0.2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([-3.99965, 2.73035, -225.27965], [0, 0.26, 0], [0.2, 4, 10.7], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([0.00042, 0.89042, -220.33958], [0, 0.26, 0], [8.2, 3, 0.2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([4.00049, 2.73049, -225.27951], [0, 0.26, 0], [0.2, 4, 10.7], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([-1.5, 3.69, -228.88], [0, 0.26, 0], [1, 0.5, 2.2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([-2.49993, 2.40007, -224.05993], [0, 0.26, 0], [3, 0.5, 8], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([2.50014, 2.40014, -224.05986], [0, 0.26, 0], [3, 0.5, 8], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([1.50021, 3.69021, -228.87979], [0, 0.26, 0], [1, 0.5, 2.2], "01037e", 0, 0, 0.0, false, false, false, false);
        a.p([2.50028, -0.02972, -191.89972], [0, 0, 0], [1, 0.5, 1.8], "66ff00", 0, 0, 0.6, false, true, false, false);
        a.p([1.50035, -0.02965, -191.79965], [0, 0, 0], [1, 0.5, 1.6], "ccff00", 0, 0, 0.6, false, true, false, false);
        a.p([-3.49958, -0.02958, -191.29958], [0, 0, 0], [1, 0.5, 0.6], "ff0000", 0, 0, 0.6, false, true, false, false);
        a.p([-2.49951, -0.02951, -191.39951], [0, 0, 0], [1, 0.5, 0.8], "ff3300", 0, 0, 0.6, false, true, false, false);
        a.p([-1.5, -0.03, -191.5], [0, 0, 0], [1, 0.5, 1], "ff9900", 0, 0, 0.6, false, true, false, false);
        a.p([-0.49993, -0.02993, -191.59993], [0, 0, 0], [1, 0.5, 1.2], "ffcc00", 0, 0, 0.6, false, true, false, false);
        a.p([0.50014, -0.02986, -191.69986], [0, 0, 0], [1, 0.5, 1.4], "ffff00", 0, 0, 0.6, false, true, false, false);
        a.p([-0.99979, 1.42021, -221.22979], [0, 0.26, 0], [0.2, 1, 2], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([1.00028, 1.42028, -221.22972], [0, 0.26, 0], [0.2, 1, 2], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([0.00035, 3.96035, -229.86965], [0, 0.26, 0], [2.2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([2.90042, 3.96042, -229.86958], [0, 0.26, 0], [2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([3.80049, 3.70049, -228.89951], [0, 0.26, 0], [0.2, 2, 2.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([2.9, 3.44, -227.94], [0, 0.26, 0], [2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([2.00007, 3.70007, -228.89993], [0, 0.26, 0], [0.2, 2, 2.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([-2.89986, 3.96014, -229.86986], [0, 0.26, 0], [2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([-3.79979, 3.70021, -228.89979], [0, 0.26, 0], [0.2, 2, 2.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([-1.99972, 3.70028, -228.89972], [0, 0.26, 0], [0.2, 2, 2.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([-2.89965, 3.44035, -227.93965], [0, 0.26, 0], [2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([0.00042, 2.40042, -224.06958], [0, 0.26, 0], [2.2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([0.00049, 3.44049, -227.93951], [0, 0.26, 0], [2.2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([0, 2.92, -226.01], [0, 0.26, 0], [2.2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([1.00007, 2.92007, -226.00993], [0, 0.26, 0], [0.2, 2, 8.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([-0.99986, 2.92014, -226.00986], [0, 0.26, 0], [0.2, 2, 8.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([0.00021, 1.89021, -222.13979], [0, 0.26, 0], [2.2, 2, 0.2], "ffffff", 0, 0, 0.0, false, false, false, false);
        a.p([-3.99972, -1.07972, -223.08972], [0, -0.08, 0], [0.2, 2, 20], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([2.56035, 0.89035, -220.60965], [0.17, 0.26, 0], [3, 3, 0.2], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([-2.43958, 0.89042, -220.60958], [-0.17, 0.26, 0], [3, 3, 0.2], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([4.00049, -1.07951, -223.08951], [0, -0.08, 0], [0.2, 2, 20], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([0, -2.08, -223.09], [0, -0.08, 0], [8.2, 0.5, 20], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([0.00007, -3.49993, -235.88993], [0, 0, 0], [8.2, 0.5, 4], "-1.0", 0, 0, 100.0, false, false, false, false);
        //Ending
        a.e([0.00028, 0.00028, -499.99972]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#00000a"));
        cc.set_monkey("jumpHeight", 0.0);
        cc.set_monkey("speed", default_speed * 1.5);
        cc.set_monkey("jumpSpeed", 3.5);
        cc.set_monkey("player.scaling", new BABYLON.Vector3(null,0.5,null));
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PX = player.position.x;
        let PY = player.position.y;
        let PZ = player.position.z;
        if (currentGame == "main") {
            let total = 0;
            for (var i = 0; i < games.length; i++) {
                total += games[i];
            }
            bestElement.innerText = "Best:" + total;
            if (PZ < -13 && PZ > -21 && PX < -28.5) {
                currentGame = "games";
                player.position.x = -810;
                player.position.z = -60;
                rotation = 0;
            }
            if (PZ < -13 && PZ > -21 && PX > 28.5) {
                currentGame = "tutorial";
                player.position.x = 800;
                player.position.z = -43;
                rotation = 0;
            }
        }
        if (currentGame == "games") {
            a.cam_cd(5);
            a.cam_d(3);
            if (PZ < -81) {
                if (PX > -788 && PX < -780) {
                    currentGame = "pinball";
                    /*player.position.x = -810;
                    player.position.z = -60;*/
                }
                if (PX > -801 && PX < -793) {
                    currentGame = "skeeball";
                    tickets = games[1];
                    ticketElement.innerText = 'Tickets: ' + tickets;
                    rotation = 0;
                    currentBall = 0;
                    activeBall = 1;
                    player.position.x = 0;
                    player.position.y = 0.37513842056015506;
                    player.position.z = -190;
                }
                if (PX > -814 && PX < -806) {
                    currentGame = "game3";
                    /*player.position.x = -810;
                    player.position.z = -60;*/
                }
                if (PX > -827 && PX < -819) {
                    currentGame = "game4";
                    /*player.position.x = -810;
                    player.position.z = -60;*/
                }
                if (PX > -840 && PX < -832) {
                    currentGame = "game5";
                    /*player.position.x = -810;
                    player.position.z = -60;*/
                }
            }
        }
        if (currentGame == "skeeball") {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'p') {
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'r', code: 'KeyR', keyCode: 82, which: 82, bubbles: true }));
                    alert("Nope, no pausing for you here!");
                }
                if (event.key === 'w' || event.key === 'ArrowUp' || event.key === ' ') {
                    if (firstjump) {
                        xcatch = player.position.x;
                        firstjump = false;
                    } else if (secondjump) {
                        powercatch = player.position.x;
                    }
                }
            });
            switch (this.section_id) {
            case 0:
                if (PZ < -189) {
                    a.jh(0.0);
                    a.js(1.0);
                    steer = default_steer * 0.0;
                    speed = default_speed * 0.0;
                    firstjump = true;
                    for (var i = 55; i < scene.meshes.length; i++) {
                        if (Math.abs(Math.round(scene.meshes[i].position.y * 100)) == 3) {
                            scene.meshes[i].position.y = -0.03;
                        }
                    }
                    this.section_id += 1
                }
                break;
            case 1:
                if (PX > 3.5) {
                    sliderdir = -1;
                }
                if (PX < -3.5) {
                    sliderdir = 1;
                }
                player.position.x += sliderspeed * sliderdir;
                if (PZ < -191.5) {
                    a.jh(0.0);
                    a.js(1.0);
                    steer = default_steer * 0.0;
                    speed = default_speed * 0.0;
                    player.position.z = -190;
                    player.position.y = 0.37513842056015506;
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    for (var i = 55; i < scene.meshes.length; i++) {
                        if (Math.abs(Math.round(scene.meshes[i].position.y * 100)) == 3) {
                            scene.meshes[i].position.y = 0.03;
                        }
                    }
                    secondjump = true;
                    this.section_id += 1
                }
                break;
            case 2:
                if (PX > 3.5) {
                    sliderdir = -1;
                }
                if (PX < -3.5) {
                    sliderdir = 1;
                }
                player.position.x += sliderspeed * sliderdir;
                if (PZ < -191.5) {
                    var ImpulseVector = gravity;
                    ImpulseVector = ImpulseVector.scale(ImpulseMagnitude);
                    ImpulseVector.z += (-1 * (powercatch + 3)) - 10;
                    ImpulseVector.y = 0.01;
                    player.position.x = xcatch;
                    player.position.z = -194;
                    player.physicsImpostor.setLinearVelocity(ImpulseVector);
                    currentBall += 1;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PY < 0.9 && currentBall == activeBall && PZ < -215) {
                    if (PX < 1.1 && PX > -1.1 && PZ < -220.38 && PZ > -222.3) {
                        tickets += 10;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else if (PX < 0.9 && PX > -0.9 && PZ < -222.5 && PZ > -224.24) {
                        tickets += 20;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else if (PX < 0.9 && PX > -0.9 && PZ < -224.43 && PZ > -226.17) {
                        tickets += 30;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else if (PX < 0.9 && PX > -0.9 && PZ < -226.36 && PZ > -228.1) {
                        tickets += 40;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else if (PX < 0.9 && PX > -0.9 && PZ < -228.29 && PZ > -230.03) {
                        tickets += 50;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else if (PX < -2.1 && PX > -3.7 && PZ < -228.29 && PZ > -230.03) {
                        tickets += 100;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else if (PX < 3.7 && PX > 2.1 && PZ < -228.29 && PZ > -230.03) {
                        tickets += 100;
                        ticketElement.innerText = 'Tickets: ' + tickets;
                        activeBall += 1;
                        this.section_id += 1
                    } else {
                        activeBall += 1;
                        this.section_id += 1
                    }
                }
                break;
            case 4:
                if (currentBall == 9) {
                    currentGame = "gameEnd";
                    player.position.x = 0;
                    player.position.y = 2;
                    player.position.z = -2;
                } else {
                    rotation = 0;
                    player.position.x = 0;
                    player.position.y = 0.37513842056015506;
                    player.position.z = -190;
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    player.position.z = -190;
                    player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3.Zero());
                    this.section_id = 0;
                }
                break;
            }
        }
        if (currentGame == "tutorial") {
            switch (this.section_id) {
            case 0:
                if (PZ < -39.99993) {
                    steer = default_steer * 0.0;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -49.99993) {
                    //steer = cc.get("steer", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -49.99972) {
                    a.msg_set("Welcome to the arcade!");
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -59.99972) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -60) {
                    a.msg_set("Your goal is to collect tickets by playing games!");
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -74) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -73.99951) {
                    a.msg_set("You will get tickets based on your performance in games");
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -89.99951) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -89.99965) {
                    a.msg_set("You can press R to go back to the arcade booth");
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -101.99965) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -101.99958) {
                    a.msg_set("You can see the number of tickets you have on each game");
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -117.99958) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            }
        }
        if (currentGame == "skeeball") {
            
        }
    },
    reset: function() {
        this.section_id = 0;
        currentGame = "main";
        //Main
        a.re('P0', [29.98014, 4.00014, -16.99986], [0, 0, 0], [1, 8, 8]);
        a.re('P1', [-29.97979, 4.00021, -16.99979], [0, 0, 0], [1, 8, 8]);
        a.re('P2', [-783.99972, 2.00028, -81.96972], [0, 0, 0], [8, 4, 1]);
        a.re('P3', [-796.99965, 2.00035, -81.96965], [0, 0, 0], [8, 4, 1]);
        a.re('P4', [-809.99958, 2.00042, -81.96958], [0, 0, 0], [8, 4, 1]);
        a.re('P5', [-822.99951, 2.00049, -81.96951], [0, 0, 0], [8, 4, 1]);
        a.re('P6', [-836, 2, -81.97], [0, 0, 0], [8, 4, 1]);
        a.re('P7', [-788.37993, 6.93007, -81.96993], [0, 0, 3.14], [0.5, 2.5, 1]);
        a.re('P8', [-787.46986, 6.93014, -81.96986], [0, 0, 3.14], [0.5, 2.5, 1]);
        a.re('P9', [-786.55979, 6.30021, -81.96979], [0, 0, 0], [0.5, 1.2, 1]);
        a.re('Y0', [-784.36972, 6.40028, -81.96972], [0, -1.57, 3.14], [1.5, 1, 1.5]);
        a.re('P10', [-783.87965, 7.38035, -81.96965], [0, 0, 3.14], [0.5, 1.6, 1]);
        a.re('P11', [-782.54958, 7.02042, -81.96958], [0, 0, 0], [1.5, 0.5, 1]);
        a.re('P12', [-783.05951, 6.30049, -81.96951], [0, 0, 0], [0.5, 1.2, 1]);
        a.re('P13', [-782.06, 6.3, -81.97], [0, 0, 0], [0.5, 1.2, 1]);
        a.re('P14', [-781.05993, 6.30007, -81.96993], [0, 0, 0], [0.5, 1.2, 1]);
        a.re('Y1', [-781.07986, 7.32014, -81.96986], [0, -1.57, 0], [0.5, 1, 0.5]);
        a.re('Y2', [-779.85979, 7.48021, -81.96979], [0, -1.57, 0], [1.5, 1, 1.5]);
        a.re('P15', [-779.38972, 6.50028, -81.96972], [0, 0, 0], [0.5, 1.6, 1]);
        a.re('P16', [-802.78965, 6.93035, -81.96965], [0, 0, 3.14], [0.5, 2.5, 1]);
        a.re('P17', [-801.87958, 6.93042, -81.96958], [0, 0, 3.14], [0.5, 2.5, 1]);
        a.re('Y3', [-785.96951, 6.40049, -81.96951], [0, -1.57, 3.14], [1.5, 1, 1.5]);
        a.re('P18', [-800.97, 6.3, -81.97], [0, 0, 0], [0.5, 1.2, 1]);
        a.re('Y4', [-800.37993, 6.40007, -81.96993], [0, -1.57, 3.14], [1.5, 1, 1.5]);
        a.re('P19', [-795.30986, 6.47014, -81.92986], [0, 0, 0], [1, 0.26, 1]);
        a.re('P20', [-798.28979, 7.38021, -81.96979], [0, 0, 3.14], [0.5, 1.6, 1]);
        a.re('P21', [-793.76972, 6.99028, -81.96972], [0, 0, 0.85], [0.5, 1, 1]);
        a.re('P22', [-793.69965, 6.34035, -81.96965], [0, 0, 2.38], [0.5, 1.4, 1]);
        a.re('P23', [-793.13958, 6.93042, -81.96958], [0, 0, 3.14], [0.5, 2.5, 1]);
        a.re('Y5', [-791.61951, 7.92049, -81.96951], [0, -1.57, 0], [1.5, 1, 1.5]);
        a.re('P24', [-791.59, 7.25, -81.93], [0, 0, 0.85], [1.5, 0.5, 1]);
        a.re('Y6', [-791.61993, 6.43007, -81.96993], [0, -1.57, 0], [1.5, 1, 1.5]);
        a.re('P25', [-797.04986, 6.47014, -81.92986], [0, 0, 0], [1, 0.26, 1]);
        a.re('Y7', [-795.28979, 6.38021, -81.96979], [0, -1.57, 0], [1.5, 1, 1.5]);
        a.re('Y8', [-797.02972, 6.38028, -81.96972], [0, -1.57, 0], [1.5, 1, 1.5]);
        a.re('P26', [-774.99965, 7.00035, -66.99965], [0, 0, 0], [1, 14, 31]);
        a.re('Y9', [-779.85958, 7.48042, -81.94958], [0, -1.57, 0], [0.5, 1, 0.5]);
        a.re('Y10', [-784.36951, 6.40049, -81.94951], [0, -1.57, 3.14], [0.5, 1, 0.5]);
        a.re('P27', [-791.37, 6.88, -81.95], [0, 0, 0], [1, 1, 1]);
        a.re('P28', [-791.85993, 7.51007, -81.94993], [0, 0, 0], [1, 1, 1]);
        a.re('Y11', [-795.28986, 6.38014, -81.94986], [0, -1.57, 0], [0.9, 1, 0.9]);
        a.re('P29', [-795.76979, 6.22021, -81.94979], [0, 0, 0], [0.6, 0.24, 1]);
        a.re('Y12', [-785.96972, 6.40028, -81.94972], [0, -1.57, 3.14], [0.5, 1, 0.5]);
        a.re('Y13', [-800.37965, 6.40035, -81.94965], [0, -1.57, 3.14], [0.5, 1, 0.5]);
        a.re('P30', [-809.99958, 7.00042, -81.99958], [0, 0, 0], [71, 14, 1]);
        a.re('P31', [-844.99951, 7.00049, -66.99951], [0, 0, 0], [1, 14, 31]);
        a.re('P32', [-797.51, 6.22, -81.95], [0, 0, 0], [0.6, 0.24, 1]);
        a.re('Y14', [-797.02993, 6.38007, -81.94993], [0, -1.57, 0], [0.9, 1, 0.9]);
        a.re('P33', [-809.99986, 7.00014, -51.99986], [0, 0, 0], [71, 14, 1]);
        a.re('P34', [0.00021, 7.00021, 8.00021], [0, 0, 0], [61, 14, 1]);
        a.re('P35', [-29.99972, 7.00028, -16.99972], [0, 0, 0], [1, 14, 51]);
        a.re('P36', [30.00035, 7.00035, -16.99965], [0, 0, 0], [1, 14, 51]);
        a.re('Y15', [-791.63958, 6.34042, -81.94958], [0, -1.57, 3.14], [0.5, 1, 0.5]);
        a.re('Y16', [-791.63951, 8.14049, -81.94951], [0, -1.57, 3.14], [0.5, 1, 0.5]);
        a.re('Y17', [-798.78, 6.4, -81.97], [0, -1.57, 3.14], [1.5, 1, 1.5]);
        a.re('Y18', [-798.77993, 6.40007, -81.94993], [0, -1.57, 3.14], [0.5, 1, 0.5]);
        a.re('P37', [0.00014, 0.00014, -16.99986], [0, 0, 0], [60, 0.5, 50]);
        a.re('P38', [-809.99979, 0.00021, -66.99979], [0, 0, 0], [70, 0.5, 30]);
        //Tutorial
        a.re('P39', [771.49, 0, -99.42], [0, 0, 0], [2, 50, 198]);
        a.re('P40', [831.49007, 0.00007, -99.41993], [0, 0, 0], [2, 50, 198]);
        a.re('P41', [800.00014, 0.00014, -113.99986], [0, 0, 0], [10, 0.5, 150]);
        //Skeeball
        a.re('P42', [3.50014, -0.02986, -191.99986], [0, 0, 0], [1, 0.5, 2]);
        a.re('P43', [0.00021, 0.00021, -189.99979], [0, 0, 0], [8, 0.5, 2]);
        a.re('P44', [0.00028, 0.00028, -188.99972], [0, 0, 0], [8, 0.5, 2]);
        a.re('P45', [0.00035, 0.00035, -200.99965], [0, 0, 0], [8, 0.5, 20]);
        a.re('P46', [0.00042, 0.10042, -211.29958], [0, 0.1, 0], [8, 0.5, 2]);
        a.re('P47', [0.00049, 0.20049, -211.49951], [0, 0.21, 0], [8, 0.5, 2]);
        a.re('P48', [0, 0.3, -211.7], [0, 0.31, 0], [8, 0.5, 2]);
        a.re('P49', [0.00007, 0.40007, -211.89993], [0, 0.42, 0], [8, 0.5, 2]);
        a.re('P50', [0.00014, 0.50014, -212.09986], [0, 0.52, 0], [8, 0.5, 2]);
        a.re('P51', [0.00028, 4.47028, -229.83972], [0, 0.44, 0], [8.2, 4, 0.2]);
        a.re('P52', [-3.99965, 2.73035, -225.27965], [0, 0.26, 0], [0.2, 4, 10.7]);
        a.re('P53', [0.00042, 0.89042, -220.33958], [0, 0.26, 0], [8.2, 3, 0.2]);
        a.re('P54', [4.00049, 2.73049, -225.27951], [0, 0.26, 0], [0.2, 4, 10.7]);
        a.re('P55', [-1.5, 3.69, -228.88], [0, 0.26, 0], [1, 0.5, 2.2]);
        a.re('P56', [-2.49993, 2.40007, -224.05993], [0, 0.26, 0], [3, 0.5, 8]);
        a.re('P57', [2.50014, 2.40014, -224.05986], [0, 0.26, 0], [3, 0.5, 8]);
        a.re('P58', [1.50021, 3.69021, -228.87979], [0, 0.26, 0], [1, 0.5, 2.2]);
        a.re('P59', [2.50028, -0.02972, -191.89972], [0, 0, 0], [1, 0.5, 1.8]);
        a.re('P60', [1.50035, -0.02965, -191.79965], [0, 0, 0], [1, 0.5, 1.6]);
        a.re('P61', [-3.49958, -0.02958, -191.29958], [0, 0, 0], [1, 0.5, 0.6]);
        a.re('P62', [-2.49951, -0.02951, -191.39951], [0, 0, 0], [1, 0.5, 0.8]);
        a.re('P63', [-1.5, -0.03, -191.5], [0, 0, 0], [1, 0.5, 1]);
        a.re('P64', [-0.49993, -0.02993, -191.59993], [0, 0, 0], [1, 0.5, 1.2]);
        a.re('P65', [0.50014, -0.02986, -191.69986], [0, 0, 0], [1, 0.5, 1.4]);
        a.re('P66', [-0.99979, 1.42021, -221.22979], [0, 0.26, 0], [0.2, 1, 2]);
        a.re('P67', [1.00028, 1.42028, -221.22972], [0, 0.26, 0], [0.2, 1, 2]);
        a.re('P68', [0.00035, 3.96035, -229.86965], [0, 0.26, 0], [2.2, 2, 0.2]);
        a.re('P69', [2.90042, 3.96042, -229.86958], [0, 0.26, 0], [2, 2, 0.2]);
        a.re('P70', [3.80049, 3.70049, -228.89951], [0, 0.26, 0], [0.2, 2, 2.2]);
        a.re('P71', [2.9, 3.44, -227.94], [0, 0.26, 0], [2, 2, 0.2]);
        a.re('P72', [2.00007, 3.70007, -228.89993], [0, 0.26, 0], [0.2, 2, 2.2]);
        a.re('P73', [-2.89986, 3.96014, -229.86986], [0, 0.26, 0], [2, 2, 0.2]);
        a.re('P74', [-3.79979, 3.70021, -228.89979], [0, 0.26, 0], [0.2, 2, 2.2]);
        a.re('P75', [-1.99972, 3.70028, -228.89972], [0, 0.26, 0], [0.2, 2, 2.2]);
        a.re('P76', [-2.89965, 3.44035, -227.93965], [0, 0.26, 0], [2, 2, 0.2]);
        a.re('P77', [0.00042, 2.40042, -224.06958], [0, 0.26, 0], [2.2, 2, 0.2]);
        a.re('P78', [0.00049, 3.44049, -227.93951], [0, 0.26, 0], [2.2, 2, 0.2]);
        a.re('P79', [0, 2.92, -226.01], [0, 0.26, 0], [2.2, 2, 0.2]);
        a.re('P80', [1.00007, 2.92007, -226.00993], [0, 0.26, 0], [0.2, 2, 8.2]);
        a.re('P81', [-0.99986, 2.92014, -226.00986], [0, 0.26, 0], [0.2, 2, 8.2]);
        a.re('P82', [0.00021, 1.89021, -222.13979], [0, 0.26, 0], [2.2, 2, 0.2]);
        a.re('P83', [-3.99972, -1.07972, -223.08972], [0, -0.08, 0], [0.2, 2, 20]);
        a.re('P84', [2.56035, 0.89035, -220.60965], [0.17, 0.26, 0], [3, 3, 0.2]);
        a.re('P85', [-2.43958, 0.89042, -220.60958], [-0.17, 0.26, 0], [3, 3, 0.2]);
        a.re('P86', [4.00049, -1.07951, -223.08951], [0, -0.08, 0], [0.2, 2, 20]);
        a.re('P87', [0, -2.08, -223.09], [0, -0.08, 0], [8.2, 0.5, 20]);
        a.re('P88', [0.00007, -3.49993, -235.88993], [0, 0, 0], [8.2, 0.5, 4]);
        //Ending
        a.re('E0', [0.00028, 0.00028, -499.99972], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
elementCheck = setInterval(() => {
    if (isMapLoaded === false) {
        ticketElement.remove();
        attemptsElement.remove();
        clearInterval(elementCheck);
    }
}, 100);
