System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.submitted = false;
                    this.hiddenAlcool = false;
                }
                AppComponent.prototype.calc = function () {
                    this.priceAlcKm = this.alcPrice / this.alcKm;
                    this.priceGasKm = this.gasPrice / this.gasKm;
                    this.priceAlc100Km = this.priceAlcKm * 100;
                    this.priceGas100Km = this.priceGasKm * 100;
                    this.diffAlcGas100KM = this.priceAlc100Km - this.priceGas100Km;
                    if (this.priceAlcKm > this.priceGasKm) {
                        this.hiddenAlcool = true;
                    }
                    else {
                        this.hiddenAlcool = false;
                    }
                    this.submitted = true;
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: "\n<div class=\"container\" [hidden]=\"submitted\">\n    <h1>CarCuladora</h1>\n    <form (submit)=\"calc()\">\n      <div class=\"form-group\">\n        <label for=\"gasPrice\">Pre\u00E7o da Gasolina</label>\n        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"gasPrice\"  >\n      </div>\n      <div class=\"form-group\">\n         <label for=\"alcPrice\">Pre\u00E7o do Alcool</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"alcPrice\">\n      </div>\n       <div class=\"form-group\">\n        <label for=\"gasKm\">Km/L Gasolina</label>\n        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"gasKm\">\n      </div>\n      <div class=\"form-group\">\n         <label for=\"alcKm\">Km/L Alcool</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"alcKm\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Calcular</button>\n    </form>\n    \n</div>  \n \n <div [hidden]=\"!submitted\">\n  <h2>Calculo</h2>\n  <div class=\"row\">\n    <div class=\"col-xs-5\">Pre\u00E7o por KM Gasolina</div>\n    <div class=\"col-xs-3  pull-left\">{{ priceGasKm | currency:'BRL':2 }}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-5\">Pre\u00E7o por KM Alcool</div>\n    <div class=\"col-xs-3 pull-left\">{{ priceAlcKm | currency:'BRL':2}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-5\">Pre\u00E7o por 100 KM Gasolina</div>\n    <div class=\"col-xs-3  pull-left\">{{ priceGas100Km | currency:'BRL':2}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-5\">Pre\u00E7o por 100 KM Alcool</div>\n    <div class=\"col-xs-3 pull-left\">{{ priceAlc100Km | currency:'BRL':2}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-5\">Diferen\u00E7a de Pre\u00E7o em 100 KM</div>\n    <div class=\"col-xs-3 pull-left\">{{ diffAlcGas100KM | currency:'BRL':2}}</div>\n  </div>\n  <br>\n  <h2 [hidden]=\"hiddenAlcool\">Abaste\u00E7a com Alcool</h2>\n  <h2 [hidden]=\"!hiddenAlcool\">Abaste\u00E7a com Gasolina</h2>\n  <button class=\"btn btn-default\" (click)=\"submitted=false\">Voltar</button>\n</div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map