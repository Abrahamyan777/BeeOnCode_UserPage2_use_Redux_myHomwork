import React, { useEffect, useState } from 'react';
import css from './userList.module.css'
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import { deleteAC, getUsersAC } from "../store/actions/actionCreators";
import img1 from "../images/4.png";
import Loading from './Loading/loading';

const UserList = () => {

    const { users } = useSelector(state => state.usersReducer)

    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch(deleteAC(id))
    }
    const [isOpen, setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
        setUserName('')
        setUserAge(0)
    }
    const openModal = () => setOpen(true)

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState(0)
    const [userFirstName, setUserFirstName] = useState("")
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id: title === "ADD" ? Math.random() : userId,
            name: userFirstName,
            age: userAge,
            image : img1
        }
        if (title === "ADD") {
            dispatch({ type: "ADD_USER", payload: data })
        } else {
            dispatch({ type: "EDIT_USER", payload: data })
        }
    }
    function handleAdd() {
        openModal()
        setTitle("ADD")
    }

    function handleEdit(id, firstName, age) {
        openModal()
        setTitle("EDIT")
        setUserFirstName(firstName);
        setUserAge(age);
        setUserId(id)
    }
    useEffect(() => {
        fetch("https://dummyjson.com/users").then(function (data) {
            return data.json()
        }).then(function (data) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(dispatch(getUsersAC(data.users)))
                }, 5000)
            })
        })
    }, [])


    return (
        <div className={css.userListSection}>
            {users.length !== 0
                ?
                <ul className={css.list}>
                    <li className={css.listFirstItem}>
                        <h4>Add User</h4>
                        <button onClick={handleAdd}>Add</button>
                    </li>
                    {  
                        users.map(({id, firstName, phone, image, age, email }) => {
                            return (
                                <li key={id} className={css.listItem}>
                                    <div className={css.leftSide}>
                                        <div className={css.left}>
                                            <img className={css.avatar} alt="User dont have avatar" src={image} />
                                            <h3 className={css.name}>{firstName}</h3>
                                        </div>
                                        <div className={css.right}>
                                            <h4>{`id: ${id}`}</h4>
                                            <h4>{`Age: ${age}`}</h4>
                                            <h4>{`Phone: ${phone}`}</h4>
                                            <h4>{`Email: ${email}`}</h4>
                                        </div>
                                    </div>
                                    <div className={css.sectionForButtons}>
                                        <button className={css.edit} onClick={() => handleEdit(id, firstName,  age)}>Edite</button>
                                        <button className={css.delete} onClick={() => deleteUser(id)}>Delete</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                :
                <div>
                    <Loading />
                </div>
            }
            {isOpen &&
                <Modal onClose={closeModal}>
                    <form onSubmit={handleSubmit}>
                        <h1>{title}</h1>
                        <input type="text" placeholder='id' value={userId} onChange={({ target }) => setUserId(target.value)} />
                        <input
                            type="text"
                            value={userAge} 
                            onChange={({ target }) => setUserAge(target.value)}
                            placeholder="age"
                        />
                        <input type="text"
                            value={userFirstName}
                            onChange={({ target }) => setUserFirstName(target.value)}
                            placeholder='firstName'
                        />
                        <button>Save</button>
                    </form>
                </Modal>
            }
        </div>
    );
};

export default UserList;