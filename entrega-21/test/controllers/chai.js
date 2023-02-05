import chai from 'chai';
import supertest from 'supertest';
import app from '../../src/server.js'; 
const expect = chai.expect;

const request = supertest(app);

describe("Productos API", () => {
    describe("Get all products", () => {
        it("should return an array of products", (done) => {
            request.get("/api/productos")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an("array");
                    done();
                });
        });
    });

    describe("Get product by id", () => {
        it("should return a product object", (done) => {
            request.get("/api/productos/:id")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an("object");
                    done();
                });
        });
    });

    describe("Create a product", () => {
        it("should return a 201 status code and the created product object", (done) => {
            request.post("/productos")
                .send({ name: "producto de prueba", price: 100 })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.be.an("object");
                    done();
                });
        });
    });

    describe("Update a product", () => {
        it("should return a 200 status code and the updated product object", (done) => {
            request.put("/productos/:id")
                .send({ name: "producto actualizado", price: 150 })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an("object");
                    done();
                });
        });
    });

    describe("Delete a product", () => {
        it("should return a 204 status code", (done) => {
            request.delete("/productos/:id")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(204);
                    done();
                });
        });
    });
});