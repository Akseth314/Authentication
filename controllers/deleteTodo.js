// import the model

const Todo = require("../models/Todo");

// define route handler

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status({
            success:true,
            message:"Todo Deleted successfully",
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
        {
            success:false,
            error:err.message,
            message:"Server error",
        })
    }
}



