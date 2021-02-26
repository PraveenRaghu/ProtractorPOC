"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./PageObject/Calculator"); // Calculator class is imported to use its properties.
describe('Validate Calculator', function () {
    it('Validate Calculation', () => __awaiter(this, void 0, void 0, function* () {
        let cal = new Calculator_1.Calculator();
        // below code performs Addition of 3 and 5
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        yield cal.firstEditBox.sendKeys("3"); // async- await concept is used for promise resolved
        yield cal.secondEditBox.sendKeys('5');
        yield cal.go.click();
        yield expect(cal.display.getText()).toEqual(cal.result.getText()); //Assertion- compare result and result displayed in table.
        yield expect(cal.result.getText()).toBe("8");
        yield cal.display.getText().then(function (text) {
            console.log(text);
        });
        yield cal.result.getText().then(function (text) {
            console.log(text);
        });
        //below code performs substraction of 10 and 5
        yield cal.firstEditBox.sendKeys("10");
        yield cal.secondEditBox.sendKeys('5');
        yield cal.substract.click();
        yield cal.go.click();
        yield expect(cal.display.getText()).toEqual(cal.result.getText());
        yield expect(cal.result.getText()).toBe("5");
        yield cal.display.getText().then(function (text) {
            console.log(text);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLHdEQUFrRCxDQUFDLHNEQUFzRDtBQUN6RyxRQUFRLENBQUMscUJBQXFCLEVBQUM7SUFDM0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQU8sRUFBRTtRQUNoQyxJQUFJLEdBQUcsR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUNqQywwQ0FBMEM7UUFFdEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxvREFBb0Q7UUFDMUYsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQSwwREFBMEQ7UUFDNUgsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUVGLDhDQUE4QztRQUM5QyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNsRSxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFNRixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsQ0FBQyxDQUFDLENBQUEifQ==