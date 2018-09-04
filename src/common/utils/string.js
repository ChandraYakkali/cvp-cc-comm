module.exports = function (str) {

    return {
        isEmpty: () => {

            if (str == null) {
                return true;
            }

            if (Object.prototype.toString.call(str) != "[object String]") {
                return true;
            }

            return (str.trim() == "");
        }
    };
};