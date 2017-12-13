module.exports = {

    ToNumber: function(inpNumber) {
        var num = NaN;
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }
        return num * num;
    },

    toString: function(inpNumber) {
        var numberStr = "";
        if (typeof inpNumber === "number") {
            numberStr = inpNumber.toString();
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            numberStr = inpNumber;
        }
        return numberStr;
    }
};