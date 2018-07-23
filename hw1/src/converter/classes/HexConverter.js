var HexConverter = (function () {
    function HexConverter() {
    }
    HexConverter.prototype.convertFrom = function (input) {
        return parseInt(input, 16);
    };
    HexConverter.prototype.convertTo = function (input) {
        return input.toString(16);
    };
    return HexConverter;
}());
