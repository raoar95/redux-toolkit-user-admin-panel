import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/all.js"
import { deleteUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const userData = useSelector((state) => {
        return state.users;
    })

    const deleteSelectedUser = (id) => {

        dispatch(deleteUser(id))

    }

    return (
    
    <>
    
     { 
     
      userData.map((data, index) => {
        
        return (
        <li key={index}>
        <span className="dataSpan">{index + ". " + data}</span> 
        <span className="btn-delete"><MdDeleteForever className="delete-icon" onClick={() => deleteSelectedUser(index)} /></span></li>
    )})
        
     }
        
    </>);
}

export default DisplayUsers;