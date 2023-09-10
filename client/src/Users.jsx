import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "./redux/userSlice";
import { useEffect } from "react";


function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  // get users
    useEffect(() => {
        const fetchData = async () => {
           try {
             const response = await axios.get("http://localhost:3001")
             dispatch(getUser(response.data))
           } catch (error) {
             console.log(error)
           }
        }
        fetchData()
    }, [dispatch])


    // delete
 const handleDelete = (id) => {
  axios.delete('http://localhost:3001/deleteuser/'+id)
  .then(res => {
      dispatch(deleteUser({id}))
  }).catch(err => console.log(err))
}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <Link to="/create" className="btn btn-success btn-sm">
        Add +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
                users.map(user => {
                    return <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className="btn btn-sm btn-success me-2">Update</Link>
                            <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Users