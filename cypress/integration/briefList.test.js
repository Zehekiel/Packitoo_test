describe('BriefList display', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('list exist', ()=> {
    cy.get('[data-testid=briefList]').should('exist')
  })

  it('select exist', ()=> {
    cy.get('[data-testid=selectProductFilter]').should('exist')
  })

  it('loader exist at the beginning', ()=> {
    cy.get('[data-testid=loader]').should('exist')
  })

  it('list displayed instead of loader', ()=> {
    cy.get('[data-testid=loader]').should('exist')
    .get('[data-testid=loader]').should('not.exist')
    .wait(3000)
    .get('[data-testid=loader]').should('not.exist')
    .get('[data-testid=briefCardTitle]').should('exist')
  })
})


describe('test filter select', () => {
  beforeEach(() => {
    cy.visit('').wait(3000)
  })

  it('click on one type of product', () => {
    cy.get('[data-testid=selectProductFilter]')
    .click()
    .get('[data-testid=Item0]')
    .click()
    .get('[data-testid=briefCardProduct]')
    .first()
    .should('have.text', 'Bag Box')
    .last()
    .should('have.text', 'Bag Box')
  })

})
