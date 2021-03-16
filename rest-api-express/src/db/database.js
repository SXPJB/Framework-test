const mysql=require('promise-mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'So76699737427',
    database:'person'
})

function getConnection(){
    return connection
}

module.exports={
    getConnection
}
