import mysql from 'mysql';


var db_connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'website-node',
  password : 'mypass',
  database : 'site'
});

db_connection.connect();

class Message
{
    pseudo:string;
    gender:string;
    message:string;

    constructor(pseudo:string, gender:string, message:string)
    {
        this.pseudo = pseudo;
        this.gender = gender;
        this.message = message;
    }
}

export function getAllMessages():Promise<Array<Message>>
{
    let output = new Array<Message>;

    return new Promise((resolve, error) => {

        db_connection.query('SELECT * FROM Messages',(err,messages_res, fields) => {
            if(err) error(err);
          
            messages_res.forEach(msg => {

            output.push(new Message(msg.pseudo, msg.gender, msg.message));
                
              
            });
  
            resolve(output);
        })
        
      });
}

export function addNewMessage(pseudo:string,gender:string,message:string):Promise<void>
{
    return new Promise((resolve, error) => {

        const query = 'INSERT INTO Messages(pseudo,gender,message) VALUES(?,?,?)'

        db_connection.query(query,[pseudo,gender,message], (err,res, fields) => {
            if(err) error(err);
            resolve();
        })
    });
}