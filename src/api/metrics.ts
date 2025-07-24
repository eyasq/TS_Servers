import { NextFunction,Request,Response } from "express";
import { config } from "../config.js";


export async function metrics(req:Request, res:Response, next:NextFunction){
    try{
        res.set("Content-Type", 'text/html; charset=utf-8')
    res.send(`
            <html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited ${config.api.fileserverHits} times!</p>
  </body>
</html>

        `)
    }catch(e){
        next(e)
    }
}