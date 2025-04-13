Cypress.Commands.add('Login',()=>{
    cy.visit('https://webdriveruniversity.com/index.html')
    cy.get('#contact-us').invoke('removeAttr', 'target').should('be.visible').click()
    cy.get('[name="first_name"]').should('be.visible').type('segun')
    cy.get('[name="last_name"]').should('be.visible').type('Thomas')
    cy.get('[name="email"]').type('thomseg@gmail.com')
    cy.get('textarea.feedback-input').type('this is amazing')
    cy.get('[type="submit"]').should('be.visible').and('be.enabled').click()
})
Cypress.Commands.add('Loginportal',()=>{
    cy.visit('https://webdriveruniversity.com/index.html')
    cy.get('#login-portal').invoke('removeAttr', 'target').click()
    cy.get('#text').should('be.empty').type('thomasJane')
    cy.get('#password').should('be.empty').and('be.visible').type('ThomasJane')
    cy.url().should('include', 'webdriveruniversity.com/Login-Portal')
    cy.get('#login-button').click()
})
Cypress.Commands.add('DropDowns',()=>{
    cy.visit('https://webdriveruniversity.com/index.html')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get(':nth-child(2) > .thumbnail > .section-title').click()
    cy.get('#dropdowm-menu-1').should('be.visible').and('be.enabled').select("python")
    cy.get('#dropdowm-menu-2').should('be.visible').and('be.enabled').select("testng")
    cy.get('#dropdowm-menu-3').should('be.visible').select("css")
    
})
Cypress.Commands.add('Checkboxes',()=>{
    cy.visit('https://webdriveruniversity.com/index.html')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get('#checkboxes').click()
    cy.get('#checkboxes > :nth-child(1) > input').should('be.visible').and('be.enabled').check("option-1")
    cy.get(':nth-child(3) > input').should('be.visible').and('be.enabled').check("option-2")
    cy.get(':nth-child(7) > input').should('be.visible').and('be.enabled').check("option-4")

})
Cypress.Commands.add('RadioButtons',()=>{
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    cy.get(':nth-child(4) > .thumbnail > .section-title').click()
    cy.get('[value="green"]').should('be.visible').and('be.enabled').check("green")
    cy.get('[value="blue"]').should('be.visible').and('be.enabled').check("blue")
})
Cypress.Commands.add('uploadFile',()=>{
    cy.get('#file-upload').invoke('removeAttr', 'target').click();
    cy.get('.thumbnail').should('be.visible');
    cy.get('h1').should('be.visible');
    cy.get('#myFile').attachFile('twitter 2.png', { force: true });
    cy.get('#submit-button').click()
})






