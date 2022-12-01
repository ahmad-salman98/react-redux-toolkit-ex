import { addUser, deleteUser } from "./accountSlice";
import { useSelector, useDispatch } from "react-redux";

import React from 'react';

const Accounts = () => {
    const users = useSelector((state) => state.accounts.accounts);
    const dispatch = useDispatch();

    console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const customerName = e.target.name.value;
        const accountNumber = e.target.accNum.value;
        const accountType = e.target.accType.value;
        const newUser = { id: id, customerName: customerName, accountNumber: accountNumber, accountType: accountType }
        dispatch(addUser(newUser));
        console.log((newUser));
    }

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }



    return (
        <>
            <div className='d-flex justify-content-center align-items-center m-5 p-5 '>
                <div className='bank-img'>
                    <img src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?w=2000" alt="" />
                </div>
                <table className="table table-striped" id='table' style={{ width: '50%', minWidth: '300px', margin: 'auto 20% auto auto', borderRadius: '13px', boxShadow: '0 0 15px #00000025', background: ' #ffffff90' }}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">name</th>
                            <th scope="col">Account number</th>
                            <th scope="col">Account type</th>
                            <th scope="col">Delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.customerName}</td>
                                        <td>{user.accountNumber}</td>
                                        <td>{user.accountType}</td>
                                        <td> <span className='deleteUser' onClick={() => handleDelete(user.id)}> <i class="fa-solid fa-user-minus"></i> </span ></td>

                                    </tr>

                                );
                            })

                        }
                    </tbody>
                </table >
                {/* {console.log(users)} */}
            </div>
            <hr />
            <div>
                <h3 className='text-center mt-3 mb-0'>add new user</h3>
                <form action="" onSubmit={handleSubmit} className='newUserForm form-group' >
                    <input className='form-control my-3' type="number" name="id" placeholder='User id' />
                    <input className='form-control my-3' type="text" name="name" placeholder='User name' />
                    <input className='form-control my-3' type="text" name="accNum" placeholder=' account number' />
                    <input className='form-control my-3' type="text" name="accType" placeholder='account type' />
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        </>
    );
};

export default Accounts;

