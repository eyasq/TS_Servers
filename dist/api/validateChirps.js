import { BadRequestError } from "../api/middlewareLogResponses.js";
export async function validate_chirp(req, res, next) {
    try {
        res.header("Content-Type", "application/json");
        const body = req.body.body;
        if (typeof body != "string") {
            res.status(400).json({ "error": "Body is missing or is not a string" });
        }
        const profane = ["kerfuffle", "sharbert", "fornax"];
        const bodyArr = body.split(' ');
        if (bodyArr.some((word) => profane.includes(word.toLowerCase()))) {
            for (let i = 0; i < bodyArr.length; i++) {
                if (profane.includes(bodyArr[i].toLowerCase())) {
                    bodyArr[i] = '****';
                }
            }
        }
        const cleanedBody = bodyArr.join(' ');
        if (cleanedBody.length > 140) {
            throw new BadRequestError("Chirp is too long. Max length is 140");
        }
        const respBody = {
            "cleanedBody": cleanedBody
        };
        res.status(200).json(respBody);
        return;
    }
    catch (e) {
        next(e);
    }
}
