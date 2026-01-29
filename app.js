import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
dotenv.config();

const __filename = fileURLToPath(import.meta.url); 
const __dirname=path.dirname(__filename); 

const app = express();
const port= process.env.port;

//vista
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


app.use(express.static('public'));

//controlador
app.get('/',(request, response)=>{

          response.render('home', {
                    nombre: 'Mariana Dehesa', 
                    titulo: 'Curso node'
          });
})

app.get("/index", (request, response)=>{
          response.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.get("/elements", (request, response)=>{
          response.sendFile(path.resolve(__dirname, 'public/elements.html'));
})

app.get("/generic.html", (request, response)=>{
          response.render('generic')
})

app.get(/.*/, (request, response)=>{
          response.sendFile(path.resolve(__dirname, 'public/404.html'));
})

app.listen(port, ()=>{
          console.log("Escuchando ahora el puerto ", port);
          
})