import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createbloginput } from "@anshikjain/medium-common";
import { updatebloginput } from "@anshikjain/medium-common";


export const blogrouter = new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET : string
    },
    Variables:{
        userId:string
    }
  }>()





blogrouter.use('/*',async (c,next)=>{

  const token = c.req.header("Authorization")||" "

  let response
  try{
       response = await verify(token,c.env.JWT_SECRET)

  }
  catch(e){
    return c.json({
        message:"unauthorized"
    })
  }
  
  if(response.id){
      c.set("userId",response.id as string)
      await next()
    }
    else{
        c.status(411)
        return c.json({message:"unathorized"})
    }

})



blogrouter.post('/post', async (c) => {
  
      const prisma = new PrismaClient({
        // @ts-ignore
        datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
        const body = await  c.req.json();
        const {success}  = createbloginput.safeParse(body)
        if(!success){
            c.status(411)
            return c.json({messagege:"sorry wrong inputs "})
        }  
        // const id= c.get('userId')
        const blog = await prisma.post.create({
            data :{
                title:body.title,
                
                content:body.content,
                authorId : c.get('userId')
                

            }
        })
        return c.json({
            message:"succssfullly created",
            id:blog.id
        })
        
})

blogrouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        // @ts-ignore
        datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
        const body = await  c.req.json();
        const {success} = updatebloginput.safeParse(body)
        if(!success){
            c.status(411)
            return c.json({
                message:"wrong inputs"
            })
        }   
        const blog = await prisma.post.update({
            where:{
                id:body.id
            },
            data :{
                title:body.title,
                content:body.content,
            }
        })
        return c.json({
            message:"successfully updated",
            id:blog.id
        })
        
})


blogrouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        // @ts-ignore
        datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
  const blog = await prisma.post.findMany({
    select:{
        content:true,
        title:true,
        id:true,
        author:{
            select:{
                name:true
            }
        }

    }
  })
  return c.json({
    blog
  })
})



blogrouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
     
        datasourceUrl: c.env.DATABASE_URL,}).$extends(withAccelerate())
        const body =   c.req.param("id");

        try{  
                const blog = await prisma.post.findFirst({
            where:{
                id:body
            },
            select:{
                id:true,
                title:true ,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }

            }

        })
    

        return c.json({
            blog
        })
    }
    catch(e){
        c.status(403)
        return c.json({message:"some problem"})
    }
        
})



