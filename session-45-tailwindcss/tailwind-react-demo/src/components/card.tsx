type CardProps = {
    title: string;
    children: React.ReactNode
}
function Card({title,children} : CardProps) {
    return ( 
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
     );
}

export default Card;
//apply tailwind CSS here