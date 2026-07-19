function FruitList(){
    const fruits:string[] = ["Apple","banana","Cherry","Orange","Mango"];

    return (
        <>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </>
    )
}
export default FruitList;