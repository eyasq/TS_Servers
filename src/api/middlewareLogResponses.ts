import { NextFunction , Request, Response} from "express";
import { APIConfig, stateObj } from "../config.js";

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
    stateObj.fileserverHits+=1;
    next();
}