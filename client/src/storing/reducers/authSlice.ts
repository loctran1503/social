import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { AuthSliceState } from "../../types/storing";






const initialState : AuthSliceState = {
    isAuthenticated:false,
    user:null,
    isLoading:true,
    access_token:null
}


//Check authenticate
export const checkAuthenticate = createAsyncThunk('checkAuth',async ()  =>{
 
})

//User Sign up
export const userSignup = createAsyncThunk('userSignup',async ()   =>{
  
})

//User login
export const userLogin = createAsyncThunk('userLogin',async ()  =>{

})

//User logout
export const userLogout = createAsyncThunk('userLogout',async ()  =>{

})





const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
      setIsLoading(state,action){
      
      },
    },
    extraReducers:(builder) =>{
      // Check Authenticate Case
      builder.addCase(checkAuthenticate.pending,(state) =>{
  
      });
      builder.addCase(checkAuthenticate.fulfilled,(state,action ) =>{
        
       
      });
   
    
      // Sign Up Case
      builder.addCase(userSignup.pending,(state) =>{
    
      });
      builder.addCase(userSignup.fulfilled,(state,action ) =>{
     
      });
      // Log In Case
      builder.addCase(userLogin.pending,(state) =>{

      });
      builder.addCase(userLogin.fulfilled,(state,action ) =>{
     
      });
      
       // Log Out Case
       builder.addCase(userLogout.pending,(state) =>{
        
      });
      builder.addCase(userLogout.fulfilled,(state,action ) =>{
      
      });
       
        
  
    
    }
})

const authReducer = authSlice.reducer;
export const authSelector = (state: RootState) => state.auth;
export const { setIsLoading} =
  authSlice.actions;

export default authReducer;