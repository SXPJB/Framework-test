const {Router} =require('express')
const router=Router()
const {getConnection}=require('../db/database')

router.get('/getAll',async (req,res)=>{
    const conn= await getConnection();
    let response={}
    try {
        const data = await conn.query('SELECT id,name,surname,datebrith,gender FROM generaldata order by id ASC')
        response={
            success:true,
            message:'Result data correct',
            data:data
        }
    }catch (e) {
        response={
            success:false,
            message:'Error, no data insert',
            exception:e
        }
    }

    res.json(response)
})

router.post('/insert',async (req, res) => {
    const conn= await getConnection()
    let response={}
    try {
        const result=await conn.query('INSERT INTO generaldata SET ?',req.body)
        response={
            success:true,
            message:'Insert data correctly',
            data:result.insertId
        }
    }catch (e) {
        response={
            success:false,
            message:'Error, no data insert',
            exception:e
        }
    }
    res.json(response)
})

router.get('/delete',async (req, res) => {
    const conn= await getConnection()
    let response={}
    const { id } = req.query
    try {
        const result=await conn.query('delete from generaldata where id = ?',[id])
        response={
            success:true,
            message:'delete data correctly',
            data:result
        }
    }catch (e) {
        response={
            success:false,
            message:'Error, no data delete',
            exception:e
        }
    }
    res.json(response)
})


module.exports=router
