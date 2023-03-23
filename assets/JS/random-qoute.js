

const quoteArray =["It's interesting - I always thought when I was doing more melodramatic stuff like 'Everwood' that the directors were constantly reeling me in and stopping me from being funny - Chris Pratt","If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization - Gerald Weinberg","Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.","One man's crappy software is another man's full-time job - Jessica Gaston","It's not a bug - it's an undocumented feature"];



// This will grab a qoute from specified array when called with getRandomQuote(array)
function getRandomQuote(array){
    return array[Math.floor(Math.random() * array.length)];
}

// This adds the qoute to the , qoute area on the homepage
$('p.quoteContainer_quote').append(getRandomQuote(quoteArray));