export interface PostMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
}

function parseFrontmatter(content: string): { data: Record<string, unknown>; body: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (match) {
    const frontmatterContent = match[1]
    const body = match[2]
    const data: Record<string, unknown> = {}
    
    const lines = frontmatterContent.split(/\r?\n/)
    let currentKey = ''
    let currentValue = ''
    let inArray = false
    let arrayItems: string[] = []
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.trim().startsWith('[') && !line.trim().endsWith(']')) {
        inArray = true
        currentKey = line.match(/^(\w+):\s*(.*)$/)?.[1] || ''
        const afterBracket = line.match(/^\w+:\s*\[(.*)$/)?.[1] || ''
        if (afterBracket && !afterBracket.trim().endsWith(']')) {
          arrayItems.push(afterBracket.trim().replace(/,?\s*$/, ''))
        }
        continue
      }
      
      if (inArray) {
        if (line.trim().endsWith(']')) {
          arrayItems.push(line.trim().replace(/,?\s*$/, ''))
          data[currentKey] = arrayItems
            .filter(s => s.trim())
            .map(s => s.replace(/^["']|["']$/g, '').trim())
          arrayItems = []
          inArray = false
          currentKey = ''
        } else {
          arrayItems.push(line.trim().replace(/,?\s*$/, ''))
        }
        continue
      }
      
      const keyMatch = line.match(/^(\w+):\s*(.*)$/)
      if (keyMatch) {
        if (currentKey) {
          data[currentKey] = parseValue(currentValue.trim())
        }
        currentKey = keyMatch[1]
        currentValue = keyMatch[2]
      } else if (line.trim() && currentKey) {
        currentValue += '\n' + line
      }
    }
    
    if (currentKey) {
      data[currentKey] = parseValue(currentValue.trim())
    }
    
    return { data, body }
  }
  
  return { data: {}, body: content }
}

function parseValue(value: string): unknown {
  if (!value) return value
  
  if (value.startsWith('[') && value.endsWith(']')) {
    try {
      return JSON.parse(value)
    } catch {
      return value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''))
    }
  }
  if (value === 'true') return true
  if (value === 'false') return false
  if (!isNaN(Number(value))) return Number(value)
  return value
}

const postsDir = import.meta.glob('./*.md', { eager: true, query: '?raw', import: 'default' })
const postList: PostMeta[] = []

for (const path in postsDir) {
  if (path.includes('index.ts')) continue
  
  const fileContent = postsDir[path] as string
  const { data, body } = parseFrontmatter(fileContent)
  
  const match = path.match(/\.\/(.+)\.md$/)
  const slug = match ? match[1] : ''
  
  const excerpt = body.slice(0, 150).replace(/[#*`\[\]]/g, '').replace(/\n+/g, ' ').trim() + '...'
  
  postList.push({
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || new Date().toISOString().split('T')[0],
    tags: (data.tags as string[]) || [],
    excerpt
  })
}

postList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const posts = postList
