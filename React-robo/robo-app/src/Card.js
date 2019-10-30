import React from 'react'

const Card = (props) => {

    return (
        <div className='bg-light-green'>
            <img alt="Error Loading" src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )


}
export default Card;