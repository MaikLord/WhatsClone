import React, { useState } from 'react';
import ReactDom from 'react-dom';

import { LeftMenuDiv, UserMessage, AddNewMessage, User } from '../styles';

import UserName from '../components/UserName.jsx'

import user from '../assets/user.jpg';

function LeftMenu() {

    const DivMessage = () => {
        return <UserMessage> <User src={user} /> <UserName />  </UserMessage>;
    };
    const [userMessage, setMessage] = useState([]);

    const onAddBtnClick = event => {
        setMessage(userMessage.concat(<DivMessage key={userMessage.length} />));
    };


    return (
        <>
            <LeftMenuDiv>
                <AddNewMessage onClick={onAddBtnClick}>Adicionar Mensagem</AddNewMessage> {userMessage}
            </LeftMenuDiv>
        </>
    );
}


export default LeftMenu;