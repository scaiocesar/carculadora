System.register([], function(exports_1) {
    var Car;
    return {
        setters:[],
        execute: function() {
            Car = (function () {
                function Car(carName, kmlAlcool, kmlGas) {
                    this.carName = carName;
                    this.kmlAlcool = kmlAlcool;
                    this.kmlGas = kmlGas;
                }
                return Car;
            })();
            exports_1("Car", Car);
        }
    }
});
//# sourceMappingURL=car-model.js.map