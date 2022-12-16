"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_request_1 = require("./db_request");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(__dirname + '/public'));
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    (0, db_request_1.getAllMessages)().then(res_db_messages => {
        res.render('index.ejs', { messages: res_db_messages });
    });
});
app.post('/', (req, res) => {
    let input = req.body;
    (0, db_request_1.addNewMessage)(input.pseudo, input.gender, input.message);
    res.redirect('/');
});
// app.get('/test',)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map