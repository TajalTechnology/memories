const postMessage = require('../models/postMessage');
const mongoose = require('mongoose');
const { post } = require('../routes/posts');



module.exports = {
    getPost: async(req, res)=>{
        const postMeaage = await postMessage.find();
        res.status(200).json(postMeaage);

    },
    createPost: async(req, res) => {

        const post = req.body
        const newPost = new postMessage(post)
        
        try{
            await newPost.save();
            res.status(201).json(newPost);

        }catch(error){
            res.status(409).json({message:error.message});

        };

    },
    updatePost: async(req, res) => {
        const {_id} = req.params;
        const post = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).json({message:'No post available'});
        }

        const updatePost = await postMessage.findByIdAndUpdate(_id,{ ...post, _id},{new:true});
        return res.status(200).json({updatePost});
    },
    deletePost: async(req, res) => {
        const {id} = req.params;
        console.log(id);

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:'No post available'});
        }

        const deletePost = await postMessage.findByIdAndDelete(id);
        return res.status(200).json({message:'Post deleted succesfully'});
    },

    likePost: async(req, res) => {
        console.log(123);

        const {id} = req.params;
        // console.log(id);

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:'No post available'});
        }

        const post = await postMessage.findById(id)

        const updatePost = await postMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new:true});
        return res.status(200).json({updatePost});
    },
 

    // updateUser: (req, res) => {

    //     let { name, phone, address } = req.body
    //     let id = req.params.id

    //     User.findOneAndUpdate({ _id: id }, {
    //             $set: {
    //                 name,
    //                 phone,
    //                 address
    //             }
    //         }, { new: true })
    //         .then(user => {
    //             if (user) {
    //                 res.status(201).json({
    //                     user
    //                 })
    //             } else {
    //                 return res.status(404).send({
    //                     message: "User not found!!!",
    //                 });
    //             }

    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 message: err.message || "Some error occurred while updating author"
    //             })
    //         })
    // },

    // userDelete: (req, res) => {
    //     let id = req.params.id

    //     User.findOneAndDelete({
    //             where: {
    //                 id: id
    //             }
    //         })
    //         .then(user => {
    //             if (user) {
    //                 return res.status(406).json({
    //                     message: "User deleted!"
    //                 })
    //             } else {
    //                 return res.status(406).json({
    //                     message: "User din't find!"
    //                 })
    //             }
    //         }).catch(error => {
    //             return res.status(400).json({ error })
    //         })

    // },

}