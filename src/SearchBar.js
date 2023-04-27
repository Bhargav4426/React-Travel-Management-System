import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import "./SearchBar.css";
const SearchBar=()=>{
  const naviagte = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchValue.toLowerCase().includes("kerala")) {
        naviagte(`/keralatourpackages`);
    } 
    else if(searchValue.toLowerCase().includes("goa")) {
        naviagte(`/goatourpackages`);
    }
    else if(searchValue.toLowerCase().includes("rajasthan")) {
        naviagte(`/rajasthantourpackages`);
    }
    else if(searchValue.toLowerCase().includes("kashmir")) {
        naviagte(`/kashmirtourpackages`);
    }
    else if(searchValue.toLowerCase().includes("lehladakh" || "ladakh" || "leh ladakh")) {
        naviagte(`/lehladakhtourpackages`);
    }
    else if(searchValue.toLowerCase().includes("himachal")) {
        naviagte(`/himachaltourpackages`);
    }
    else if(searchValue.toLowerCase().includes("andaman")) {
        naviagte(`/andamantourpackages`);
    }
    else if(searchValue.toLowerCase().includes("uttarakhand")) {
        naviagte(`/uttarakhandtourpackages`);
    }
    else if(searchValue.toLowerCase().includes("karnataka")) {
        naviagte(`/karnatakatourpackages`);
    }
    else if(searchValue.toLowerCase().includes("tamilnadu")) {
        naviagte(`/tamilnadutourpackages`);
    }
    else if(searchValue.toLowerCase().includes("dubai")) {
        naviagte(`/dubaitourpackages`);
    }
    else if(searchValue.toLowerCase().includes("malaysia")) {
        naviagte(`/malaysiatourpackages`);
    }
    else if(searchValue.toLowerCase().includes("singapore")) {
        naviagte(`/singaporetourpackages`);
    }
    else if(searchValue.toLowerCase().includes("thailand")) {
        naviagte(`/thailandtourpackages`);
    }
    else if(searchValue.toLowerCase().includes("bali")) {
        naviagte(`/balitourpackages`);
    }
    else if(searchValue.toLowerCase().includes("europe")) {
        naviagte(`/europetourpackages`);
    }
    else if(searchValue.toLowerCase().includes("mauritius")) {
        naviagte(`/mauritiustourpackages`);
    }
    else if(searchValue.toLowerCase().includes("maldives")) {
        naviagte(`/maldivestourpackages`);
    }
    else if(searchValue.toLowerCase().includes("australia")) {
        naviagte(`/australiatourpackages`);
    }
    else if(searchValue.toLowerCase().includes("srilanka")) {
        naviagte(`/srilankatourpackages`);
    }
    else if(searchValue.toLowerCase().includes("honeymoon")) {
        naviagte(`/honeymoontourpackages`);
    }
    else if(searchValue.toLowerCase().includes("adventure")) {
        naviagte(`/adventuretourpackages`);
    }
    else if(searchValue.toLowerCase().includes("family")) {
        naviagte(`/familytourpackages`);
    }
    else if(searchValue.toLowerCase().includes("weekend" || "getaway")) {
        naviagte(`/weekendgetawaytourpackages`);
    }
    else {
      alert(`Sorry, no results found for "${searchValue}"`);
    }
    setSearchValue("");
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
  };

  return (
    <div className="bgdiv">
    <div className="search-bar-container">
      <div class="input-wrapper" id="search">
           <input type="text" id="form1" placeholder="Search Places Example Kerala" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyPress={handleKeyPress}/>
           <button type="submit" class="btn btn-primary" onClick={handleSearch} >
           <FontAwesomeIcon icon={faSearch}/>
           </button>
      </div>
  </div>
  </div>
  );
}
export default SearchBar;