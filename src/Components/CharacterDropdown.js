import characterDropdownField from "../Utilities/CharacterDropdownField";
// import character png's


const characterDropdown = ({
    characters = [],
    show,
    clickLocation,
    clicked,
}) => {

    const getCharacterImg = (character) => {
        switch(character) {
        // case "character"
        // return character

        // default 
        default:
            break;
        }
    };

    const characterDropdownFields = () => {
        return characters.map((character) => {
            return (
                <characterDropdownField
                    image={getCharacterImg(character.name)}
                    title={character.name}
                    clicked={clicked}
                />
            )
        })
    };

    return (
        <div className={`${show ? "absolute" : "hidden"}`} style={clickLocation}>
            <div
                className="character-dropdown-menu"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                <characterDropdownFields />
            </div>
        </div>
    );
};

export default characterDropdown