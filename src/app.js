// mongodb connection
const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017'

const dbname = "Connection-1"

mongoClient.connect(url , (error,res1) =>{
    if(error){
        return  console.log('Error has occured')
    }
    console.log('Connection has Done')
    const db = res1.db(dbname)
//1- insertOne  2
        db.collection('users').insertOne({
            name : 'ahmed',
            age : 26
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })
        db.collection('users').insertOne({
            name: "Eman",
            age:30
        }, (err, data) => {
            if(err){
                console.log('Unable to insert Data') 
            }
            console.log(data.insertedId)
        })
// 2 insertMany 10   5 of them have the same age 27 y
        db.collection ('users').insertMany(
            [ {
                name: 'Islam',
                age: 27
            },
            {
                name: 'Hend',
                age: 30
            },
            {
                name: 'Omar',
                age: 24
            },
            {
                name: 'tasneem',
                age: 27
            },
            {
                name: 'Ziad',
                age: 24
            },
            {
                name: 'Mohamed',
                age: 24
            },
            {
                name: 'Mahmoud',
                age: 27
            },
            {
                name: 'Asmaa',
                age: 27
            },
            {
                name: 'Ibrahim',
                age: 24
            },
            {
                name: 'Hossam',
                age: 27
            }], 
            (error,data) => {
                if(error){
                console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            } 
        )
//3- find   match  27 y  
    db.collection('users').find({age:27}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
    })
//4- limit first 3    27y 
    db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
    })
//5,6- $set name for the first 4 & $inc age for the first 4
    db.collection("users").updateOne({_id:mongodb.ObjectId("67561351b68caf3bc3b302cf")},{
        $set:{name: "Tala" },
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})  // 1st ID
    db.collection("users").updateOne({_id:mongodb.ObjectId("67561351b68caf3bc3b302d1")},{
        $set:{name: "Lara" },
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})  // 2nd ID
    db.collection("users").updateOne({_id:mongodb.ObjectId("67561351b68caf3bc3b302d2")},{
        $set:{name: "Lareen" },
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})  // 3rd ID
    db.collection("users").updateOne({_id:mongodb.ObjectId("67561351b68caf3bc3b302d3")},{
        $set:{name: "Jida" },
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})  // 4th ID
//7- updateone for 1  inc age 5
db.collection("users").updateOne({_id:mongodb.ObjectId("67561351b68caf3bc3b302cf")},{
    $inc: {age: 5}
}).
then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=> {console.log(error)})  // 1st ID
//8- updateMany  inc age 10
    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})
//9- deleteMany  age 41   ==>> deletedCount 
    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
    .catch((error)=> {console.log(error)})
})
