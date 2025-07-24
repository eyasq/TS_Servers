import e, { NextFunction , Request, Response} from "express";
import { config } from "../config.js";
import { BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError } from "./errors.js";

export function middlewareLogResponses(req:Request,res:Response,next:NextFunction){
    res.on("finish",()=>{
        const statusCode = res.statusCode;
        if (statusCode >=400){
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${statusCode}`)
        }
    })
    next();
}

export function middlewareMetricsInc(req:Request, res:Response, next:NextFunction){
    config.api.fileserverHits+=1;
    next();
}

export function handleErr(err:Error, req:Request, res:Response, next:NextFunction){
    if (err instanceof BadRequestError){
        res.status(400).send({
            "error":err.message
        })
    }
    else if(err instanceof UnauthorizedError){
        res.status(401).send({
            "error":err.message
        })
    }
    else if(err instanceof ForbiddenError){
        res.status(403).send({
            "error":err.message
        })
    }
    else if(err instanceof NotFoundError){
        res.status(404).send({
            "error":err.message
        })
    }
    else{
        res.status(500).send({
            "error":err.message
        })
    }
}

