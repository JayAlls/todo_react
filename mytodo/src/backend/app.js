const express = require('express');
const mongoose = require("mongoose");
const app = express();

const Task = require("./models/Task");

mongoose.connect('mongodb+srv://Jayalls:7XPsqfIpfQdpQDt0@cluster0.esocnkm.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.post("/tasks", (req, res, next) => {
    delete req.params._id;
    const task = new Task({
        ...req.body
    });
    task.save()
        .then(() => res.status(201).json({ message: 'Tâche créé !'}))
        .catch(error => res.status(400).json({ error }))
})

app.delete("/tasks/:id", (req, res, next) => {
    Task.deleteOne({ id: req.params.id })
        .then(() => res.status(200).json({ message: 'Tâche supprimée !'}))
        .catch(err => res.status(400).json({ err }))
})

app.put("/tasks/:id", (req, res, next) => {
  Task.updateOne({ id: req.params.id}, {...req.body, id: req.params.id})
    .then(() => res.status(200).json({message: "Tâche modifiée"}))
    .catch(err => {
      res.status(400).json({ err });
      return; // ajout de la déclaration "return" pour éviter l'envoi de plusieurs réponses
    });
});


app.get("/tasks", (req, res, next) => {
    Task.find()
        .then(task => res.status(200).json(task))
        .catch(err => res.status(404).json({ err }))
})

    
module.exports = app;