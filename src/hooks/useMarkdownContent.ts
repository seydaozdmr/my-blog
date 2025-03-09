'use client'

import { useState, useEffect } from 'react'
import { marked } from 'marked'

export function useMarkdownContent(content: string) {
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    const renderMarkdown = async () => {
      if (!content) {
        setHtmlContent('')
        return
      }
      
      try {
        const html = await marked.parse(content)
        setHtmlContent(html)
      } catch (error) {
        console.error('Error parsing markdown:', error)
        setHtmlContent('<p>Içerik yüklenirken hata oluştu.</p>')
      }
    }

    renderMarkdown()
  }, [content])

  return { htmlContent }
} 