
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('App display', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('briefForm', ()=> {
    cy.get('[data-testid=briefForm]').should('exist')
  })

  it('briefList', ()=> {
    cy.get('[data-testid=briefList]').should('exist')
  })
})