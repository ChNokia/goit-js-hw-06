'use strict'

class StringBuilder {
    #value;

    #isString(str) {
        return (typeof str === "string");
    }

    constructor(initialValue) {
        if (this.#isString(initialValue)) {
            this.#value = initialValue;
        }
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        if (this.#isString(str)) {
            this.#value += str;
        }
    }

    padStart(str) {
        if (this.#isString(str)) {
            this.#value = str + this.#value;
        }
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
