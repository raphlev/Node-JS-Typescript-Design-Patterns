var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.getDescription = function () {
        return this.description;
    };
    ;
    return Coffee;
}());
var CoffeeDecorator = /** @class */ (function (_super) {
    __extends(CoffeeDecorator, _super);
    function CoffeeDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoffeeDecorator;
}(Coffee));
// ------------------------------ Beverages ------------------------------
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Espresso";
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Coffee));
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "House blend";
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return .99;
    };
    return HouseBlend;
}(Coffee));
// ------------------------------ Condiments ------------------------------
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar(beverage) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffee = beverage;
        return _this;
    }
    Sugar.prototype.getDescription = function () {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    };
    Sugar.prototype.cost = function () {
        return this.decoratedCoffee.cost() + 0.20;
    };
    return Sugar;
}(CoffeeDecorator));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(beverage) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffee = beverage;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.decoratedCoffee.getDescription() + ', Milk';
    };
    Milk.prototype.cost = function () {
        return this.decoratedCoffee.cost() + 0.20;
    };
    return Milk;
}(CoffeeDecorator));
// ------------------------------ Make our coffee! ------------------------------
var coffee = new Espresso();
coffee = new Sugar(coffee);
coffee = new Milk(coffee);
console.log(coffee.cost());
console.log(coffee.getDescription());
