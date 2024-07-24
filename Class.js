var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(height, weight, city) {
        var _this = this;
        this.height = height;
        this.weight = weight;
        this.city = city;
        this.getMyHeight = function () { return _this.height; };
    }
    return Player;
}());
var p1 = new Player(100, 150, "Pune");
console.log(p1.getMyHeight());
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(height, weight, city, role) {
        var _this = _super.call(this, height, weight, city) || this;
        _this.getCity = function () { return _this.city; };
        _this.role = role;
        return _this;
    }
    return Batsman;
}(Player));
var rohit = new Batsman(165, 75, "Mumbai", "Batsman");
// console.log(rohit.getMyHeight(), rohit.role, rohit.weight);
console.log(rohit.getCity());
