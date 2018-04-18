export function required(value) {
    if (value === undefined) {
        return 'Required';
    }
}

export function nonEmpty(value) {
    if (value.trim() === '') {
        return 'You must type something in';
    }
}

export function valueLength(value) {
    if (value.length !== 5) {
        return 'Must contain exactly 5 characters';
    }
}

export function isNumber(value) {
    if (typeof value !== number) {
        return 'Each character must be a number';
    }
}