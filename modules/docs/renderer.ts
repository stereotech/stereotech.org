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

renderer.html = (html: string) => {
    return html
}

renderer.blockquote = (quote: string) => {
    return `<div role="alert" class="v-alert v-sheet theme--dark info"> 
                <div class="v-alert__wrapper"> 
                    <i aria-hidden="true" class="v-icon notranslate v-alert__icon mdi mdi-information theme--dark"></i>
                    <div class="v-alert__content">
                        ${quote}
                    </div>
                </div>
            </div>`
}

renderer.image = (href: string, title: string, text: string) => {
    return `
    <div role="img" aria-label="${title}" class="v-responsive v-image" style="max-height: 480px;">
        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
        <div class="v-image__image v-image__image--contain" style="background-image: url(&quot;${href}&quot;); background-position: center center;"></div>
        <div class="v-responsive__content" style="width: 896px;"></div>
    </div>
    `
}

renderer.table = (header: string, body: string) => {
    return `
        <div data-app="true">
            <div class="v-data-table theme--light">
                <div class="v-data-table__wrapper">
                    <table>
                        <thead>
                            ${header}
                        </thead>
                        <tbody>
                            ${body}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
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