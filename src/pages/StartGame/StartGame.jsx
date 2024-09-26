import {  useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    const navigate = useNavigate();
    function handleSubmit(value){
        console.log(value);
        
        navigate('/play',{state:{wordSelected:value}});
    }

    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer  onSubmit={handleSubmit} />           
        </>
    )
}

export default StartGame;