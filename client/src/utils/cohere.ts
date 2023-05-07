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
  const prefix =
    "Generate a number of concise questions and answers in an array of JSON objects from the following text:\n";
  const suffix =
    '\nFor example, format the output like this:\n[\n{\n"question": "question goes here",\n"answer": "answer goes here"\n}\n]\n\nOnce again, keep it at 5 question and answer pairs';

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },

    body: JSON.stringify({
      model: "command",
      prompt:
        prefix +
        text.substring(0, 4096 - (prefix.length + suffix.length)) +
        suffix,
      temperature: 0,
      max_tokens: 3000,
    }),
  };

  try {
    const response = await fetch("https://api.cohere.ai/v1/generate", options);
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
