import React, { useState } from 'react';

import { UserNameH1 } from '../styles';

function UserName() {

    const name = "Usuário";

    return (
        <>
            <h3>{name}</h3>
        </>
    );
}

export default UserName;