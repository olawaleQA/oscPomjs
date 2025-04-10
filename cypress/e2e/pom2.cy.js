describe('POM FIXTURES 1',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal','Swag Labs')
    })

    it('standard user',()=>{
        cy.fixture('example').then((exl)=>{
            cy.get(exl.userNameField).type(exl.standardUser)
            cy.get(exl.passWordField).type(exl.passWord)
            cy.get(exl.loginButton).click()
        })
        
    })
    it('lockedout User',()=>{
        cy.fixture('example').then((ex)=>{
            cy.get(ex.userNameField).type(ex.lockedOutUser)
            cy.get(ex.passWordField).type(ex.passWord)
            cy.get(ex.loginButton).click()
        })
    })
    it('problem user',()=>{
        cy.fixture('example').then((emp)=>{
            cy.get(emp.userNameField).type(emp.problemUSer)
            cy.get(emp.passWordField).type(emp.passWord)
            cy.get(emp.loginButton).click()

        })
    })
})