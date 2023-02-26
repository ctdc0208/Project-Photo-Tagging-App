import React from "react";

const characterDropdownField = (props) => {
    return (
        <a
            key={props.title}
            className="character-dropdown-a"
            onClick={() => props.clicked(props.title)}
        >
            <div>
                <img
                    src={props.image}
                    alt={props.title} 
                />
                <div>{props.title}</div>
            </div>
        </a>
    );
};

export default characterDropdownField