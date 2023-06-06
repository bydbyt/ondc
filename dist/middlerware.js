"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apis = [
    "search",
    "select",
    "init",
    "confirm",
    "status",
    "track",
    "cancel",
    "update",
    "rating",
    "support",
    "on_search",
    "on_select",
    "on_init",
    "on_confirm",
    "on_track",
    "on_cancel",
    "on_update",
    "on_status",
    "on_rating",
    "on_support",
    "get_cancellation_reasons",
    "cancellation_reasons",
    "get_return_reasons",
    "return_reasons",
    "get_rating_categories",
    "rating_categories",
    "get_feedback_categories",
    "feedback_categories",
    "get_feedback_form",
    "feedback_form"
];
function defaultHandler(path) {
    return (req, res, next) => {
        console.log(`Received Reuqest for /${path}`);
        res.status(200).send();
        next();
    };
}
function default_1(handlers = {}, routerOptions) {
    const router = (0, express_1.Router)(routerOptions);
    apis.map(path => { router.post(`/${path}`, handlers[path] || defaultHandler(path)); });
    return router;
}
exports.default = default_1;
