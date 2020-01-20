let Obniz = require("obniz");
let obniz = new Obniz("OBNIZ-ID-HERE");

obniz.onconnect = async function () {
    console.log(((new Date()).toLocaleTimeString()) + ": onConnect");
    let sensor = obniz.wired("HC-SR505", {vcc: 11, signal: 10, gnd: 9});
    await obniz.wait(10000);
    sensor.onchange = function (val) {
        console.log(((new Date()).toLocaleTimeString()) + ":" + val);
    }
};

obniz.onclose = async function () {
    console.log(((new Date()).toLocaleTimeString()) + ": onClose");
    setTimeout(function () {
        obniz.connect();
    }, 10 * 1000)
};