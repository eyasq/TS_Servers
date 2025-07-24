import { uuid } from "drizzle-orm/gel-core";
import { NextFunction, Request, Response } from "express";
import { createUser } from "../db/queries/users.js";
import { NewUser } from "../db/schema.js";
export async function create_User(req:Request, res:Response, next:NextFunction){
    try{
    const email:string = req.body.email;
    const user : NewUser = {
        id: uuid().toString(),
        email: email
    }
    const user_to_create = createUser(user)
    res.status(200).send("HTTP 201 Created")
    return
    }catch(e){
        next(e)
    }

}