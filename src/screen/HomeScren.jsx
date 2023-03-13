import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import { getDatabase, ref, child, get } from "firebase/database";
import { auth } from '../config/Firebase'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const HomeScren = () => {
  const navigate = useNavigate()
  const dbRef = ref(getDatabase());
  const [data,setData] = useState({
    email:"",
    id:"",
    username:""
  })
  const location = useLocation()
  console.log(location.state.uids)

  const Getdata = () =>{
get(child(dbRef, `users/${location.state.uids}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    setData(snapshot.val())
    console.log("whole data" , data)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  }
  useEffect(()=>{
    Getdata();
  },[])
  const Handlelogout = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("signout Successfull")
    }).catch((error) => {
      // An error happened.
    });
    navigate("/")
  }
  return (
    <>
    <div>
      <ul className='d-flex justify-content-evenly'>
        <li className='btn btn-danger' onClick={Handlelogout}>Logout</li>
        <li>Email:{data.email}</li>
        <li>Uid:{data.id}</li>
        <li>User:{data.username}</li>
      </ul>
    </div>
    </>
  )
}

export default HomeScren