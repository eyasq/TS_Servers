import { createUser } from "../db/queries/users.js";
import { BadRequestError } from "./errors.js";
export async function create_User(req, res, next) {
    try {
        const email = req.body.email;
        if (!email) {
            throw new BadRequestError("Missing required fields");
        }
        const user = await createUser({ email: email });
        if (!user) {
            throw new Error("Could not create user");
        }
        res.status(200).json({
            "id": user.id,
            "email": user.email,
            "createdAt": user.created_at,
            "updatedAt": user.updated_at
        });
        return;
    }
    catch (e) {
        next(e);
    }
}
