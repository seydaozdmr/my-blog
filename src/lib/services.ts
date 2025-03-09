import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const servicesDirectory = path.join(process.cwd(), 'content')

export async function getServices() {
  // Klasördeki tüm dosyaları al
  const fileNames = fs.readdirSync(servicesDirectory)
  
  const services = fileNames.map((fileName) => {
    // ID olarak dosya adını kullan
    const id = fileName.replace(/\.md$/, '')
    
    // Markdown dosyasını oku
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // gray-matter ile dosyanın içeriğini ve metadata'yı ayır
    const { data, content } = matter(fileContents)
    
    return {
      id,
      content,
      ...data,
    }
  })
  
  // Gereken paketleri yükleyin:
  // npm install marked gray-matter

  return services
}