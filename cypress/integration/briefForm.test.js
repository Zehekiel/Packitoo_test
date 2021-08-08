describe('BriefForm display', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('input for title', ()=> {
    cy.get('[data-testid=titleInput]').should('exist')
  })

  it('input for title', ()=> {
    cy.get('[data-testid=commentInput]').should('exist')
  })

  it('select for product', ()=> {
    cy.get('[data-testid=selectProduct]').should('exist')
  })

})

describe('test inputs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('title is successfully full', () => {
    cy.get('[data-testid=titleInput]')
    .type('Hello, World') 
  })

  it('comment is successfully full', () => {
    cy.get('[data-testid=commentInput]')
    .type('Hello, World') 
  })

  it('successfully click on select product', () => {
    cy.get('[data-testid=selectProduct]')
    .should('contain', 'Tous les produits')
    .click()
    .get('[data-testid=Item0]')
    .click()
    .should('not.contain', 'Tous les produits')
  })

})

describe('test submit button', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('error message is not displayed', () => {
    cy.get('.errorText')
    .should('not.exist')
  })

  it('button is successfully click', () => {
    cy.get('[data-testid=buttonSubmit]')
    .click()
  })

  it('button is click and error message displayed', () => {
    cy.get('[data-testid=buttonSubmit]')
    .click()
    .get('.errorText')
    .should('exist')
  })

})

describe('add new brief', ()=>{
  it('can add new brief', () => {
    const newBrief = {title: 'Test Title', comment: 'Test Comment'}

    cy.get('[data-testid=titleInput]')
    .type(newBrief.title)

    cy.get('[data-testid=commentInput]')
    .type(newBrief.comment)

    cy.get('[data-testid=selectProduct]')
    .click()
    .get('[data-testid=Item0]')
    .click()

    cy.get('[data-testid=buttonSubmit]')
    .click()

    cy.get('[data-testid=briefCardTitle]')
      .last()
      .should('have.text', newBrief.title)
  })
})