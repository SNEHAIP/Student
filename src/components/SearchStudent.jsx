import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
         <NavBar/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="form-label">Student Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button class="btn btn-success">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default SearchStudent