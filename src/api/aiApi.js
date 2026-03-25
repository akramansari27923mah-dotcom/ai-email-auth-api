import Groq from 'groq-sdk'

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})


const handelGroq = async (prompt, type, recipt, tone, language, length) => {

    const prompts = `
You are an expert email writer.

Write a ${tone} ${type} email in ${language}.

Follow these strict rules:
- Keep the tone ${tone}
- Make it clear, polite, and professional
- Do NOT use emojis
- Avoid unnecessary repetition
- Use simple and easy-to-understand language
- Length should be ${length}

Format EXACTLY like this:

Subject: <Write a concise and relevant subject line>

Dear ${recipt || "Sir/Madam"},

<Write 2-4 well-structured paragraphs based on the user input. 
Each paragraph should be short and clear. 
Explain the purpose clearly and politely.>

<Add a proper closing line like "Looking forward to your response" or similar>

Best regards,  
<Your Name>

User Input:
${prompt}
`;

    const response = await groq.chat.completions.create({
        messages: [

            {
                role: 'system',
                content: prompts
            },

            {
                role: 'user',
                content: prompt
            },
        ],
        model: 'openai/gpt-oss-20b'
    })

    return response.choices[0]?.message.content || ''

}

export default handelGroq