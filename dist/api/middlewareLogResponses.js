import { config } from "../config.js";
import { BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError } from "./errors.js";
export function middlewareLogResponses(req, res, next) {
    res.on("finish", () => {
        const statusCode = res.statusCode;
        if (statusCode >= 400) {
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${statusCode}`);
        }
    });
    next();
}
export function middlewareMetricsInc(req, res, next) {
    config.api.fileserverHits += 1;
    next();
}
export function handleErr(err, req, res, next) {
    if (err instanceof BadRequestError) {
        res.status(400).send({
            "error": err.message
        });
    }
    else if (err instanceof UnauthorizedError) {
        res.status(401).send({
            "error": err.message
        });
    }
    else if (err instanceof ForbiddenError) {
        res.status(403).send({
            "error": err.message
        });
    }
    else if (err instanceof NotFoundError) {
        res.status(404).send({
            "error": err.message
        });
    }
    else {
        res.status(500).send({
            "error": err.message
        });
    }
}
