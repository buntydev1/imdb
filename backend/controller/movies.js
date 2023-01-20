
const movies = require("../model/movies");
const actor = require("../model/actor");
const producer = require("../model/producer");

//get Detail by id 
exports.GetMovieById =  (async (req, res, next) => {

        let details = await movies.findById(req.params.id);
        
        var data ={
            name:details.name,
            gender:details.gender,
            id:details._id,
            producerDetail:{},
            actorsList:[]
        }
        data.producerDetail=await producer.findById(details.producerId);
        data.actorsList=await actor.find({ '_id': { $in: details.actorIdList } });
        res.status(200).json({
            success:true,
            data
        })
})

//get all Detail
exports.GetAllMovies =  (async (req, res, next) => {

    var moviesList = await movies.find();
   // console.log(data,"data")
    var data=[];
    
     
    for (const item of moviesList) {
        var Details={
                name:item.name,
                id:item._id,
                gender:item.gender,
                producerDetail:{},
                actorsList:[]
        }
        // Details.name=item.name;
        // Details.gender=item.gender;
        Details.producerDetail=await producer.findById(item.producerId);
        Details.actorsList=await actor.find({ '_id': { $in: item.actorIdList } });
        data.push(Details);
        console.log(Details,"data");
    }
    // const score = await Score.find({user: req.user.id});
    // moviesList.map(async(d) => {
        
    //     Details.producerDetail=await producer.findById(d.producerId);
    //     console.log(Details.producerDetail,"count");
    //     data.push(Details);
    //     //d.actorsList = actor.find(d.actorIdList);
    // });
    
    //console.log(data)
    res.status(200).json({
        success:true,
        data
    })
})


//   /api/v1/AddDetail   -- Post Data
exports.AddMovie =  ( async (req, res, next) => {
    
        var details={
            name:req.body.moviesDetail.name,
            gender:req.body.moviesDetail.gender,
            producerId:{},
            actorIdList:[]
        }
        const isProducerExist = await producer.findOne({"name":req.body.producerDetail.name});
        if(!isProducerExist){
            const data1 = await producer.create(req.body.producerDetail);
            details.producerId= data1._id;
        }else{
            details.producerId=isProducerExist._id;
        }
        
        var data2;
        for (const item of req.body.actorDetail.list) {
            const isActorExist = await actor.findOne({"name":item.name});
            if(!isActorExist){
                 data2 = await actor.create(item);
            }else{
                 data2 =isActorExist;
            }
            details.actorIdList.push(data2._id)
        }
        const data = await movies.create(details);
        console.log(data);
        res.status(201).json({
            success:true,
            data
        })
})


exports.UpdateMovie =  ( async (req,res,next)=>{
    
    let data = await movies.findById(req.params.id);
    
    if(!data){
        return res.status(400).json({
            success:false,
            message:'Data not found'
        })
    }
    data.name=req.body.moviesDetail.name
    data.bio=req.body.moviesDetail.bio;
    // var isProducerExist = await producer.findOne({"name":req.body.producerDetail.name});
    // console.log(isProducerExist,"isProducerExist");
    // console.log(data.producerId,"data");
    // if(isProducerExist._id!=data.producerId){
    //     const data1 = await producer.create(req.body.producerDetail);
    //     data.producerId= data1._id;
    // }

    const isProducerExist = await producer.findOne({"name":req.body.producerDetail.name});
        if(!isProducerExist){
            const data1 = await producer.create(req.body.producerDetail);
            data.producerId= data1._id;
        }else{
            data.producerId=isProducerExist._id;
        }
    
    var data2;
    var list=[]
    for (const item of req.body.actorDetail.list) {
        const isActorExist = await actor.findOne({"name":item.name});
        if(!isActorExist){
            data2 = await actor.create(item);
        }else{
            data2 =isActorExist;
        }
        list.push(data2._id)
    }
    data.actorIdList=list;
    data=await movies.findByIdAndUpdate(req.params.id, data,{
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

exports.DeleteMovie = ( async (req, res, next)=>{
 
    let data = await movies.findById(req.params.id);
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


  




