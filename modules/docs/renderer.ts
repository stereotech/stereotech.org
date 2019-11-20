const marked = require('marked')

const renderer = new marked.Renderer()

renderer.heading = (text: string, level: string) => {
    const patt = /\s?{([^}]+)}$/
    let link = patt.exec(text)
    let linkRes = ''
    if (link && link.length && link[1]) {
        text = text.replace(patt, '')
        linkRes = link[1]
    } else {
        linkRes = text.toLowerCase().replace(/[^\wА-яіІїЇєЄ\u4E00-\u9EFF一-龠ぁ-ゔァ-ヴー々〆〤\u3130-\u318F\uAC00-\uD7AF]+/gi, '-')
    }
    return '<h' + level + ' id="' + linkRes + '">' +
        '<a class="anchor" aria-hidden="true" href="#' + linkRes + '">' +
        '</a>' + text + '</h' + level + '>'
}

marked.setOptions({ renderer })

// Partial renderer for homepage object
const partialRenderer = new marked.Renderer()
partialRenderer.paragraph = (text: string) => {
    return text + '<br>'
}

module.exports = {
    marked,
    partialRenderer
}