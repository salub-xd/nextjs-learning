"use client";
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { currentUser } from '@/services/userService';
import { toast } from 'react-toastify';

export default function UserProvider({ children }) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {

        async function load() {

            try {
                const currtUser = await currentUser();
                // console.log(currtUser);
                setUser({ ...currtUser });
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message,{
                    position:"top-center"
                })
                setUser(undefined);
            }
        }
        load();
    }, []);
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}
