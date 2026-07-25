function Header(){

    const name:string = "Sonam Soni"
    return(
        <>
            <h2>This is My Header</h2>
            <h2 style={{color:"purple"}}>
                Welcome {name}</h2>
        </>
    )
}
export default Header;