const config = {};
config.default = {};
config.loadState = {
    style: {
        font: "30px Courier",
        fill: "#fff"
    },
    label: {
        text : {
            x: 80,
            y: 150,
            print: "loading..."
        }
    }
};
config.bootState = {};
config.menuState = {
    boilerLogo : {
        x: 95,
        y: 150,
        spriteKey: "boiler-logo"
    }
};


config.default.stateManager = {
    bootState: "boot",
    loadState: "load",
    menuState: "menu"
}
config.default.gameSpecs = {
    width: 640,
    height: 480,
    renderType: Phaser.AUTO,
    parentID : "gameContainer"
};


let isNodeJsCompatible = typeof module !== "undefined"
if (isNodeJsCompatible)  {
    module.exports = config;
}
