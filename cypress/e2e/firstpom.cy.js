import {elements} from '../fixtures/selector'
describe('PAGE OBJECT PRACTICE',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal', 'Swag Labs')
    })

    it('standard User',()=>{
        cy.get(elements.userNameField).type(elements.standardUser)
        cy.get(elements.passWordField).type(elements.passWord)
        cy.get(elements.loginButton).click()
        
    })
    it('lockedoutuser',()=>{
        cy.get(elements.userNameField).type(elements.lockedOutUser)
        cy.get(elements.passWordField).type(elements.problemUSer)
        cy.get(elements.loginButton).click()

    })

    it('problem user',()=>{
        cy.get(elements.userNameField).type(elements.problemUSer)
        cy.get(elements.passWordField).type(elements.problemUSer)
        cy.get(elements.loginButton).click()

    })
})