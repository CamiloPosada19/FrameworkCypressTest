///<reference types="cypress"/>///<reference types="cypress"/>
import LoginPage from "../support/Pages/LoginPage";
// Objects 
const loginPage= new LoginPage();
describe("Free automation exercise Login Page",function(){

    it("Entry enviroment",function(){
        loginPage.EnterTheEnviroment();
    })
    it("Make an incorrect login ",function(){
        loginPage.MakeLogin("CML","CML")
        loginPage.CheckLoginIncorrect();
    })

    it("Make a correct login ",function(){
        loginPage.MakeLogin("testtest","Test123!");
        loginPage.CheckLoginCorrect("testtest");
    })

    it("Log off",function(){
        loginPage.Logoff();
    })
    
})