describe("Goal Management", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.viewport("macbook-13");
	});

	it("Should allow adding a new goal", () => {
		cy.contains(
			"Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?",
		).should("exist");

		cy.get("button").contains("Cadastrar meta").should("exist").click();

		cy.contains("Qual a atividade?").should("exist");

		cy.get("input[id=title]").type("Nadar");

		cy.get("button[value=4]").click();

		cy.get("button").contains("Salvar").click();

		cy.get("button").contains("Fechar").click();
	});

	it("Should allow marking a goal as complete", () => {
		cy.contains("0%").should("exist");

		cy.contains("Nadar").should("exist").click();

		cy.contains("0%").should("not.exist");
	});
});
