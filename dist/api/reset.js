import { config } from "../config.js";
import { ForbiddenError } from "./errors.js";
import { reset } from "../db/queries/users.js";
process.loadEnvFile("./.env");
export async function handlerReset(_, res, next) {
    try {
        if (config.api.platform != 'dev') {
            throw new ForbiddenError("Reset only allowed in dev environment..");
        }
        config.api.fileserverHits = 0;
        await reset();
        res.write("Hits reset to 0");
        res.end();
    }
    catch (e) {
        next(e);
    }
}
