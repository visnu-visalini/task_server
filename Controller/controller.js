import todoCollections from "../Model/model.js";

export const addTodo = async(req,res) =>{
    try{
        const data=new todoCollections(req.body);
        await data.save()
        res.status(201).json({mess:"data has been stored"})
    }
    catch(err){
        res.status(400).json({message:err})
    }
}

export const getTodo = async(req,res) =>{
    try{
        const data =await todoCollections.find();
        res.json(data)
    }
    catch(err){
        res.status(500).json({message:err})
    }
}

export const updateTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        const updatedData = await todoCollections.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updatedData);
    }
    catch(err){
        res.status(500).json({message:err})
    }
}

export const deleteTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        await todoCollections.findByIdAndDelete(id);
        res.json({message: "Todo deleted successfully"});
    }
    catch(err){
        res.status(500).json({message:err})
    }
}