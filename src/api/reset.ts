import { NextFunction,Request,Response } from "express";
import { config } from "../config.js";

export async function handlerReset(_:Request, res:Response, next:NextFunction){
    try{
    config.api.fileserverHits = 0;
    res.send("Resetted hits")
        }catch(e){
            next(e)
        }
}