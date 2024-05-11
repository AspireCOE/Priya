var mongoose=require('mongoose')

var schema=mongoose.Schema;


var skillSchema=new schema({
    skillName:String,
    experience:Number,
    proficiency:String
})

var jobSeekerSchema=new schema({
    Name:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
})

var jobSeeker=mongoose.model('jobseeker',jobSeekerSchema)
mongoose.connect("mongodb://127.0.0.1:27017/employee")


var jobseeker1=new jobSeeker({
    Name:"Priya",
    age:21,
    emailId:"plpriya07@gmail.com",
    certified:true,
    skills:[{skillName:"java",experience:3,proficiency:"intermediate"},
        {skillName:"sql",experience:2,proficiency:"beginner"}
    ]
})
jobseeker1.save()

/*jobSeeker.find({},(err,data)=>{
    if(err) {
            console.log("error in retriving") }
    else{
        console.log(data)
    }
})*/

jobSeeker.find({}).exec();