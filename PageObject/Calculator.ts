import { ElementFinder } from "protractor";

import{element,by} from'protractor';
// To Acheive Page Object Design - Objects  of calculator are defined 
export class Calculator{
firstEditBox: ElementFinder;
secondEditBox:ElementFinder;
go:ElementFinder;
result:ElementFinder;
display: ElementFinder;
substract :ElementFinder;

constructor(){

    this.firstEditBox=element(by.model('first'));
    this.secondEditBox=element(by.model('second'));
    this.go=element(by.id('gobutton'));
    this.result=element(by.repeater('result in memory')).element(by.css("td:nth-child(3)"));//this will getresult from table of 1st row
    this.display=element(by.css("h2[class*='ng-binding']"));//capture the result output
    this.substract=element(by.model('operator')).element(by.css("option:nth-child(5)"));//this will select substraction sign
    
}



}