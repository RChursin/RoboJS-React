import React from "react";
import "./Card.css";

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5'>
            <img className="br-100 h4 w4 ba b--black-10 pa3 ma2 grow bw2 shadow-5" src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p> <a href={`mailto:${email}`}>{email}</a> </p>
            </div>
        </div>
    );
}

export default Card;