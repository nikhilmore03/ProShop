import bcrypt from 'bcrypt'

const users=[
    {
        name:"Nikhil More",
        email:"nikhil@example.com",
        password:bcrypt.hashSync('1234567',10),
        isAdmin:true
},
{
    name:"Nikhil Fadatare",
    email:"nikhilf@example.com",
    password:bcrypt.hashSync('1234567',10),
},
{
    name:"Vijay Kamble",
    email:"vijay@example.com",
    password:bcrypt.hashSync('1234567',10),
}
]

export default users