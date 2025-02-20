import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { signupinput } from "@anshikjain/medium-common";
import { signininput } from "@anshikjain/medium-common";

export const userrouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET : string
    }
  }>()


  userrouter.post('/signup', async (c) => {
  
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
      const body = await  c.req.json();
      const result  = signupinput.safeParse(body)
     
      if(!result.success){
        c.status(411)
        return c.json({message:"Inputs are not correct",error:result.error.format()})
      }
    try {
     const user =  await prisma.user.create({
        data:{
          email:      body.email,
          password:   body.password,
          name:body.name
          
        },
        
      })
      const token = await sign({id:user.id},c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })
    }
    catch(e)
    {
      c.status(411)
      return c.json({message:"Invalid"})
    }
  
  
  })
  
  
  
  
  userrouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({

      datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
      const body = await  c.req.json();
      const {success} = signininput.safeParse(body)
      if(!success){
        c.status(411)
        return c.json({
          message:"wrong inputs"
        })
      }
  
      const user  = await prisma.user.findUnique({
        where:{
          email :body.email,
          password :body.password
        }
      })
  
      if(!user){
        c.status(403)
        return c.json({message:"the user not found"})
      }
      const token = await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({token})
    
  })
  
  
  