import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import '../App.css';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInput = e => {
        setSearchValue(e.target.value);
    }

    return (
        <div id="home">
            <div className="jumbotron">
                <h1 className="display-4"><i className="fas fa-music"></i> <span>Music Comes,</span> Alive</h1>
                <p className="lead">Welcome to the &#127925; Song Hunter , Here you can find your favourite Artist's Track &#127928;, so Please listen your favourite Track and enjoy your time..&#128522;&#128522;&#128522;</p>
                <hr className="my-4" />
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        aria-label="Search"
                        value={searchValue} 
                        onChange={handleSearchInput}
                        type="text" 
                        placeholder="Search For Your Favourite Artist Tracks. &#127925;&#127925;" 
                    />
                    {
                        searchValue.length === 0 ? <Alert/> : 
                        <Link className="btn btn-warning" type="submit" to={`/search/${searchValue}`}>
                            <i className="fas fa-search faa-flash animated"></i>
                        </Link>
                    }
                    
                </form>
            </div>
        </div>
    );
}

export default Search;
