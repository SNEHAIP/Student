import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "Admno":"",
            "rollno":"",
            "Parentname":""
        }
    )

    const inputHandler=(event)=>(
        setData({...data,[event.target.name]:event.target.value})
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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="form-label">Name</label>
                            <input type="text" className="form-control" name='name'value={data.V}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="form-label">Admno</label>
                            <input type="number" className="form-control"name='Admno'value={data.Admno}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="form-label">Rollno</label>
                            <input type="number" className="form-control"name='rollno'value={data.rollno}onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="form-label">Parent Name</label>
                            <input type="text" className="form-control" name='Parentname'value={data.Parentname}onChange={inputHandler} />

                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default AddStudent