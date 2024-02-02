const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
 });
 
 db.connect((err) => {
    if (err) {
       console.error('Error de conexión a la base de datos:', err);
    } else {
       console.log('Conexión exitosa a la base de datos');
    }
 });

 const signUpInstance = new SignUp(db);