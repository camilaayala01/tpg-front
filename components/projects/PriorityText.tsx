

export default function PriorityText(text : string) {

    if(text === "HIGH") {
        return (
                <span className ="bg-blue-100  text-blue-800 px-4 py-2 font-medium border-b rounded-full">
                    HIGH
                </span>
        )
    }
    if(text === "MEDIUM") {
        return (
                <span className="bg-purple-100 text-purple-800 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    MEDIUM
                </span>
        )
    }
    if(text === "LOW") {
        return (
                <span className="bg-colorFinalizado text-green-900 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    LOW
                </span>
        )
    }
    
    return (
            <div className="text-sm leading-5 text-gray-900">{text}</div>
    )
}