const Animal = require("../models/manada");

const manadaGet = (request, response) => {
  Animal.find()
    .then((animal) => {
      /* if(animal.length === 0){
            console.log("no hay animales")
        }*/
      {
        response.render("index", { animales: animal });
      }
    })
    .catch((err) => response.json(err));
};

const nuevoGet = function (request, response) {
  response.render("nuevo", { mensaje: "" });
};

const nuevoPost = function (request, response) {
  console.log(request.body);
  const { introducir_nombre, introducir_edad, introducir_tipo } = request.body;
  const animal = new Animal();
  animal.nombre = introducir_nombre;
  animal.edad = introducir_edad;
  animal.tipo = introducir_tipo;
  animal
    .save() //hace inser
    .then(() => response.render("nuevo", { mensaje: "agregado con exito" }))

    .catch((error) => {
      console.log(error);
    });
};

const detalleIdGet = (request, response) => {
  let id = request.params.id;
  // let gato_id=gatos_array[id]

  Animal.findOne({ _id: id })
    .then((animal) => {
      // lógica con un solo resultado de objeto de usuario
      {
        response.render("detalle", { animales: animal });
      }
    })
    .catch((err) => response.json(err));
};

const destruirGet = function (request, response) {
  let id = request.params.id;

  Animal.remove({ _id: id })
    .then((animal) => {
      {
        response.redirect("/");
      }
    })
    .catch((err) => response.json(err));
};

const editarGet = function (request, response) {
  let id = request.params.id;

  Animal.findOne({ _id: id })
    .then((animal) => {
      // lógica con un solo resultado de objeto de usuario
      {
        response.render("editar", { animales: animal });
      }
    })
    .catch((err) => response.json(err));
};

const editarPost = function (request, response) {
  let id = request.params.id;

  // ...actualiza un documento que coincida con el criterio de objeto de la consulta
  Animal.updateOne(
    { _id: id },
    {
      nombre: request.body.introducir_nombre,
      edad: request.body.introducir_edad,
      tipo: request.body.introducir_tipo,
    }
  )
    .then((animal) => {
      response.redirect("/"); // lógica con resultado -- este será el objeto original por defecto
    })
    .catch((err) => response.json(err));
};

module.exports = {
  manadaGet,
  nuevoGet,
  nuevoPost,
  detalleIdGet,
  destruirGet,
  editarGet,
  editarPost,
};
