describe("Buscar fotos e dados", () => {
    it.only("buscar fotos do flavio", () => {
        const tempoEsperado = Math.random() * 3000;

        cy.request({
            method: "GET",

            url: "https://apialurapic.herokuapp.com/flavio/photos",
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).not.empty;
            expect(res.body[0]).have.property("description");
            expect(res.body[0].description).to.equal("Farol iluminado");
            expect(res.duration).to.be.lte(tempoEsperado);
        });
    });

    it("fazer login do flavio", () => {
        cy.request({
            method: "POST",
            url: "https://apialurapic.herokuapp.com/user/login",
            body: Cypress.env()[0],
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).not.empty;
            expect(res.body).have.property("id");
            expect(res.body.id).to.equal(1);
            expect(res.body).have.property("email");
            expect(res.body.email).to.equal("flavio@alurapic.com.br");
            expect(res.body).have.property("name");
            expect(res.body.name).to.equal("flavio");
        });
    });
});
