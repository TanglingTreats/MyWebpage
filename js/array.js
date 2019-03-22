//Prints out elements of an array in reverse order
function printReverse(arr) {
    for(var i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//Checks if elements in array are identical. Returns boolean
function isUniform(arr) {
    var element = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if (element !== arr[i]) {
            return false;
        }
    }
    return true;
}

//Sums up all elements in array
function sumArray(arr) {
    var sum = 0;

    arr.forEach(function(value) {
        sum += value
    });

    return sum;
}

//Prints out the highest value in the array
function max(arr) {
    var value = arr[0];

    arr.forEach(function (element) {
        if(element > value)
        {
            value = element;
        }
    });

    return value;
}