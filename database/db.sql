-- to create a new database
CREATE DATABASE crudnodejsmysql;

-- to use database
use crudnodejsmysql;
CREATE TABLE ciclo(numeroCiclo INT NOT NULL AUTO_INCREMENT,
                    primary key (numeroCiclo));

CREATE TABLE alumno (codigoAlumno INT NOT NULL AUTO_INCREMENT,   
                    ciclo INT NOT NULL,                 
					apellidos VARCHAR(60) NOT NULL,
                    nombres VARCHAR(60)NOT NULL,
                    ponderado FLOAT NOT NULL,
					contra VARCHAR(60)NOT NULL,
                    primary key (codigoAlumno),
     foreign key (ciclo) references ciclo(numeroCiclo)) ;


CREATE TABLE curso (idCurso INT NOT NULL AUTO_INCREMENT,   
                    cicloCurso INT NOT NULL,                 
					nombreCurso VARCHAR(60) NOT NULL,
                    nombreProfesor VARCHAR(60)NOT NULL,
                    primary key (idCurso),
     foreign key (cicloCurso) references ciclo(numeroCiclo)) ;

USE crudnodejsmysql;
SELECT *
FROM alumno
JOIN ciclo
ON alumno.ciclo= ciclo.numeroCiclo
JOIN curso
ON ciclo.numeroCiclo=curso.cicloCurso;
