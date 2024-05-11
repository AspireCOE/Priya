
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        const db=client.db('employee')
        const collection=db.collection('employees')
        const cursor=await collection.find().toArray();
        //console.log(cursor)
        //await collection.insertMany([{_id:7,firstName:'oviya'},{_id:8,firstName:'Nivethitha'}])
        //await collection.updateOne({_id:7},{$set:{lastName:'S',gender:"female",email:"ovi503@gmail.com",salary:40000,department:{name:'analyst'}}})
        //await collection.deleteOne({_id:8})

        //const result=await collection.find({firstName:'oviya'}).toArray()
        //const result=await collection.find({},{projection:{_id:1,firstName:1}}).toArray()
        //const result=await collection.find({},{projection:{_id:1,firstName:1,salary:1}}).sort({salary:-1}).limit(3).toArray()
        /*const result=await collection.find({
            $and:[
                {salary:{$gt:40000}},
                {
                    $or:[
                        {'department.name':'Hr'},
                        {'department.name':'finance'}
                    ]
                }
            ]
        }).toArray()*/
       /* const result=await collection.aggregate(
            [
                {$match:{gender:"female"}},
                {$project:{_id:1,firstName:1,department:1,salary:1}},
                {$sort:{salary:1}},
                {$limit:2}
            ]
        ).toArray()*/
       /* const result = await collection.aggregate([
            { $match: { gender: "female" } },
            { $facet: {
                averageSalary: [
                    { $group: { _id: "$gender", avg_female_salary: { $avg: "$salary" } } }
                ],
                femaleEmployees: [
                    {
                        $match: {
                            salary: { $lt: { $arrayElemAt: ["$averageSalary.avg_female_salary", 0] } }
                        }
                    },
                    { $project: { _id: 1, firstName: 1, department: 1, salary: 1 } }
                ]

            } },
            
        ]).toArray();
        const averageSalary = result[0].averageSalary;
        const femaleEmployees = result[0].femaleEmployees;

        console.log("Average Salary of Female Employees:", averageSalary);
        console.log("Female Employees:", femaleEmployees);*/
        //console.log(result)
       /* await cursor.forEach(record=>{
            console.log(record)
        })*/
        await client.close()
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();
