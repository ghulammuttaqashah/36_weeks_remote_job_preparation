const {z}=require('zod');
const userSchema=z.object({
    name: z.string().min(1,'Name required'),
    email: z.string().min(1,"Email required"),
    password: z.string().min(6,'Password required atleast of 6 characters')
});

const userSchemaLogin=z.object({
        email: z.string().min(1,"Email required"),
    password: z.string().min(6,'Password required atleast of 6 characters')
});

module.exports={userSchema,userSchemaLogin};