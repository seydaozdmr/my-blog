import { Marked } from 'marked'

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
function safeUrl(href: string) {
  try {
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(new URL(href, 'https://antalyaagacbudama.com').protocol)
  } catch {
    return false
  }
}
const markdown = new Marked({
  renderer: {
    html({ text }) { return escapeHtml(text) },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      if (!safeUrl(href)) return text
      return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ''}>${text}</a>`
    },
    image({ href, text, title }) {
      if (!safeUrl(href)) return escapeHtml(text)
      return `<img src="${escapeHtml(href)}" alt="${escapeHtml(text)}"${title ? ` title="${escapeHtml(title)}"` : ''} />`
    },
  },
})

export function renderMarkdown(content: string) {
  return markdown.parse(content, { async: false })
}
