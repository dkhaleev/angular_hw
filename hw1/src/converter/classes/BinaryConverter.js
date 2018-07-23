var BinaryConverter = (function () {
    function BinaryConverter() {
    }
    BinaryConverter.prototype.convertFrom = function (input) {
        return parseInt(input, 2);
    };
    BinaryConverter.prototype.convertTo = function (input) {
        return input.toString(2);
    };
    return BinaryConverter;
}());
