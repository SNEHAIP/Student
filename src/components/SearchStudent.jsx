import React, { useState } from 'react'
import NavBar from './NavBar'
import { useActionData } from 'react-router-dom'

const SearchStudent = () => {
const [data,setData]=useState(
    {
    "name":""
    }
)
const inputHandler=(event)=>(setData({...data,[event.target.name]:event.target.value})
)
const readValue=()=>{
    console.log(data)
}
  return (
    <div>
         <NavBar/>

        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="form-label">Student Name</label>
                        <input type="text" className="form-control" name='name'value={data.name}onChange={inputHandler} />
                    </div>
                    <div className="col col-12 sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button class="btn btn-success"onClick={readValue}>SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default SearchStudent