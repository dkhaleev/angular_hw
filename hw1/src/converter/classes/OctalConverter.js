var OctalConverter = (function () {
    function OctalConverter() {
    }
    OctalConverter.prototype.convertFrom = function (input) {
        return parseInt(input, 8);
    };
    OctalConverter.prototype.convertTo = function (input) {
        return input.toString(8);
    };
    return OctalConverter;
}());
