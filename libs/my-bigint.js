class MyBigInt {
    setHex(hex) {
        this.hex = hex;
    }

    getHex() {
        return this.hex;
    }

    static XOR(myBigInt1, myBigInt2) {
        const letters1 = myBigInt1.getHex().split("");
        const letters2 = myBigInt2.getHex().split("");

        let result = [];
        const length = Math.max(letters1.length, letters2.length);
        const lettersReverse1 = letters1.reverse();
        const lettersReverse2 = letters2.reverse();
        for(let i = length - 1; i >= 0 ; i--) {
            result.push((parseInt(lettersReverse1[i], 16) ^ parseInt(lettersReverse2[i], 16)).toString(16));
        }

        return result.join("");
    }

    static OR(myBigInt1, myBigInt2) {
        const letters1 = myBigInt1.getHex().split("");
        const letters2 = myBigInt2.getHex().split("");

        let result = [];
        const length = Math.max(letters1.length, letters2.length);
        const lettersReverse1 = letters1.reverse();
        const lettersReverse2 = letters2.reverse();
        for(let i = length - 1; i >= 0 ; i--) {
            result.push((parseInt(lettersReverse1[i], 16) | parseInt(lettersReverse2[i], 16)).toString(16));
        }

        return result.join("");
    }

    static AND(myBigInt1, myBigInt2) {
        const letters1 = myBigInt1.getHex().split("");
        const letters2 = myBigInt2.getHex().split("");

        let result = [];
        const length = Math.max(letters1.length, letters2.length);
        const lettersReverse1 = letters1.reverse();
        const lettersReverse2 = letters2.reverse();
        for(let i = length - 1; i >= 0 ; i--) {
            result.push((parseInt(lettersReverse1[i], 16) & parseInt(lettersReverse2[i], 16)).toString(16));
        }

        return result.join("");
    }

    static INV(myBigInt) {
        const letters1 = myBigInt.getHex().split("");

        let result = [];
        const length = letters1.length;
        const lettersReverse1 = letters1.reverse();

        for(let i = length - 1; i >= 0 ; i--) {
            result.push((~parseInt(lettersReverse1[i], 16) & 15).toString(16));
        }

        return result.join("");
    }

    static shiftL(myBigInt, bits) {
        const letters1 = myBigInt.getHex().split("");

        let resultBin = [];
        const length = letters1.length;
        const lettersReverse1 = letters1.reverse();

        for(let i = length - 1; i >= 0 ; i--) {
            let letterBin = parseInt(lettersReverse1[i], 16).toString(2);
            resultBin.push(letterBin.length < 4 ? "0".repeat(4 - letterBin.length) + letterBin : letterBin);
        }

        const resultShiftL = resultBin.length * 4 > bits ? resultBin.join("").substring(bits, resultBin.length * 4) + "0".repeat(bits) : "0".repeat(resultBin.length * 4);

        let result = [];
        for(let i = 0; i < resultBin.length; i++) {
            result.push(parseInt(resultShiftL.substring(i * 4, (i * 4) + 4),2).toString(16));
        }

        return result.join("");
    }

    static shiftR(myBigInt, bits) {
        const letters1 = myBigInt.getHex().split("");

        let resultBin = [];
        const length = letters1.length;
        const lettersReverse1 = letters1.reverse();

        for(let i = length - 1; i >= 0 ; i--) {
            let letterBin = parseInt(lettersReverse1[i], 16).toString(2);
            resultBin.push(letterBin.length < 4 ? "0".repeat(4 - letterBin.length) + letterBin : letterBin);
        }

        const resultShiftR = resultBin.length * 4 > bits ? "0".repeat(bits) + resultBin.join("").substring(0, resultBin.length * 4 - bits) : "0".repeat(resultBin.length * 4);

        let result = [];
        for(let i = 0; i < resultBin.length; i++) {
            result.push(parseInt(resultShiftR.substring(i * 4, (i * 4) + 4),2).toString(16));
        }

        return result.join("");
    }
}

module.exports = MyBigInt;
