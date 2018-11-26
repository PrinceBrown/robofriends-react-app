import React from 'react';


const Cards = ({id, name, username, email}) =>{

        return(
            <div className='dib ma2 pa2 br3 bg-light-blue grow shadow-5 '>
               
              
                <img alt='robofriend' src= {`https://www.robohash.org/${id}?200x200`} />
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
               
            </div>
        );
}

export default  Cards;