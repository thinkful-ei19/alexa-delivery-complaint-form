export function required(value) {
    if (value === undefined) {
        return 'Required';
    }
}

// export const required = value => (value ? undefined : 'Required');

export function nonEmpty(value) {
    if (value.trim() === '') {
        return 'Cannot be empty';
    }
}

export function valueLength(value) {
    if (value.length !== 5) {
        return 'Must contain exactly 5 characters';
    }
}

// export function onlyNumber(value) {
//     if (typeof value !== 'number') {
//         return 'Each character must be a number';
//     }
// }

//regular expression
export const onlyNumbers = value =>  /^\d+$/.test(value) ? undefined : 'Must only contain numbers';