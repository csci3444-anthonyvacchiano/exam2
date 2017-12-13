const mycube = require('./mycube');

const mysquare = require('./mysquare');
module.exports = {

    tosquare: function(inpNumber) {
        return mysquare.ToNumber(inpNumber);
    },
    tocube: function(inpNumber) {
        return mycube.ToNumber(inpNumber);
    }

};