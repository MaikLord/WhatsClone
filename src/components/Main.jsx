import React, { useState } from 'react';

import { Title, Button, MainDiv, Message, User, Search, Smile } from '../styles';
import user from '../assets/user.jpg';
import searchIcon from '../assets/search-solid.svg';
import smileIcon from '../assets/smile-regular.svg';

function Main() {

    const [show, setShow] = useState(false);

    return (
        <>
            <MainDiv>
                <Title onClick={() => setShow(!show)}>
                    <div>
                        <User src={user} />
                    </div>
                    <div>
                        <h1>Lucas</h1>
                        <h5>You</h5>
                    </div>
                    <Search src={searchIcon} />
                </Title>
                <Message>
                    <Smile src={smileIcon} />
                    <div>
                        <input type="text" />
                    </div>
                </Message>
            </MainDiv>
        </>
    );
}
export default Main;