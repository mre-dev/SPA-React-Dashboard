import { Button, Input, Table } from 'components';
import { Main } from 'layouts';
import React, { useState } from 'react';
import Styles from './usersPage.module.css';
import tableData from 'utils/userData.json';
import Modal from 'react-modal';
import swal from 'sweetalert';


export const UsersPage = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [usersData, setUsersData] = useState(tableData);

    const tableColumns = [
        {
            Header: 'code',
            accessor: 'id',
            Filter: true
        },
        {
            Header: "First Name",
            accessor: "first_name",
            Filter: true
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
            Filter: true
        },
        {
            Header: 'Email',
            accessor: 'email',
            Filter: true
        },
        {
            Header: 'Gender',
            accessor: 'gender',
            Filter: true
        },
        {
            Header: 'Phone Number',
            accessor: 'phone_number',
            Filter: true
        }
    ];
    
    const submitFormHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        
        setUsersData([...usersData, {
            id: usersData[usersData.length - 1].id + 1,
            first_name: data.get('first_name'),
            last_name: data.get('last_name'),
            email: data.get('email'),
            phone_number: data.get('phone_number'),
            gender: data.get('gender')
        }]);

        setShowModal(false);
        
        swal({
            title: "Contact Added",
            text: "The Contact Added To the End of Table (Reset by Refresh)",
            icon: "success",
        });
    }

    return (
        <Main>
            <div className={Styles.UsersPage}>
                <div className={Styles.UsersPage__button}>
                    <Button text="+ New Contact" type="success" size="small" borderRadius click={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                    }} />

                    <Modal
                        isOpen={showModal}
                        ariaHideApp={false}
                        contentLabel="Add Category Modal"
                        onRequestClose={() => {
                            setShowModal(false);
                        }}
                        className={Styles.Modal}
                        overlayClassName={Styles.Overlay}
                    >
                        <form className={Styles.Modal__form} onSubmit={submitFormHandler}>
                            <Input name="first_name" id="first_name" type="text" placeholder="First Name" />
                            <Input name="last_name" id="last_name" type="text" placeholder="Last Name" />
                            <Input name="email" id="email" type="email" placeholder="Email" />
                            <Input name="phone_number" id="phone_number" type="number" placeholder="Phone Number" />
                            <select name='gender'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <Button text="Add" type="info" size="small" borderRadius btnType="submit"/>
                        </form>
                    </Modal>
                </div>
                <div>
                    <Table
                        columns={tableColumns}
                        data={usersData}
                        className={Styles.ordersTable}
                        pageSize={5}
                        sorting
                        pagination
                        filtering
                    />
                </div>
            </div>
        </Main>
    );
};
