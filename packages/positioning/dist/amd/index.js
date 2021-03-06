define(["require", "exports", "./interfaces", "./interfaces", "./ux-positioning"], function (require, exports, interfaces_1, interfaces_2, ux_positioning_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfig, callback) {
        // config.globalResources([
        //   PLATFORM.moduleName('@aurelia-ux/boilerplate/ux-boilerplate')
        // ]);
        if (typeof callback === 'function') {
            var config = frameworkConfig.container.get(interfaces_1.UxPositioningConfiguration);
            callback(config);
        }
    }
    exports.configure = configure;
    __export(interfaces_2);
    __export(ux_positioning_1);
});
