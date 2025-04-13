import {element} from '../fixtures/oscselector'
describe('register',()=>{
    it('create',()=>{
        cy.visit('https://osc-ultimate-demo.mageplaza.com/')
        cy.get(element.removeAd).click()
        cy.get(element.signIn).click()
        cy.get(element.createUser).should('be.visible').click()
        cy.get(element.firstNameField).type(element.firstName)
        cy.get(element.lastNameField).type(element.lastName)
        cy.get(element.emailAddressField).type(element.emailAddress)
        cy.get(element.dateOfBirthField).type(element.dateOfBirth)
        cy.get(element.passWordField).type(element.passWord)
        cy.get(element.confirmPassWordField).type(element.confirmed)
        cy.get(element.createAccountField).click()

    })
    it.only('sign in',()=>{
        cy.visit('https://osc-ultimate-demo.mageplaza.com/')
        cy.get(element.signIn).should('be.visible').click()
        cy.get(element.signinEmail).type(element.emailAddress)
        cy.get(element.signInPassword).type(element.confirmed)
        cy.get(element.loginBtn).click()
        cy.get(element.men).click()
        cy.get(element.jackets).click()
        cy.get(element.beamount).should('be.visible').click()
        cy.get(element.removeAd).click()
        cy.get(element.size).click()
        cy.get(element.color).click()
        cy.get(element.addcart1).click()
        // cy.get(element.streetAddField).type(element.streetAdd)
        // cy.get(element.shipingPhno).type(element.shipingPhno)
        // cy.get(element.sameAsBillingAdd).click()
        // cy.get(element.cashOnDelivery).click()
        // cy.get(element.placeOrder).click
    
        

        
    })
})