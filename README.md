Codigo para el punto 1 de la prueba, BLOQUE PL/SQL.
CREATE TABLE PACIENTES (
   IDPACIENTE NUMBER PRIMARY KEY,
   IDENTIFICACION VARCHAR2(50),
   NOMBRE1 VARCHAR(50),
   NOMBRE2 VARCHAR(50),
   APELLIDO1 VARCHAR(50),
   APELLIDO2 VARCHAR(50),
   FECHANACIMIENTO VARCHAR(50),
   FECHACREACION VARCHAR(50),
   ESTADO VARCHAR(50),
   IDIDENTIFICACION NUMBER,
   CONSTRAINT fk_TIPOID
      FOREIGN KEY (IDIDENTIFICACION)
      REFERENCES PACIENTES(IDIDENTIFICACION)
);
CREATE TABLE TIPOS_IDENTIFICACION (
   IDIDENTIFICACION NUMBER PRIMARY KEY,
   NOMBRE VARCHAR2(50),
   ABREVIATURA VARCHAR(50),
   ESTADO VARCHAR(50)
);

//En esta funcion se cuentan los pacientes con la funcion COUNT* y dada la condicion de las fechas, de inicio y de fin, 
teniendo en cuenta el estado activo del paciente

CREATE OR REPLACE FUNCTION contar_pacientes(
   p_fecha_inicio DATE DEFAULT NULL,
   p_fecha_fin DATE DEFAULT NULL
) RETURN NUMBER IS
   v_cantidad_pacientes NUMBER := 0;
BEGIN
   SELECT COUNT(*)
   INTO v_cantidad_pacientes
   FROM pacientes
   WHERE (p_fecha_inicio IS NULL OR fecha_creacion >= p_fecha_inicio)
     AND (p_fecha_fin IS NULL OR fecha_creacion <= p_fecha_fin)
     AND estado = 'ACTIVO';

   RETURN v_cantidad_pacientes;
END contar_pacientes;
/

// Aqui invocamos en un bloque anonimo a la funcion creada anteriormente,para posteriormente imprimirlos en los intervalos de fechas en consola

-- Contar todos los pacientes
DECLARE
   v_total_pacientes NUMBER;
BEGIN
   v_total_pacientes := contar_pacientes();
   DBMS_OUTPUT.PUT_LINE('Total de pacientes: ' || v_total_pacientes);
END;

-- Contar pacientes en un intervalo de fechas
DECLARE
   v_pacientes_en_intervalo NUMBER;
BEGIN
   v_pacientes_en_intervalo := contar_pacientes(TO_DATE('2022-01-01', 'YYYY-MM-DD'), TO_DATE('2022-12-31', 'YYYY-MM-DD'));
   DBMS_OUTPUT.PUT_LINE('Pacientes en el intervalo de fechas: ' || v_pacientes_en_intervalo);
END;

Observaciones para tener en cuenta del punto2:

La clase principal es app, la cual enlaza al index.js, la logica de cada servicio se encuentra en los controllers, 
y las demas validaciones en los endpoints con las rutas, no se logro enlazar la base de datos correctamente, solo se configuraron los parametros.
