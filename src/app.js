import express from "express";

const express = require('express');
const jwt = require('jsonwebtoken');
const SignUp = require('./signup.controller');
const usersRoutes = require('./users'); // Importa las rutas de usuarios

const app = express();
app.use(express.json());

const signUpInstance = new SignUp();

// Aplica el prefijo "/api" a todas las rutas de usuarios
app.use('/api', usersRoutes);

// Settings
app.set("port", 4000);

// Middlewares
app.use(express.json());

// Middleware para autenticar el token
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
 
    if (!token) {
       return res.status(401).json({ error: 'Acceso no autorizado' });
    }
 
    try {
       // Verificar y decodificar el token
       const decoded = jwt.verify(token, 'secreto');
       req.user = decoded;
       next();
    } catch (error) {
       res.status(401).json({ error: 'Token inválido' });
    }
 };
 
 app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
 });

export default app;