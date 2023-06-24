import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import {DELETE_USER, GET_USERS} from "../actions/actionCreators";

const initialState = {
    users : []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case "ADD_USER" :
            return {
                users: [...state.users, action.payload]
            }
        case "EDIT_USER" :
            return {
                users: state.users.map((user)=>{
                    if(user.id === action.payload.id){

                        return action.payload
                    }else{
                        return user
                    }
                })
            }

        default:
            return state
    }
}