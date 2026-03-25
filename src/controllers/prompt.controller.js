import handelGroq from "../api/aiApi.js";
import promptModel from "../models/prompt.model.js";

const handlePrompt = async (req, res) => {

    const { prompt, type, recipt, tone, length, language } = req.body;

    console.log('language', language);

    if (!prompt) {
        return res.status(401).json({
            success: false,
            message: 'Prompt is required'
        })
    }

    try {
        const reply = await handelGroq(prompt, type, recipt, tone, length, language)

        if (!reply) {
            return res.status(404).json({
                success: false,
                message: 'Data is not found'
            })
        }

        const data = await promptModel.create({
            prompt,
            reply
        })

        res.status(200).json({
            success: true,
            message: 'Responsed successfully',
            data,
        })

    }
    catch (err) {
        console.log('error in prompt', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }

}

export default handlePrompt