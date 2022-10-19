const socket = io();

socket.on("msg_back", (data) => {
  render(data);
});

socket.on("data_ready", (data) => {
  render2(data);
});

const render = (data) => {
  let content = data

    .map((item) => {
      return `<p> <strong>${item.name} a las </strong> <span style="color:brown;">[${new Date().toLocaleString()}]</span><strong> dijo </strong>: ${item.msg} `;
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
        <td> <img src=${item.thumbnail} alt=${item.title} width="100" height="100"/> </td>
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
const anotherName = () => {
  let info = {
    title: document.querySelector("#inputName").value,
    price: document.querySelector("#inputPrice").value,
    thumbnail: document.querySelector("#inputThumb").value,
  };

  socket.emit("data_array", info);

  return false;
};
