// Enviroment
    const url="https://demoqa.com/login"
// Locators 
    const inputUserNameId="#userName"
    const inputPassWordId="#password"
    const btnLoginClass="#login"
    const textloginIncorrectId="#name"
//Locators when logging in
    const textUserConnectid="#userName-value"
    const btnLogoutId="#submit"
    const btnGoStore="#gotoStore"
// Locators when loggin out 
    const titleLabel="h2"
    const titleLabel2="h5"
   
class LoginPage{


    EnterTheEnviroment(){
        cy.visit(url)
    }

    MakeLogin(username,password){
        cy.get(inputUserNameId)
        .clear()
        .type(username)
        cy.get(inputPassWordId)
        .clear()
        .type(password)
        cy.get(btnLoginClass).click()

    }

    CheckLoginIncorrect(){
        cy.get(textloginIncorrectId)
        .should("contain.text","Invalid username or password!")
        .should("have.class","mb-1")
    
    }

    CheckLoginCorrect(userConnected){
        cy.get(textUserConnectid).should("contain.text",userConnected)
        cy.get(btnLogoutId).should("be.visible")
        cy.get(btnGoStore).should("be.visible")

    }
    Logoff(){
        cy.get(btnLogoutId).click()
        cy.get(titleLabel).should('contain.text',"Welcome")
        cy.get(titleLabel2).should('contain.text',"Login in Book Store")
    }


}


export default LoginPage;