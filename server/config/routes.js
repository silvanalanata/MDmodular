const { Router } = require("express");
const router = Router();

const {
  manadaGet,
  nuevoGet,
  nuevoPost,
  detalleIdGet,
  destruirGet,
  editarGet,
  editarPost,
} = require("../controllers/quotes");

router.get("/", manadaGet);

router.get("/mongoose/nuevo", nuevoGet);

router.post("/mongoose/nuevo", nuevoPost);

router.get("/detalle/:id", detalleIdGet);

router.get("/destruir/:id", destruirGet);

router.get("/editar/:id", editarGet);

router.post("/editar/:id", editarPost);

module.exports = router;
