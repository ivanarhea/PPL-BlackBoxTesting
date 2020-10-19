/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Ivanarhea Endagavrila Clareta')
        cy.get('[placeholder ="Email"][type="text"]').type('ivanarhea04@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('ivanarhea04@gmail.com')
        cy.get('#inputPassword2').type('hahahaha')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('ivanarhea04@gmail.com')
        cy.get('#exampleInputPassword1').type('hahahaha')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Ivanarhea Endagavrila Clareta')
        cy.get('[placeholder="Subject"]').type('Tugas PPL BlackBoxTesting')
        cy.get('[placeholder="Message"').type('Semangat Mengerjakan')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Ivanarhea')
        cy.get('#inputLastName').type('Clareta')
        cy.get('#inputEmail').type('ivanarhea04@gmail.com')
        cy.get('#inputWebsite').type('www.canva.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('ivanarhea04@gmail.com')
        cy.get('#inputPassword3').type('hahahaha')
        cy.get('.custom-checkbox').last().click()
    })

});