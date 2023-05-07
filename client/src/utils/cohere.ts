const key = import.meta.env.VITE_API_KEY;

type summarizeParams = {
  text: string;
  length?: "short" | "medium" | "long";
  format?: "paragraph" | "bullets" | "auto";
  extractiveness?: "low" | "medium" | "high" | "auto";
  temperature?: number;
};

export const summarize = async (params: summarizeParams) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(params),
  };

  try {
    const response = await fetch("https://api.cohere.ai/v1/summarize", options);
    return await response.json();
  } catch (error) {
    console.error(error);
    return "UR A BOZO";
  }
};

export const generate = async (text: string) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "command",
      prompt: `Generate 5 concise questions and answers in an array of JSON objects from the following text:\n${text}`,
      temperature: 0,
      max_tokens: 625,
    }),
  };

  try {
    const response = await fetch("https://api.cohere.ai/v1/generate", options);
    return response.json();
  } catch (error) {
    console.error(error);
    return "UR A BOZO";
  }
};
