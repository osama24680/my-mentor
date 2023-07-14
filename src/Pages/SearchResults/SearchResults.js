import React from 'react'
import "./SearchResults.scss"
import Footer from '../../Components/HomeComponents/Footer/Footer'
import SearchHeader from "../../Components/SearchComponent/SearchHeader/SearchHeader"
import { Outlet } from 'react-router-dom'
import Navbar from "../../Components/HomeComponents/Navbar/Navbar"
const SearchResults = () => {
  return (
    <>
      <Navbar />
      <div className='SearchResults'>
        <SearchHeader />
        <div className='SearchResultsContent'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>

  )
}

export default SearchResults