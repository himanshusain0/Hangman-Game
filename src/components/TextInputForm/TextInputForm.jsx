import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType,value, handleFormSubmit, handleTextInputChange, handleShowHideClick }) {
   
    return (
        <form onSubmit={handleFormSubmit} className="justify-center border border-slate-400 rounded-md
        p-8 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30 relative
        items-center  " >
            <div className="relative my-4">
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div className="justify-center items-center flex ">
                <Button
                    
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div className="justify-center items-center flex">
                <Button 
                   onClickHandler={handleFormSubmit}
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;