"use strict"

var conn = require("../config/db-connection"),
  AlumnoModel = () => {};

AlumnoModel.getAll = (cb) => conn.query("SELECT * FROM ALUMNO", cb);

AlumnoModel.getOne = (id, cb) =>
  conn.query(
    "SELECT * FROM ALUMNO WHERE NO_CUENTA = $1", [id], cb
    );

AlumnoModel.post = (data, cb) => 

             conn.query( "call public.sp_alumno_insert ($1,$2,$3,$4)",
              [
                data.no_cuenta,
                data.nombre,
                data.apellido,
                data.indice
              ],
              cb);

AlumnoModel.put = (data, cb) => 
             conn.query(
              "call public.sp_alumno_update ($1,$2,$3,$4)",
              [
                data.no_cuenta,
                data.nombre,
                data.apellido,
                data.indice
              ],
              cb
            );

AlumnoModel.delete = (id, cb) =>
  conn.query(
    "call sp_alumno_delete ($1)", [id], cb
    );

module.exports = AlumnoModel;
