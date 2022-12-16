"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewMessage = exports.getAllMessages = void 0;
const mysql_1 = __importDefault(require("mysql"));
var db_connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypass',
    database: 'site'
});
db_connection.connect();
class Message {
    constructor(pseudo, gender, message) {
        this.pseudo = pseudo;
        this.gender = gender;
        this.message = message;
    }
}
function getAllMessages() {
    let output = new Array;
    return new Promise((resolve, error) => {
        db_connection.query('SELECT * FROM Messages', (err, messages_res, fields) => {
            if (err)
                error(err);
            messages_res.forEach(msg => {
                output.push(new Message(msg.pseudo, msg.gender, msg.message));
            });
            resolve(output);
        });
    });
}
exports.getAllMessages = getAllMessages;
function addNewMessage(pseudo, gender, message) {
    return new Promise((resolve, error) => {
        const query = 'INSERT INTO Messages(pseudo,gender,message) VALUES(?,?,?)';
        db_connection.query(query, [pseudo, gender, message], (err, res, fields) => {
            if (err)
                error(err);
            resolve();
        });
    });
}
exports.addNewMessage = addNewMessage;
//# sourceMappingURL=db_request.js.map