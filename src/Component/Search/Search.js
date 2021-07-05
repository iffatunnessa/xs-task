import React from 'react';

const Search = () => {
    const handleSearch = e => {
        console.log(e.target.name, e.target.value);
        const value = e.target.value;
        // fetch(`http://localhost/api/list.php/${value}`)
        
            
    }
    return (
        <div>
            <input id='searchField' name='searchField' onChange={handleSearch} />
        </div>
    );
};

export default Search;