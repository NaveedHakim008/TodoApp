const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){
 
    

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://127.0.0.1:3000");
         
     //To send a search query by passing the value in searchString.
    let navbar =await driver.findElement(By.xpath("//h3"));

     //Verify the page title and print it
    let text = await navbar.getText()
     console.log('h3 tag text is:',text);

     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}
example()