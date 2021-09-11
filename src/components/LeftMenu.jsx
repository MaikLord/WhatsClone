import React, { useState } from 'react';

import { LeftMenuDiv } from '../styles';



function LeftMenu() {

    const [show, setShow] = useState(false);

    return (
        <>
            <LeftMenuDiv>
                <h1></h1>
                <ul>
                    <a href=""><li>Perfil</li></a>
                    <a href=""><li>Status</li></a>
                    <a href=""><li>Conversa</li></a>
                    <a href=""><li>Configurações</li></a>
                </ul>
            </LeftMenuDiv>
        </>
    );
}

export default LeftMenu;