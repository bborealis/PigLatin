var pigLatin = function(input) {


    var firstLetter = input.slice(0, 1);
    var vowels = ["a", "e", "i","o","u"];

    if (vowels.indexOf(firstLetter) > -1) {

        input = input + "ay";
    };



    return input;
};
