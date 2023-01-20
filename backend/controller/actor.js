
const actor = require("../model/actor");

//get Detail by id 
exports.GetActorById =  (async (req, res, next) => {

        const data = await actor.findById(req.params.id);
        
        res.status(200).json({
            success:true,
            data
        })
})

//get all Detail
exports.GetAllActors =  (async (req, res, next) => {

    const data = await actor.find();
    // const score = await Score.find({user: req.user.id});
    res.status(200).json({
        success:true,
        data
    })
})


//   /api/v1/AddDetail   -- Post Data
exports.AddActor =  ( async (req, res, next) => {

        console.log("body",req.body)
        const data = await actor.create(req.body);

        console.log(data);

        res.status(201).json({
            success:true,
            data
        })
})

exports.UpdateActor =  ( async (req,res,next)=>{
    
    let data = await actor.findById(req.params.id);
    
    if(!data){
        return res.status(400).json({
            success:false,
            message:'Data not found'
        })
    }
    
    data=await actor.findByIdAndUpdate(req.params.id, data,{
        new : true,
        runValidators : true,
        useFindAndModify : false
    })
   
    console.log(data);
    res.status(200).json({
        success:true,
        data
    })
})

exports.DeleteActor = ( async (req, res, next)=>{
 
    let data = await actor.findById(req.params.id);
    if(!data)
    {
        return next(new Errorhandler('data not found', 404));
    }
    await data.remove();
    return res.status(200).json({
        success:true,
        message:'Data Deleted'
    })
})



  




