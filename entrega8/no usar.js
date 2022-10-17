  // Grabo chatlog.txt
  //
/*   socket.on("data_client", (data) => {
    msgs.push(data);
    //para enviarle a todos
    io.sockets.emit("mensaje", msgs);
    
    // Grabo en filesystem
    fs.unlink("chatlog.txt", (err) => {
      if (err) throw "Error al borrar el LOG";
    });
    fs.writeFile("chatlog.txt", "", "utf-8", (err) => {
      if (err) throw "Error al crear el nuevo LOG";
    });
    fs.appendFile("chatlog.txt", JSON.stringify(msgs), "utf-8", (err) => {
      if (err) throw "Error al escribir en el LOG";

      console.log("LOG actualizado");
    });
  }); */
  // Grabo productos en array
/*   socket.on("mi_data", (data) => {
    productos.push(data);
    io.sockets.emit("data_pronta", productos);
  }); */