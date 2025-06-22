const UserCard = ({name, age, city}) => {
    return(
        <>
            <h2>{name}</h2>
            <h3>Age: {age}</h3>
            <h3>City: {city}</h3>
        </>
    );
}

export default UserCard;