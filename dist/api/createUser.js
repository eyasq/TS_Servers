import { uuid } from "drizzle-orm/gel-core";
import { createUser } from "../db/queries/users.js";
export async function create_User(req, res, next) {
    try {
        const email = req.body.email;
        const user = {
            id: uuid().toString(),
            email: email
        };
        const user_to_create = createUser(user);
        res.status(200).send("HTTP 201 Created");
        return;
    }
    catch (e) {
        next(e);
    }
}
