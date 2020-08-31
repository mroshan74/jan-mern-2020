const express = require('express')
const port = 3040
const app = express()

app.use(express.json())

app.post('/submit_names',(req,res) => {
    const data = req.body.data
    const male = [],female = []
    data.map(ele => {
        if(ele.gender=='male'){
            male.push(ele)
        }
        else{
            female.push(ele)
        }
    })
    res.json({
        male,
        female, 
        male_count : male.length,
        female_count : female.length
    })
})

app.post('/segregate_names',(req,res) => {
    const data = req.body.data
    const male = [], female = []
    data.map((ele) => {
      if (ele.gender == 'male') {
        male.push(ele.name)
      } else {
        female.push(ele.name)
      }
    })
    res.json({
      male,
      female,
      male_count: male.length,
      female_count: female.length,
    })
})

app.listen(port,()=>{
    console.log('Listening to port',port)
})