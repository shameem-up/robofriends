import React from "react";

const Card = ({name, id, email}) => {
        return (
            <div className="bg-yellow dib br3 pa3 ma2 bw2 grow shadow-5 tc">
                <img alt='characters' src={`https://robohash.org/${id}?size=200x200`} />
                <div>
                    <h3> {name} </h3>
                    <h4> {email} </h4>
                </div>
            </div>
        );
}

export default Card;