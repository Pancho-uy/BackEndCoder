export const WSNewUserTemplate = (id, date, usuario) => {
  return `
  <h2>¡Nuevo usuario creado con Exito!</h2>
  <p>Se ha creado un nuevo usuario</p>
  <ul>
      <li><strong>User Name:</strong> ${usuario}</li>
      <li><strong>UUID:</strong> ${id}</li>
      <li><strong>FECHA:</strong> ${date}</li>
  </ul>
  `
};