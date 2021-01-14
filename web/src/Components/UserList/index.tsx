import React, {useEffect,useState} from 'react';
import api from '../../services/api';
import './userList.css';

interface User{
    id: number;
    first_name: string;
    last_name: string;
    participation: number;
}

function UserList(){
    const [users, setUser] = useState<User[]>([]);

    useEffect(()=>{
        api.get('users').then(resp=>{
            setUser(resp.data);
        })
    },[]);

  return(
    <table>
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Participation</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.participation}%</td>
                </tr>
            ))}
               
            </tbody>
        </table>
  );
}

export default UserList;