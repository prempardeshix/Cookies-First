"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const secret = "choco";
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173",
}));
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const token = jsonwebtoken_1.default.sign({ email, password }, secret);
    res.cookie("token", token);
    res.send("Signed In, Cookie set.");
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const result = jsonwebtoken_1.default.verify(token, secret);
    const email = result.email;
    res.json({
        email,
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", "");
    res.json({
        msg: "Cookie deleted!",
    });
});
app.listen(6969, () => {
    console.log("Listening on Port 6969");
});
