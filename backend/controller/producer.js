
const producer = require("../model/producer");

//get Detail by id 
exports.GetProducerById =  (async (req, res, next) => {

        const data = await producer.findById(req.params.id);
        
        res.status(200).json({
            success:true,
            data
        })
})

//get all Detail
exports.GetAllProducers =  (async (req, res, next) => {

    const data = await producer.find();
    // const score = await Score.find({user: req.user.id});
    res.status(200).json({
        success:true,
        data
    })
})


//   /api/v1/AddDetail   -- Post Data
exports.AddProducer =  ( async (req, res, next) => {

        console.log("body",req.body)
        const data = await producer.create(req.body);

        console.log(data);

        res.status(201).json({
            success:true,
            data
        })
})

exports.UpdateProducer =  ( async (req,res,next)=>{
    
    let data = await producer.findById(req.params.id);
    
    if(!data){
        return res.status(400).json({
            success:false,
            message:'Data not found'
        })
    }
    
    data=await producer.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
        runValidators : true,
        useFindAndModify : false
    })
   
    res.status(200).json({
        success:true,
        data
    })
})

exports.DeleteProducer = ( async (req, res, next)=>{
 
    let data = await producer.findById(req.params.id);
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



  




