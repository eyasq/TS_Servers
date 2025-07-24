import { config } from "../config.js";
export async function handlerReset(_, res, next) {
    try {
        config.api.fileserverHits = 0;
        res.send("Resetted hits");
    }
    catch (e) {
        next(e);
    }
}
