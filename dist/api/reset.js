import { ForbiddenError } from "./errors.js";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
process.loadEnvFile("./.env");
export async function handlerReset(_, res, next) {
    try {
        if (process.env.PLATFORM != 'dev') {
            throw new ForbiddenError("You are not allowed here.");
        }
        const result = await db.delete(users);
        res.status(200).send("Deleted all users");
    }
    catch (e) {
        next(e);
    }
}
