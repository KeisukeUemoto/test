// function test() {
//     console.log('おはよう');

// }

// test();

// function test(name = '〇〇', suffix = 'さん') {
//     // console.log('おはよう' + name + suffix) ;
//     return 'おはよう' + name + suffix;
// }
// test('はなこ', 'ちゃん');

// let value = test('はなこ');
// console.log(value);

// const aaa = function aaa() {
//     console.log('aaa');
// }

// aaa();


// const bbb = {
//     lastName: 'Last',
//     firstName: 'First',
// }
// console.log(bbb. firstName);




function _onClickReq() {
    console.log('BBB');
    // fetch('https://www.googleapis.com/books/v1/volumes?q=%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93')
    // // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (obj) {
    //     console.log(obj);

    // })
    // console.log('BBB');
    fetch('https://www.googleapis.com/books/v1/volumes?q=%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93')
        .then((response) => {
            return response.json();
        })
        .then((obj) => {
            viewResults(obj);
        });
}

function viewResults(result) {
    console.log(result);
    const resultElement = document.getElementById('result');
    result.items.forEach(element => {
        resultElement.innerHTML += '<h2>' + element.volumeInfo.title + '</h2>'
    });

}