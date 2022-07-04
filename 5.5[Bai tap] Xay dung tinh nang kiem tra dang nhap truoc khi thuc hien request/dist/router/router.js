"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.use((req, res, next) => {
    if (req.body.email !== undefined && req.body.password !== undefined) {
        res.json({
            message: "you are logged in",
            body: { email: req.body.email, password: req.body.password }
        });
    }
    ;
    next();
});
exports.default = routes;
//# sourceMappingURL=router.js.map