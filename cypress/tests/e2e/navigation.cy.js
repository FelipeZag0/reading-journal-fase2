describe("Navegação entre páginas", () => {
  it("Deve navegar entre as páginas corretamente", () => {
    cy.visit("/");
    
    // Verificação simplificada
    cy.get('button[data-cy="home-button"]').should("have.class", "btn-active");
    
    // Navegação com verificação de conteúdo
    cy.get('button[data-cy="about-button"]').click();
    cy.contains("h2", "Sobre").should("be.visible");
    
    cy.get('button[data-cy="register-button"]').click();
    cy.contains("h2", "Cadastro").should("be.visible");
    
    cy.get('button[data-cy="booklist-button"]').click();
    cy.contains("h2", "Lista de Livros").should("be.visible");
  });
});