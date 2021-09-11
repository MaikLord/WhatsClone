import React, { useState } from 'react';
import reactDom from 'react-dom';

import { LeftMenuDiv } from '../styles';

function LeftMenu() {

    const [show, setShow] = useState(false);

    return (
        <>
            <LeftMenuDiv>
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