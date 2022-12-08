Entrega15

Para ejecutar el proyecto en modo FORK o CLUSTER lo haremos directamente en PM2

Se levantan los 4 clusters en los puertos 8082/8083/8084/8085:
pm2 start ./src/server.js --name="Clust-p8082" --watch -i 2  -- -p 8082
pm2 start ./src/server.js --name="Clust-p8083" --watch -i 2  -- -p 8083
pm2 start ./src/server.js --name="Clust-p8084" --watch -i 2  -- -p 8084
pm2 start ./src/server.js --name="Clust-p8085" --watch -i 2  -- -p 8085

Se configura NGINX para que balancee las peticiones entre los 4 clusters:

events {
}

http {

    upstream node_app {
        server localhost:8082;
        server localhost:8083;
        server localhost:8084;
        server localhost:8085;
    }
    server {
        listen 80;
        server_name nginx_node;
        root "C:\Users\Pancho\Downloads\Full Stack Dev\BackendCoder\BackEndCoder\entrega15\src\views\pages\login.hbs";

        location /info/ {
            proxy_pass http://node_app;
        }

    }

}