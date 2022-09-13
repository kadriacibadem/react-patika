import PropTypes from "prop-types"

function Header({name,friends,address}){
    return(
       <>
            <p>{name}</p>
            <p>{address.title}</p>
            <p>{address.zip}</p>
            

            {friends.map((friend,index)=>(
                <div>{friend}</div>
                    
                
            ))}
       </> 
    )
}

Header.propTypes={
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

Header.defaultProps ={
    name: "kadri",
}

export default Header;