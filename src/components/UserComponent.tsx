import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserComponent: FC = () => {

    const state = useTypedSelector(state => state.user);
    console.log(state);
    return (
        <div>

        </div>
    );
};

export default UserComponent;