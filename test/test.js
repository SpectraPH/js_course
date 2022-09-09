import { countWordsInText, countLetterInText, stringToNumbersArray, removeWordFromText } from "../src/index.js"
import { expect } from 'chai';

//Программа принимает текст и букву. Найти количество заданной буквы в тексте. 
describe('String 1', () => {
    it("countLetterInText_ShouldCountGivenLetterInText", () => {
        //arrange
        var text = "This is simple text";
        var letter = 'i';

        //act
        var actualCount = countLetterInText(letter, text);

        //assert
        var expectedCount = 3;
        expect(actualCount).to.equal(expectedCount);
    });

    it("countLetterInText_ShouldCountGivenLetterInText_WhenSomeLettersAreInUpperCase", () => {
        //arrange
        var text = "This Is sImple text";
        var letter = 'i';

        //act
        var actualCount = countLetterInText(letter, text);

        //assert
        var expectedCount = 3;
        expect(actualCount).to.equal(expectedCount);
    });
})

//Данна строка вида «1, 2, 3, 4, 5». Создать массив чисел из заданной строки. 
describe('String 2', () => {
    it("stringToNumbersArray_ShoudReturnAnArrayOfNumbers", () => {
        //arrange
        var str = "1, 2, 3, 4, 5";
        var expectedArray = [1, 2, 3, 4, 5];

        //act
        var actualArray = stringToNumbersArray(str);

        //assert
        expect(actualArray).to.eql(expectedArray);
    });

    it("stringToNumbersArray_ShoudReturnAnArrayOfNumbers_WhenBigNumbersAreProvided", () => {
        //arrange
        var str = "12, 24, 30, 432, 5212";
        var expectedArray = [12, 24, 30, 432, 5212];

        //act
        var actualArray = stringToNumbersArray(str);

        //assert
        expect(actualArray).to.eql(expectedArray);
    });

    it("stringToNumbersArray_ShoudReturnAnArrayOfNumbers_WhenNegativeNumbersAreProvided", () => {
        //arrange
        var str = "-12, -1, 0, -14";
        var expectedArray = [-12, -1, 0, -14];

        //act
        var actualArray = stringToNumbersArray(str);

        //assert
        expect(actualArray).to.eql(expectedArray);
    });

    it("stringToNumbersArray_ShoudReturnAnArrayOfNumbers_WhenStringCanContainLetters", () => {
        //arrange
        var str = "one, 2, three, 4, 5";
        var expectedArray = [2, 4, 5];

        //act
        var actualArray = stringToNumbersArray(str);

        //assert
        expect(actualArray).to.eql(expectedArray);
    });

    it("stringToNumbersArray_ShoudReturnEmptyArray_WhenEmptyStringIsProvided", () => {
        //arrange
        var str = "";
        var expectedArray = [];

        //act
        var actualArray = stringToNumbersArray(str);

        //assert
        expect(actualArray).to.eql(expectedArray);
    });
});

//Программа принимает текст и слово. Найти количество заданных слов в тексте. 
describe('String 3', () => {
    it('countWordsInText_ShouldCorrectlyCountNumberOfWordsInText_WhenNuberOfLookingWordsEqaulsOne', () => {
        //arrange
        var text = "Simple test text for unit testing";
        var word = "unit";
        var expectedCount = 1;

        //act
        var actualCount = countWordsInText(word, text);

        //assert
        expect(actualCount).to.equal(expectedCount);
    })

    it('countWordsInText_ShouldCorrectlyCountNumberOfWordsInText_WhenNuberOfLookingWordsGreaterThanOne', () => {
        //arrange
        var text = "Simple test text for unit test";
        var word = "test";
        var expectedCount = 2;

        //act
        var actualCount = countWordsInText(word, text);

        //assert
        expect(actualCount).to.equal(expectedCount);
    })

    it('countWordsInText_ShouldCorrectlyCountNumberOfWordsInText_WhenNuberOfLookingWordsEqaulsZero', () => {
        //arrange
        var text = "Simple test text for unit testing";
        var word = "zero";
        var expectedCount = 0;

        //act
        var actualCount = countWordsInText(word, text);

        //assert
        expect(actualCount).to.equal(expectedCount);
    })

    it('countWordsInText_ShouldCorrectlyCountNumberOfWordsInText_WhenTextContainsPunctuationMarks', () => {
        //arrange
        var text = "Simple test, text for unit test. I love unit test!";
        var word = "test";
        var expectedCount = 3;

        //act
        var actualCount = countWordsInText(word, text);

        //assert
        expect(actualCount).to.equal(expectedCount);
    })

    it('countWordsInText_ShouldCorrectlyCountNumberOfWordsInText_WhenTextIsInUpperCase', () => {
        //arrange
        var text = "Simple test, text for unit test. I love unit test!";
        var word = "simple";
        var expectedCount = 1;

        //act
        var actualCount = countWordsInText(word, text);

        //assert
        expect(actualCount).to.equal(expectedCount);
    })

    it('countWordsInText_ShouldCorrectlyCountNumberOfWordsInText_WhenSearchingWordIsInUpperCase', () => {
        //arrange
        var text = "simple test, text for unit test. I love unit test!";
        var word = "Simple";
        var expectedCount = 1;

        //act
        var actualCount = countWordsInText(word, text);

        //assert
        expect(actualCount).to.equal(expectedCount);
    })
})

//Написать функцию removeWordFromText, которая принимает слово и текст. Удалить заданное слово из текста. 
describe('String 4', () => {
    it("removeWordFromText_ShouldRemoveGivenWordFromText", () => {
        //arrange
        let text = "This is simple text";
        let word = "simple";

        //act
        let actualText = removeWordFromText(word, text);

        //assert
        let expectedText = "This is text";
        expect(actualText).to.equal(expectedText);
    });

    it("removeWordFromText_ShouldRemoveGivenWordFromText_WhenGivenWordIsLastInText", () => {
        //arrange
        let text = "This is simple text";
        let word = "text";

        //act
        let actualText = removeWordFromText(word, text);

        //assert
        let expectedText = "This is simple";
        expect(actualText).to.equal(expectedText);
    });

    it("removeWordFromText_ShouldRemoveGivenWordFromText_WhenGivenWordHasPunctuationMark", () => {
        //arrange
        let text = "This is simple, text";
        let word = "simple";

        //act
        let actualText = removeWordFromText(word, text);

        //assert
        let expectedText = "This is text";
        expect(actualText).to.equal(expectedText);
    });

    it("removeWordFromText_ShouldRemoveGivenWordFromText_WhenGivenWordHasPunctuationMarkAndItIsLast", () => {
        //arrange
        let text = "This is simple text.";
        let word = "text";

        //act
        let actualText = removeWordFromText(word, text);

        //assert
        let expectedText = "This is simple";
        expect(actualText).to.equal(expectedText);
    });

    it("removeWordFromText_ShouldRemoveGivenWordFromText_WhenTextHasSeveralGivenWords", () => {
        //arrange
        let text = "This text is simple text.";
        let word = "text";

        //act
        let actualText = removeWordFromText(word, text);

        //assert
        let expectedText = "This is simple";
        expect(actualText).to.equal(expectedText);
    });
})