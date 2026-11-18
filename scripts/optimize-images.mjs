import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

async function filesIn(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesIn(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat()
}
const sources = (await filesIn('src')).filter(filename => /\.(tsx?|md|css)$/.test(filename))
const contents = new Map(await Promise.all(sources.map(async filename => [filename, await fs.readFile(filename, 'utf8')])) )
let before = 0
let after = 0
for (const filename of await filesIn('public')) {
  if (!/\.(jpe?g|png)$/i.test(filename)) continue
  const url = `/${filename.replace(/^public\//, '')}`
  if (![...contents.values()].some(content => content.includes(url))) continue
  const output = filename.replace(/\.(jpe?g|png)$/i, '.webp')
  const outputUrl = `/${output.replace(/^public\//, '')}`
  before += (await fs.stat(filename)).size
  await sharp(filename).rotate().resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(output)
  after += (await fs.stat(output)).size
  for (const [source, content] of contents) contents.set(source, content.replaceAll(url, outputUrl))
  await fs.unlink(filename)
}
for (const [source, content] of contents) await fs.writeFile(source, content)
console.log(`Referenced images: ${(before / 1048576).toFixed(2)} MiB → ${(after / 1048576).toFixed(2)} MiB`)
