import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export const EmployeeTable = () => {


    
        const [users,setUsers] = useState([]);




        useEffect( () =>    {
           
         axios.get("https://jsonplaceholder.typicode.com/users").then( (res) => setUsers(res.data)).catch((err) => console.log(err));

         

},[])


        console.log(users)
  return (





  
    <div className='container'>
              <div className='table'>

                <Table responsive>
                <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
                  {users.map(user => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>)}
                  </tbody>
                </Table>
                       
              </div>
    </div>
  )
}
