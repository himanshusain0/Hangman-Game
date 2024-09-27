function TextInput({ type = "text", label, placeholder = "Enter your input here", onChangeHandler }) {

    return (
        <label>
            <span className="text-gray-700 m-4 font-bold text-2xl bg-gradient-to-r from-gray-600 via-gray-900 to-gray-950 bg-clip-text text-transparent ">{label}</span>
            <br />
            <input 
                type={type}
                className="bg-transparent w-[50rem]  m-4 border  rounded-lg p-4 text-black placeholder-black placeholder:font-bold placeholder:opacity-50 "
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
            
        </label>
        
    )
}

export default TextInput;