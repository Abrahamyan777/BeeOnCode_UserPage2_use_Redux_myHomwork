import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";

export const DELETE_USER = "DELETE_USER"
export const deleteAC = (id) => {
    return {type: DELETE_USER , payload: id}
}




export const GET_USERS = "GET_USERS"
export const getUsersAC = (newData) => {
    return {type: GET_USERS, payload:newData}
}