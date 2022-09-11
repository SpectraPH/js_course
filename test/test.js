import {arrayToString, indexOfMax, max, removeDuplicates, sliceArray, sort, sumArrays} from "../src/index.js";
import { expect } from 'chai';

describe("arrayToString", () => {
    it('should return correct string', () => {
        //arrange
        let array = [1, 2, 3, 4, 5];

        //act
        let actualStr = arrayToString(array);

        //assert
        let expectedStr = "1 - 0\n2 - 1\n3 - 2\n4 - 3\n5 - 4\n"
        expect(actualStr).to.eql(expectedStr);
    });

    it('should return empty string when given array is empty', () => {
        //arrange
        let array = [];

        //act
        let actualStr = arrayToString(array);

        //assert
        let expectedStr = ""
        expect(actualStr).to.eql(expectedStr);
    });
})

describe("max", () => {
    it("should return max element from array", () => {
        //arrange
        let array = [1, 5, 12, 65];

        //act
        let actualElement = max(array);

        //assert
        let expectedElement = 65;
        expect(actualElement).to.equal(expectedElement);
    })

    it("should return null when array is empty", () => {
        //arrange
        let array = [];

        //act
        let actualElement = max(array);

        //assert
        let expectedElement = null;
        expect(actualElement).to.equal(expectedElement);
    })
})

describe("indexOfMax", () => {
    it("should return index of max element from array", () => {
        //arrange
        let array = [1, 5, 2, 10];

        //act
        let actualIndex = indexOfMax(array);

        //assert
        let expectedIndex = 3;
        expect(actualIndex).to.equal(expectedIndex);
    })

    it("should return null when array is empty", () => {
        //arrange
        let array = [];

        //act
        let actualIndex = indexOfMax(array);

        //assert
        let expectedIndex = null;
        expect(actualIndex).to.equal(expectedIndex);
    })

    it("should return index of last max element when array contains several max elements", () => {
        //arrange
        let array = [10, 5, 7, 10];

        //act
        let actualIndex = indexOfMax(array);

        //assert
        let expectedIndex = 3;
        expect(actualIndex).to.equal(expectedIndex);
    })
})

describe("sliceArray", () => {
    it("should return first 2 elements when n is 2", () => {
        //arrange
        let array = [3, 6, 1, 4];
        let n = 2;

        //act
        let actualArray = sliceArray(array, n);

        //assert
        let expectedArray = [3, 6];
        expect(actualArray).to.eql(expectedArray);
    })

    it("should return empty array when n is 0", () => {
        //arrange
        let array = [3, 6, 1, 4];
        let n = 0;

        //act
        let actualArray = sliceArray(array, n);

        //assert
        let expectedArray = [];
        expect(actualArray).to.eql(expectedArray);
    })
});

describe("sort", () => {
    it("should sort an array in descending mode", () => {
        //arrange
        let array = [3, 1, 8, 4];

        //act
        let actualArray = sort(array);

        //assert
        let expectedArray = [8, 4, 3, 1];
        expect(actualArray).to.eql(expectedArray);
    })

    it("should return empty array when given array is empty", () => {
        //arrange
        let array = [];

        //act
        let actualArray = sort(array);

        //assert
        let expectedArray = [];
        expect(actualArray).to.eql(expectedArray);
    })
});

describe("sumArrays", () => {
    it("should sum given array in new array", () => {
        //arrange
        let array1 = [1, 5, 2];
        let array2 = [2, 7, 3];

        //act
        let actualArray = sumArrays(array1, array2);

        //assert
        let expectedArray = [3, 12, 5];
        expect(actualArray).to.eql(expectedArray);
    })

    it("should return empty array when given array is empty", () => {
        //arrange
        let array1 = [];
        let array2 = [];

        //act
        let actualArray = sumArrays(array1, array2);

        //assert
        let expectedArray = [];
        expect(actualArray).to.eql(expectedArray);
    })
})

describe("removeDuplicates", () => {
    it("should remove duplicates from array", () => {
        //arrange
        let array = [1, 4, 6, 1, 4];

        //act
        let actualArray = removeDuplicates(array);

        //assert
        let expectedArray = [1, 4, 6];
        expect(actualArray).to.eql(expectedArray);
    })

    it("should remove duplicates from array when array contains only duplicates", () => {
        //arrange
        let array = [2, 1, 1, 1, 1];

        //act
        let actualArray = removeDuplicates(array);

        //assert
        let expectedArray = [2, 1];
        expect(actualArray).to.eql(expectedArray);
    })

    it("should return empty array when given array is empty", () => {
        //arrange
        let array = [];

        //act
        let actualArray = removeDuplicates(array);

        //assert
        let expectedArray = [];
        expect(actualArray).to.eql(expectedArray);
    })
})