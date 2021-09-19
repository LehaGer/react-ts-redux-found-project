import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creator/user";
import {IUser} from "../types/user";
import {useActions} from "../hooks/useActions";

const UserComponent: FC = () => {

    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    const usersState = useTypedSelector(state => state.user);

    if(usersState.loading) {
        return (
            <h1>
                Loading...
            </h1>
        )
    }

    if(usersState.error) {
        return (
            <h1>
                {usersState.error}
            </h1>
        )
    }

    return (
        <div>
            {usersState.users.map(user =>
                <div key={user.id}>
                    {user.id} {user.surname} {user.name}
                </div>

            )}
        </div>
    );
};

export default UserComponent;