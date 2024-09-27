
function getButtonStyling(styleType) {
    if(styleType === "primary") {
        return "m-5  bg-transparent hover:bg-black  text-black font-bold hover:text-white py-2 px-4 border border-white  hover:border-transparent rounded ";
    } else if (styleType === "secondary") {
        return "bg-gray-500";
    } else if(styleType === "error") {
        return "bg-red-500";
    } else if(styleType === "success") {
        return "bg-green-500";
    } else if(styleType === "warning") {
        return "m-5  bg-transparent hover:bg-black   font-bold hover:text-white py-2 px-4 border border-white  hover:border-transparent rounded ";
    }
}

export default getButtonStyling;