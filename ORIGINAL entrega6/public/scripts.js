const socket = io();

socket.on("mensaje", (data) => {
  render(data);
});

socket.on("data_pronta", (data) => {
  render2(data);
});

const render = (data) => {
  let content = data
    .map((item) => {
      return `<p> <strong>${item.name} a las </strong> <span style="color:brown;">[${new Date().toLocaleString()}]</span> dijo : ${item.msg} `;
    })
    .join(" ");
  document.querySelector("#chat").innerHTML = content;
};

const render2 = (data) => {
  let content = data
    .map((item) => {
      return `
      <tr>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td> <img src=${item.thumbnail} alt=${item.title} width="40" height="40"/> </td>
      </tr>`;
    })
    .join(" ");

  document.querySelector("#tabla").innerHTML = content;
};

const addMsg = () => {
  let info = {
    name: document.querySelector("#inpname").value,
    msg: document.querySelector("#inpmsg").value,
  };

  socket.emit("data_client", info);

  document.querySelector("#inpmsg").value = "";
  document.querySelector("#inpname").disabled = true;

  return false;
};
const otroProducto = () => {
  let info = {
    title: document.querySelector("#inputName").value,
    price: document.querySelector("#inputPrice").value,
    thumbnail: document.querySelector("#inputThumb").value,
  };

  socket.emit("mi_data", info);

  return false;
};