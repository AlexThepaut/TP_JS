function multiply(a, b) {
    console.log(arguments.length)
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') { }
        else { throw new Error(`L'argument n°${i + 1} n'est pas du type number`) }
    }
    return a * b;
}
try {
    console.log(multiply(10, 2, 7))
} catch (error) {
    console.log(error)
}

var hello = function (name) {
    console.log('Hello ' + name)
};

function asyncWithCallBack() {

    setTimeout(function () {
        asyncSayHello('Niko', hello);
    }, 1000)

    function asyncSayHello(name, callback) {
        if (callback && typeof callback === 'function') {
            setTimeout(callback, 1000, name);
        }
    }
}

asyncWithCallBack();