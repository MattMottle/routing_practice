import {useParams} from "react-router-dom"

const IsNumber = (props) => {
    const { input, color, backgroundColor } = useParams();
return(
    isNaN(input)?
    <h1 style={color?{color: color, backgroundColor: backgroundColor, fontSize: 20+"pt", textAlign: "center"} :null }>This is a word: {input}</h1>
    :
    <h1 style={{fontSize: 20+"pt", textAlign: "center"}}>This is a number: {input}</h1>
)
}

export default IsNumber;