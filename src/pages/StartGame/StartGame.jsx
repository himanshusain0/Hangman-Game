import {  useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    const navigate = useNavigate();
    function handleSubmit(value){
        console.log(value);
        
        navigate('/play',{state:{wordSelected:value}});
    }

    return (
        <div className=" h-[100vh] bg-cover  ">
            <h1 className="text-gray-700 m-4 font-bold text-4xl bg-gradient-to-r from-gray-600 via-gray-900 to-gray-950 bg-clip-text text-transparent justify-center items-center flex ">Start Game</h1>
            <TextInputFormContainer  onSubmit={handleSubmit} />           
        </div>
    )
}

export default StartGame;