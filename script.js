const html = document.querySelector('html')
html.setAttribute('lang', 'en'); // <html lang="en">

const head = document.querySelector('head')
const script = document.querySelector('script') // <script src="script.js"></script>
script.setAttribute('defer', '')

const metaCharset = document.createElement('meta') // <meta charset="UTF-8">
metaCharset.setAttribute('charset', 'UTF-8')
head.appendChild(metaCharset)

const metaHttpEquiv = document.createElement('meta') // <meta http-equiv="X-UA-Compatible" content="IE=edge">
metaHttpEquiv.setAttribute('http-equiv', 'X-UA-Compatible')
metaHttpEquiv.setAttribute('content', 'IE=edge')
head.appendChild(metaHttpEquiv)

const metaAuthor = document.createElement('meta') // <meta name="author" content="Antonovich Nikolay">
metaAuthor.setAttribute('name', 'author')
metaAuthor.setAttribute('content', 'Antonovich Nikolay')
head.appendChild(metaAuthor)

const title = document.createElement('title') // <title>
head.appendChild(title)
title.innerHTML = `JS-HW8`;

const style = document.createElement('style') // <style>
head.appendChild(style)

head.appendChild(script) // script в конец списка внутри тега <head>

const body = document.querySelector('body')
const divUp = document.createElement('div')
console.log(body);
body.appendChild(divUp)
// divUp.innerHTML = `
//     <h1>Choose Your Option</h1>
//     <p>But I must explain to you how all this mistaken idea of denouncing </p>
// `
