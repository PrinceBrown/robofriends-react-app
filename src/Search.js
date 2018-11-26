import React from 'react';

const Search = ({userIsTyping}) => {

    return (
        <div className=''>
             <input className='bg-lightest-blue w-40 pa2 ma2' onChange={userIsTyping} type = 'Search' name = 'Search' placeholder = 'Search Robofriends' />
        </div>
    );


}

export default Search;