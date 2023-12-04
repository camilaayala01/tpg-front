export default function SeverityText(text : string) {

    if(text === "S1") {
        return (
            <span className ="bg-green-100  text-green-800 px-4 py-2 font-medium border-b rounded-full">
                    S1
                </span>
        )
    }
    if(text === "S2") {
        return (
            <span className="bg-yellow-100 text-yellow-800 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    S2
                </span>
        )
    }
    if(text === "S3") {
        return (
            <span className="bg-orange-100 text-orange-900 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    S3
                </span>
        )
    }
    if(text === "S4") {
        return (
            <span className="bg-red-100 text-red-800 font-medium me-2 px-4 py-2 whitespace-no-wrap border-b rounded-full">
                    S4
                </span>
        )
    }
    return (
        <div className="text-sm leading-5 text-gray-900">{text}</div>
    )
}