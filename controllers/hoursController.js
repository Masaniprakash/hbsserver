import Hour from '../models/hoursModel.js'
import Hall from '../models/hallModel.js'

export const createHour=async(req,res,next)=>{
    const hallId= req.params.hallId//beacause take hall create Hour to the hall
    const newHour=new Hour (req.body)
    try {
        const saveHour=await newHour.save()
        try {
            await Hall.findByIdAndUpdate(hallId,{$push:{hours:saveHour._id}},{new:true})
        } catch (error) {
            next(error)
        }IDBObjectStore
        res.status(201).json({saveHour})
    } catch (error) {
        next(error)
    }
}

export const updateHour=async(req,res,next)=>{
    try {
        let updateHour=await Hour.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHour)
    } catch (error) {
        next(error)
    }
}

export const getById=async(req,res,next)=>{
    try {
        const get=await Hour.findById(req.params.id)
        res.status(200).json(get)
    } catch (error) {
        next(error)
    }
}


export const getAll=async(req,res,next)=>{
    try {
        const get=await Hour.find()
        res.status(200).json(get)
    } catch (error) {
        next(error)
    }
}

export const getHourFilter=async(req,res,next)=>{
    try {
        const get=await Hour.find()
        res.status(200).json(get)
    } catch (error) {
        next(error)
    }
}


export const updateHourAvailability=async(req,res,next)=>{
    try {
        let get = await Hour.findOne({"hourNumbers._id":req.params.id})
        let hourNo= get.hourNumbers.map((item)=>item.number)
        // console.log(hourNo);//[1]
        let parse=parseInt(hourNo)
        let found=await Hour.updateOne({"hourNumbers._id":req.params.id},{$push:{
            "hourNumbers.$[].unavailableDates":{date:req.body.date,name:req.body.name,
                hallName:req.body.hallName,department:req.body.department,
                reason:req.body.reason,hourNo:parse
            }
        }})
        res.send(found)
    } catch (error) {
        next(error)
    }
}
