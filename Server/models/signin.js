const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
 
module.exports = {
    

    signup:(name, email, password)=>{
        MongoClient.connect(url,(err, client)=>{
            
            const db = client.db("Blog");
            
            db.collection('user').insertOne( {
                "name": name,
                "email": email,
                "password": password
            },(err, result)=>{
                assert.equal(err, null);
                console.log("Saved the user sign up details.");
            });
        });
    },
    validateSignIn: (username, password,callback)=>{
        MongoClient.connect(url, function(err, client){
            console.log(username,password);
            db=client.db('Blog');
            db.collection('user').findOne( { email : username , password: password 
            },(err, result)=>{
                if(result==null){
                    console.log('returning false')
                    callback(false)
                }
                else{
                    console.log('returning true')
                    callback(true)
                }
            });
        });
}

}