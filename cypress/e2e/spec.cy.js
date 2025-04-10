describe('LOGIN', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.title().should('equal', 'Swag Labs')
  })


  it('standard_user',() => {
    cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('standard_user')
    cy.get('[data-test="password"]').should('be.empty').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Thomas')
    cy.get('[data-test="lastName"]').type('Jerry')
    cy.get('[data-test="postalCode"]').type('980483')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="back-to-products"]').click()

  })
  it('Lockedoutuser',() => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

  })
  it('problemuser',() => {
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

  })
})
