
///<reference types="cypress"/>///<reference types="cypress"/>

const enviroment="https://demoqa.com/books"

const dymamicText=[
    "Git Pocket Guide",
    "Learning JavaScript Design Patterns",
    "Designing Evolvable Web APIs with ASP.NET",
    "Understanding ECMAScript 6"
]
// Locators
const inputBookId="#searchBox"
const tableResultsBooksClass=".mr-2"
const textElementsEmpty=".rt-noData"


class SearchBoooksPages{
    entryEnviroment(){
        cy.visit(enviroment)
    }
    typeText(element){
        cy.get(inputBookId)
        .clear()
        .type(element)

    }
    verifySearch(expectBooks,expectText){
        cy.get(tableResultsBooksClass)
        .should("have.length",expectBooks)
        .should("contain.text",expectText)
    }
//Verify the example in the documentation of the technical exercise. 
    verifyDynamicsElements(){
        cy.get(tableResultsBooksClass).each(((item,index,list)=>{
            expect(list).to.have.length(4)
            expect(Cypress.$(item).text()).to.eq(dymamicText[index])
        }))
    }

    verifySearchWithoutResults(){
        cy.get(textElementsEmpty)
        .should("be.visible")
        .should("contain.text","No rows found")
    }

}

export default SearchBoooksPages;