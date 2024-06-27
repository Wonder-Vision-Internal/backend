const { default: mongoose } = require('mongoose');
const postModel = require('../Models/posts.schema')

class Testimonial {

async getTestimonials(req,res){
postModel.find({post_type:'testimonial'})
.then((data)=>{
    res.status(200).json({
        testimonialData:data
    })
}).catch((err)=>{
    res.status(500).json({
        message:'Unable To Fetch Testimonials',
        Error:err
    })
})
}

async addTestimonial(req,res){
    console.log('body',req.body);
 
    const testObj={
        post_type:'testimonial',
        video_link:req.body.video_link
    }
    postModel(testObj).save()
    .then((data)=>{
        if(data._id){
            res.status(200).json({
                message:'Testimonial Created Successfully',
                status:1
            })
        }
        else{
            res.status(500).json({
                message:'Testimonial Not Created',
                status:0

            }) 
        }
    }).catch((err)=>{
        console.log('Error in creating testimonial',err);
        res.status(500).json({
            message:'Failed To Create Testimonial',
            status:-1,
            Error:err
        }) 
    })
}

async updateTestimonial(req,res){
    console.log('body',req.body);
 
    postModel.findOneAndUpdate({_id:new mongoose.Types.ObjectId(req.body.postId)},
    {
        video_link:req.body.video_link
    })
    .then(()=>{
            res.status(200).json({
                message:'Testimonial Updated Successfully',
                status:1
            })
    }).catch((err)=>{
        res.status(500).json({
            message:'Failed To Update Testimonial',
            Error:err
        }) 
    })
}

async deleteTestimonial(req,res){

    postModel.findOneAndDelete({_id:req.params.testimonialId})
    .then(()=>{
        res.status(200).json({
            message:'Testimonial Video Deleted Successfully',
            status : 1
        })
    }).catch((err)=>{
         res.status(500).json({
            message:'Failed To Delete Testimonial Video'
        })
    })
}


}

module.exports = new Testimonial