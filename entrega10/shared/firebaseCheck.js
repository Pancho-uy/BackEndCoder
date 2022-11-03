function Check(body) {
  if (!body.nombre || !body.descripcion || !body.precio || !body.stock) {
    return false;
  } else {
    return true;
  }
}
module.exports = Check;
