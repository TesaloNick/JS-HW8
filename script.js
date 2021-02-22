const html = document.querySelector('html')
html.setAttribute('lang', 'en'); // <html lang="en">

const head = document.querySelector('head')
const body = document.querySelector('body')
const script = document.querySelector('script') // <script src="script.js"></script>

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

const metaViewport = document.createElement('meta') //<meta name="viewport" content="width=device-width, initial-scale=1">
metaViewport.setAttribute('name', 'viewport')
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1')
head.appendChild(metaViewport)

const link1 = document.createElement('link') // <link rel="preconnect" href="https://fonts.gstatic.com">
link1.setAttribute('rel', 'preconnect')
link1.setAttribute('href', 'https://fonts.gstatic.com')
head.appendChild(link1)

const link2 = document.createElement('link') // <link href="https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
link2.setAttribute('rel', 'stylesheet')
link2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap')
head.appendChild(link2)

const title = document.createElement('title') // <title>
head.appendChild(title)
title.innerHTML = `JS-HW8`;

const style = document.createElement('style') // <style>
head.appendChild(style)

head.appendChild(script) // script в конец списка внутри тега <head>

style.innerHTML = `*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    max-width: 800px;
    margin: auto;
}
.container > p{
    font-size: 14px;
}
h1{
    font-family: Arvo;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #212121;
    margin: 15px 0;
}
h1 + p{
    font-family: Open Sans;
    font-weight: 400;
    text-align: center;
    color: #9FA3A7;
    margin-bottom: 55px;
}
.options{
    display: grid;
    grid-template-columns: 1fr 1fr;

}
.option{
    text-align: center;
    padding: 80px 20%;
    border: #E8E9ED 1px solid;
    border-radius: 5px; 
    cursor: pointer;
}
.option:hover, .option:hover button{
    background-color: #8F75BE;
    transition: 0.5s;
    color: #FFFFFF;

}
button:hover{
    transform: scale(1.2);
    text-decoration: underline;
}
.option:hover h1, .option:hover p{
    color: #FFFFFF;
    transition: 0.5s;
}
.option:hover p:first-child{
    color: #FFC80A;
    transition: 0.5s;
}
.option p{
    font-size: 12px;
}
.option p:first-child{
    font-family: Montserrat;
    font-weight: 700;
    color: #9FA3A7;
    letter-spacing: 2.4px;
}
button{
    background-color: #FFFFFF;
    width: 147px;
    height: 46px;   
    border: 3px solid #FFC80A;
    border-radius: 23px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    color: #212121;
    letter-spacing: 2.4px;
    cursor: pointer;
}
@media (max-width: 900px){
    .container{
        max-width: 90%;
        margin: auto;
    }
}
@media (max-width: 760px){
    .option{
        padding: 8vh 5%;
    }
}
@media (max-width: 510px){
    .option{
        padding: 8vh 20%;
        width: 90%;
    }
    .options{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
`

const divUp = document.createElement('div')
divUp.setAttribute('class', 'container')
divUp.innerHTML = `
    <h1>Choose Your Option</h1>
    <p>But I must explain to you how all this mistaken idea of denouncing </p>
`
body.appendChild(divUp)

const divOptions = document.createElement('div')
divOptions.setAttribute('class', 'options')
divUp.appendChild(divOptions)

const divOption1 = document.createElement('div')
divOption1.setAttribute('class', 'option')
divOptions.appendChild(divOption1)
const divOption2 = document.createElement('div')
divOption2.setAttribute('class', 'option')
divOptions.appendChild(divOption2)
divOption1.innerHTML = `
<p>FREELANCER</p>
<h1>Initially designed to</h1>
<p>But I must explain to you how all this mistaken idea of denouncing </p>
<button>START HERE</button>
`
divOption2.innerHTML = `
<p>STUDIO</p>
<h1>Initially designed to</h1>
<p>But I must explain to you how all this mistaken idea of denouncing </p>
<button>START HERE</button>
`