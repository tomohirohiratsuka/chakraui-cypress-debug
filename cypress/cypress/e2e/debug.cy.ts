describe('Debug', () => {
    // no problem
    it('Check no css patterns, CSR page', () => {
        cy.visit('/no-ui-lib')
        cy.get('[data-test=button2]').click()
    })
    it('Check no css patterns, SSR page', () => {
        cy.visit('/no-ui-lib/1')
        cy.get('[data-test=button2]').click()
    })
    // it seems re-rendering change the element attributes on chakraui+emotion+nextjs
    it('FOUC debug, CSR page', () => {
        cy.visit('/chakra-ui')
        cy.get('[data-test=tab2]').invoke('attr', 'id').then((initialId) => {
            cy.log(initialId)
            cy.wait(1000)
              cy.get('[data-test=tab2]').invoke('attr', 'id').then((secondId) => {
                cy.log(secondId)
                  expect(initialId).not.eq(secondId)
              })
        })
    })
    it('FOUC debug, SSR page', () => {
        cy.visit('/chakra-ui/1')
        cy.get('[data-test=tab2]').invoke('attr', 'id').then((initialId) => {
            cy.log(initialId)
            cy.wait(1000)
            cy.get('[data-test=tab2]').invoke('attr', 'id').then((secondId) => {
                cy.log(secondId)
                expect(initialId).not.eq(secondId)
            })
        })
    })
    // Almost all the time this fails, but sometimes it passes. IDK why yet.
    it('FOUC prevent click initial element?, CSR page', () => {
        cy.visit('/chakra-ui')
        cy.get('[data-test=tab2]').click()
    })
    // this fails all the time
    it('FOUC prevent click initial element?, SSR page', () => {
        cy.visit('/chakra-ui/1')
        cy.get('[data-test=tab2]').click()
    })
})