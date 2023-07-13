
import _ from 'lodash';

const stringify = (data, replacer = '*', spaceCount = 1) => {

    if (!_.isObject(data)) {
        return String(data);
    }
    const iter = (dataForIter, depth) => {
        let result = '';
        let resultString = '';
        const arrayOfObj = Object.entries(dataForIter);
        arrayOfObj.forEach(([key, value]) => {
            if (!_.isObject(value)) {
                resultString += `\n${replacer.repeat((depth + 1) * spaceCount)}${String(key)}: ${String(value)}`;
            }
            if (_.isObject(value)) {
                resultString += `\n${replacer.repeat((depth + 1) * spaceCount)}${String(key)}: {${iter(value, depth + 1)}`;
            }
        });
        if (depth === 0) {
            result += `{${resultString}\n}`;
        } else {
            result += `${resultString}\n${replacer.repeat((depth) * spaceCount)}${'}'.repeat(1)}`;
        }
        return result;
    };
    return iter(data, 0);
};



const primitives = {
    string: 'value',
    boolean: true,
    number: 5,
    float: 1.25,
};

const nested = {
    string: 'value',
    boolean: true,
    number: 5,
    float: 1.25,
    object: {
        5: 'number',
        1.25: 'float',
        null: 'null',
        true: 'boolean',
        value: 'string',
        nested: {
            boolean: true,
            float: 1.25,
            string: 'value',
            number: 5,
            null: null,
        },
    },
};

// console.log(stringify(primitives));
console.log(stringify(nested));