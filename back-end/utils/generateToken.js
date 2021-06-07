import jwit from 'jsonwebtoken'

const generatetoken=(id)=>{
    return jwit.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

export default generatetoken