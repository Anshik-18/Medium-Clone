import z from "zod"
export const signupinput = z.object({
    email :z.string().email(),
  password : z.string().min(7),
  name : z.string().optional()
})



export const signininput = z.object({
    email :z.string().email(),
  password : z.string().min(7),

})


export const createbloginput = z.object({
    title : z.string().min(8),
    content :z.string().max(200)
})


export const updatebloginput = z.object({
    title : z.string().min(8),
    content :z.string().max(200),
    id : z.string()
})


export type updatebloginput = z.infer<typeof updatebloginput>
export type signupinput = z.infer<typeof signupinput>
export type createbloginput = z.infer<typeof createbloginput>
export type signininput = z.infer<typeof signininput>
