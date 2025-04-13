describe('contact us webDriver',()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/index.html')
    })

    it('Contact us',()=>{
        cy.Login()
    })
    it('Portal',()=>{
        cy.Loginportal()
    })
    it('dropDowns',()=>{
        cy.DropDowns()
    })
    it('checkBoxes',()=>{
        cy.Checkboxes()
    })
    it('radioButtons',()=>{
        cy.RadioButtons()
    })
    it('fileupload',()=>{
        cy.uploadFile()
    })
})