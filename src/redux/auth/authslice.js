import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
    auth: {
      auth: false
    }
      }


const authSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,
    reducers: {

    login: {
        reducer(state, action) {
            return {...state, auth: action.payload,}
        },
        prepare(){
          return{
            payload: {auth: true}
          }  
        }
    },

    logout: {
        reducer(state, action) {
            return {...state, auth: action.payload,}
        },
        prepare(){
            return{
              payload: {auth: false}
            }  
          }

    }

}
})


export const { login, logout } = authSlice.actions;

export const rootReducer = authSlice.reducer;