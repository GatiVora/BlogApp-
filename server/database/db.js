import mongoose from "mongoose"
export const Connection = async (username,password) =>{
    
    // const URL=`mongodb://${username}:${password}@ac-rpr3xwi-shard-00-00.lcgnjy8.mongodb.net:27017,ac-rpr3xwi-shard-00-01.lcgnjy8.mongodb.net:27017,ac-rpr3xwi-shard-00-02.lcgnjy8.mongodb.net:27017/?ssl=true&replicaSet=atlas-10ha93-shard-0&authSource=admin&retryWrites=true&w=majority`;

    const URL=`mongodb://${username}:${password}@ac-rpr3xwi-shard-00-00.lcgnjy8.mongodb.net:27017,ac-rpr3xwi-shard-00-01.lcgnjy8.mongodb.net:27017,ac-rpr3xwi-shard-00-02.lcgnjy8.mongodb.net:27017/?ssl=true&replicaSet=atlas-10ha93-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try{
            await mongoose.connect(URL,{useNewUrlParser:true});
            console.log("Database Created Successfully");
    }catch(error){
       console.log("Error");
    }
}

export default Connection;