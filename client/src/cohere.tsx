type summarizeParams = {
    text: string,
    length?: "short" | "medium" | "long",
    format?: "paragraph" | "bullets" | "auto",
    extractiveness?: "low" | "medium" | "high" | "auto",
    temperature?: number
}

export const summarize = async (params: summarizeParams) => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer Dk2gK798k9q1lIGX8lN8KYaMDo6gNV8TrrPWp8Bx'
        },
        body: JSON.stringify(params)
    };
    
    try {
        const response = await fetch("https://api.cohere.ai/v1/summarize", options)
        return response.json()
    }
    catch (error) {
        console.error(error)
        return error
    }
}