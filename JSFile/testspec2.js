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
const AngularHP_1 = require("./PageObject/AngularHP");
describe('Validate Angualar Home Page', function () {
    it('Validate Angular link', () => __awaiter(this, void 0, void 0, function* () {
        let ahp = new AngularHP_1.AngularHP();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ahp.angularlink.click();
        yield ahp.search.sendKeys("test pro");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQWtDO0FBQ2xDLHNEQUFtRDtBQUVuRCxRQUFRLENBQUMsNkJBQTZCLEVBQUM7SUFDbkMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQU8sRUFBRTtRQUNqQyxJQUFJLEdBQUcsR0FBQyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFLdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLENBQUMsQ0FBQyxDQUFBIn0=