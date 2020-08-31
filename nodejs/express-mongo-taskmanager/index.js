const express = require('express')
const mongoose = require('mongoose')
const port = 3035

const app = express()
app.use(express.json())

// connecting to the database
mongoose.connect('mongodb://localhost:27017/jan-db')
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('error',err)
    })

// creating a schema of database (fields) and validation
const Schema = mongoose.Schema

// this is like a constructor function
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    }
})

const Task = mongoose.model('Task',taskSchema)

// url - localhost:3035/tasks
// method - GET
// action - fetch all the tasks from the db and send
app.get('/tasks', (req,res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks)
        })
        .catch((err) => {
            res.json(err)
        })
})

// url - localhost:3035/tasks
// method - POST
// action - take the incoming data and save it to database
app.post('/tasks', (req,res) => {
    const body = req.body
    const task = new Task(body) // passing the value (body) directly to the constructor
    // Task.title = body.title etc..
    task.save()
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
})

// url - localhost:3035/tasks/:id
// method - GET
// action - find the task by id and return it to user
app.get('/tasks/:id',(req,res) => {
    const id = req.params.id
    Task.findById(id)
        .then((task) => {
            if(task){
                res.json(task)
            }else{
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

// url - localhost:3035/tasks/:id
// method - DELETE
// action - delete the task by id
app.delete('/tasks/:id',(req,res) => {
    const id = req.params.id
    Task.findByIdAndDelete(id)
        .then((task)=>{
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
})

// url - localhost:3035/tasks/:id
// method - PUT
// action - find the task by id and update
app.put('/tasks/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  Task.findByIdAndUpdate(id,body,{ new : true, runValidators : true })
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.listen(port, () => {
    console.log('Listening to port', port)
})