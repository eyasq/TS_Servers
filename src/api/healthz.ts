import { Request, Response } from "express";

export async function healthz(req:Request, res:Response){
    res.status(200);
    res.set("Content-Type","text/plain; charset=utf-8")
    res.send("OK")
}