const hljs = require('highlight.js')

const MAP = {
  'py': 'python',
  'js': 'javascript',
  'json': 'javascript',
  'rb': 'ruby',
  'csharp': 'cs'
}

function normalize (lang) {
  if (!lang) { return null }

  const lower = lang.toLowerCase()
  return MAP[lower] || lower
}

function highlight (lang, code) {
  if (!lang) {
    return {
      body: code,
      html: false
    }
  }

    // Normalize lang
  lang = normalize(lang)

  if (lang === 'diff') {
    const diff2html = require('diff2html').Diff2Html
    let element = diff2html.getPrettyHtmlFromDiff(code)
    // console.log(element)
    const diff = highlightCode(element)
    // console.log(diff)
    return diff
  }

  try {
    return hljs.highlight(lang, code).value
  } catch (e) { }

  return {
    body: code,
    html: false
  }
}

function highlightCode (target) {
  // var that = this

  var highlightJS = require('diff2html/src/ui/js/highlight.js-internals.js').HighlightJS
  let cheerio = require('cheerio')

  // var $target = cheerio.load(target)
  let $ = cheerio.load(target)

  // collect all the diff files and execute the highlight on their lines
  var $files = $('.d2h-file-wrapper')
  $files.map(function (_i, file) {
    var oldLinesState
    var newLinesState
    var $file = $(file)
    var language = $file.data('lang')

    // collect all the code lines and execute the highlight on them
    var $codeLines = $file.find('.d2h-code-line-ctn')
    $codeLines.map(function (_j, line) {
      var $line = $(line)
      var text = $line.text()
      var lineParent = $line.parent()

      var lineState
      if ($(lineParent).hasClass('d2h-del')) {
        lineState = oldLinesState
      } else {
        lineState = newLinesState
      }

      var result = hljs.getLanguage(language) ? hljs.highlight(language, text, true, lineState) : hljs.highlightAuto(text)
      if ($(lineParent).hasClass('d2h-del')) {
        oldLinesState = result.top
      } else if ($(lineParent).hasClass('d2h-ins')) {
        newLinesState = result.top
      } else {
        oldLinesState = result.top
        newLinesState = result.top
      }

      var originalStream = highlightJS.nodeStream(line)
      if (originalStream.length) {
        var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')
        resultNode.innerHTML = result.value
        result.value = highlightJS.mergeStreams(originalStream, highlightJS.nodeStream(resultNode), text)
      }

      // $line.addClass('hljs')
      // $line.addClass(result.language)
      $line.html(result.value)
    })
  })
  return $.html()
};

module.exports = {
  book: {
    assets: './css',
    css: [
      'website.css',
      'diff2html.css'
    ]
  },
  ebook: {
    assets: './css',
    css: [
      'ebook.css',
      'diff2html.css'
    ]
  },
  blocks: {
    code: function (block) {
      return highlight(block.kwargs.language, block.body)
    }
  },
  hooks: {
    page: function (page) {
      const cheerio = require('cheerio')
      const $ = cheerio.load(page.content)

      $('pre code.lang-diff').each(function () {
        const diff = highlight('diff', $(this).text())
        $(this).parent().replaceWith(diff)
      })
      page.content = $.html()

      return page
    }
  }
}
