function Content(){

    const loggedIn:boolean=true
    return(
        <>
            <h3>{loggedIn ? "Welcome User" : 
            "please Login!"}</h3>
        </>
    )
}
export default Content;