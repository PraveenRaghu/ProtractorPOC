
import{browser} from "protractor";
import { AngularHP } from "./PageObject/AngularHP";

describe('Validate Angualar Home Page',function(){
    it('Validate Angular link', async()=>{
        let ahp=new AngularHP();
    await browser.get("https://angularjs.org/");
    await ahp.angularlink.click();
    await ahp.search.sendKeys("test pro");
    
    
    
    
    })
    
    })