import { uuid } from "drizzle-orm/gel-core";
import { NextFunction, Request, Response } from "express";
import { createUser } from "../db/queries/users.js";
import { NewUser } from "../db/schema.js";
import { BadRequestError } from "./errors.js";
export async function create_User(req:Request, res:Response, next:NextFunction){
    try{
    const email:string = req.body.email;
    if (!email){
        throw new BadRequestError("Missing required fields")
    }
    const user = await createUser({email:email});
    if (!user){
        throw new Error("Could not create user")
    }
    res.status(200).json({
        "id":user.id,
        "email":user.email,
        "createdAt":user.created_at,
        "updatedAt":user.updated_at
    })
    return
    }catch(e){
        next(e)
    }

}