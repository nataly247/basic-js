module.exports = function transform(arr) {
    if (!(arr && typeof arr === 'object' && arr.constructor === Array)) {
        throw Error;
    }

    if (arr.length == 0) {
        return [];
    }

    let transformedArr = [];
    const flags = [
        '--discard-next',
        '--discard-prev',
        '--double-next',
        '--double-prev',
    ];

    let missOne = false;
    arr.forEach((cur, i, array) => {
        if (flags.includes(cur)) {
            switch (cur) {
                case '--discard-next':
                    missOne = true;
                    break;
                case '--discard-prev':
                    transformedArr.pop();
                    break;
                case '--double-next':
                    if (typeof array[i + 1] !== 'undefined') {
                        transformedArr.push(array[i + 1]);
                    }
                    break;
                default: // -- double-prev
                    if (typeof array[i - 1] !== 'undefined') {
                        transformedArr.push(array[i - 1]);
                    }
                    break;
            }
        } else {
            if (!missOne) {
                transformedArr.push(cur)
            } else {
                missOne = false;
            }
        }
    });

    return transformedArr;
};
