const MyBigInt = require('./libs/my-bigint');

const numberA = new MyBigInt;
const numberB = new MyBigInt;

numberA.setHex("51bf608414ad5726a3c1bec098f77b1b54ffb2787f8d528a74c1d7fde6470ea4");
numberB.setHex("403db8ad88a3932a0b7e8189aed9eeffb8121dfac05c3512fdb396dd73f6331c");

console.log("XOR", MyBigInt.XOR(numberA, numberB));
console.log("OR", MyBigInt.OR(numberA, numberB));
console.log("AND", MyBigInt.AND(numberA, numberB));
console.log("INV", MyBigInt.INV(numberA));

console.log("shiftR", MyBigInt.shiftR(numberA, 5));
console.log("shiftL", MyBigInt.shiftL(numberA, 5));
