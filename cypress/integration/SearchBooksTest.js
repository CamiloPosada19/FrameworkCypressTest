
import SearchBoooksPages from "../support/Pages/SearchBooksPages";
///<reference types="cypress"/>///<reference types="cypress"/>


// Objects 
const searchBooksPages= new SearchBoooksPages();
   
describe("Search inputs on the UI, it shoud verify that the search",function(){

    it("Entry enviroment",function(){
        searchBooksPages.entryEnviroment();
    })
    it("Make an entry and verify the results",function(){
        searchBooksPages.makeAText("Git");
        searchBooksPages.verifySearch(1,"Git"); 
        searchBooksPages.makeAText("de");
        searchBooksPages.verifyDynamicsElements();
    })

    it("Check an entry that does not contain books",function(){
        searchBooksPages.makeAText("zzzzzz");
        searchBooksPages.verifySearchWithoutResults();
    })
    
})