import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
        <h1 className="inline-block">
            MS
        </h1>
        <div className="inline-block">
            <button className="">
                Home
            </button>
            <button className="">
                About
            </button>
            <button className="">
                Services
            </button>
            <button className="">
                Portfolio
            </button>
            <button className="">
                Blog
            </button>
            <button className="">
                Contact
            </button>
        </div>
        <div className="inline-block">
            <button className="bg-sky-500 hover:bg-sky-700">
                LinkedIn
            </button>
            <button className="bg-sky-500 hover:bg-sky-700">
                Github
            </button>
            <button className="bg-sky-500 hover:bg-sky-700">
                Blog
            </button>
        </div>
    </div>
  )
}

export default Navbar