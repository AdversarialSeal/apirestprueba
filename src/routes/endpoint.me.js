app.get('/api/me', authenticate, (req, res) => {
    res.json({ user: req.user });

    // Construye una respuesta HTML simple con la información del usuario
   const htmlResponse = `
   <html>
      <head>
         <title>Mi Perfil</title>
      </head>
      <body>
         <h1>Mi Perfil</h1>
         <p>Nombre de usuario: ${user.username}</p>
         <p>Correo electrónico: ${user.email}</p>
         <p>Nombre: ${user.firstName} ${user.lastName}</p>
      </body>
   </html>
`;

// Envía la respuesta HTML al usuario
res.send(htmlResponse);
});

 