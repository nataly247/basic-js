module.exports = function repeater(str, options) {

    let {
        repeatTimes,
        separator,
        addition,
        additionRepeatTimes,
        additionSeparator
    } = options; // destruct

    str = (str == null) ? 'null' : str.toString();
    if (typeof addition === 'undefined') {
        addition = '';
    } else if (addition == null) {
        addition = 'null';
    } else {
        addition = addition.toString();
    }

    let getStr = function (times, item, separator) {
        arr = Array(times);
        arr.fill(item);
        strFromArr = arr.join(separator);
        return strFromArr;
    }
    let checkStr = function (str, defaultVal) {
        return (typeof separator === 'undefined') ? defaultVal : str;
    }
    let checkNum = function (num) {
        return (typeof num === 'number' && isFinite(num)) ? num : 1;
    }

    separator = checkStr(separator, '+');
    additionSeparator = checkStr(additionSeparator, '|');
    repeatTimes = checkNum(repeatTimes);
    additionRepeatTimes = checkNum(additionRepeatTimes);

    additionalStr = getStr(additionRepeatTimes, addition, additionSeparator);
    resStr = getStr(repeatTimes, str + additionalStr, separator);

    return resStr;
};
  
