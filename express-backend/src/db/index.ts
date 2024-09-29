import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({ 
    username: String, 
    password: String, 
}); 

const adminSchema = new mongoose.Schema({ 
    username: String, 
    password: String,
}); 

export const User = mongoose.models.User || mongoose.model('User', userSchema); 
export const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);  

