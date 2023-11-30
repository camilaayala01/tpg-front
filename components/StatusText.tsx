

export default function StatusText (text : string) {

    if(text === "IN_PROGRESS") {
        return (
                <span className ="bg-blue-100  text-blue-800 px-4 py-2 font-medium border-b rounded-full">
                    In Progress
                </span>
        )
    }
    if(text === "NOT_STARTED") {
        return (
                <span className="bg-purple-100 text-purple-800 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    Not Started
                </span>
        )
    }
    if(text === "COMPLETED") {
        return (
                <span className="bg-colorFinalizado text-green-900 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    Completed
                </span>
        )
    }
    if(text === "BLOCKED") {
        return (
                <span className="bg-colorBloqueado text-yellow-800 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    Blocked
                </span>
        )
    }
    return (
            <div className="text-sm leading-5 text-gray-900">{text}</div>
    )
}