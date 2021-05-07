const Button = ({text, color, onClick}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
    )
}

export default Button