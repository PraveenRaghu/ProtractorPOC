import{browser,element,by} from'protractor';
import{Calculator} from './PageObject/Calculator'; // Calculator class is imported to use its properties.
describe('Validate Calculator',function(){// describe is a Test Suite
    it('Validate Calculation', async()=>{ // it is for Test Case
        let cal=new Calculator(); 
// below code performs Addition of 3 and 5

    await browser.get("https://juliemr.github.io/protractor-demo/");
    await cal.firstEditBox.sendKeys("3"); // async- await concept is used for promise resolved
    await cal.secondEditBox.sendKeys('5');
    await cal.go.click();
    await expect(cal.display.getText()).toEqual(cal.result.getText());//Assertion- compare result and result displayed in table.
    await expect(cal.result.getText()).toBe("8");
    await cal.display.getText().then(function(text){// As JS Asynchronous Promise chaining concept is used 
    
        console.log(text);
    })

    await cal.result.getText().then(function(text){
    
        console.log(text);
    })

    //below code performs substraction of 10 and 5
    await cal.firstEditBox.sendKeys("10");
    await cal.secondEditBox.sendKeys('5');
    await cal.substract.click();
    await cal.go.click();
    await expect(cal.display.getText()).toEqual(cal.result.getText());
    await expect(cal.result.getText()).toBe("5");
    await cal.display.getText().then(function(text){
    
        console.log(text);
    })
    
    
    
    
    
    })
    
    })