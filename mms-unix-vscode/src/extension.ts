import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'

const MMS_COMPONENTS_REL = path.join('uni_modules', 'mms-unix', 'components')

function findMmsComponentsRoot(): string | null {
  const folders = vscode.workspace.workspaceFolders
  if (folders == null || folders.length === 0) {
    return null
  }
  for (const f of folders) {
    const candidate = path.join(f.uri.fsPath, MMS_COMPONENTS_REL)
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate
    }
  }
  return null
}

function listMmsTagNames(componentsRoot: string): string[] {
  const names: string[] = []
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(componentsRoot, { withFileTypes: true })
  } catch {
    return names
  }
  for (const e of entries) {
    if (!e.isDirectory()) {
      continue
    }
    if (!e.name.startsWith('mms-')) {
      continue
    }
    const uvue = path.join(componentsRoot, e.name, `${e.name}.uvue`)
    if (fs.existsSync(uvue)) {
      names.push(e.name)
    }
  }
  names.sort((a, b) => a.localeCompare(b))
  return names
}

/** 光标所在行、光标前文本：是否正在输入开始标签名（如 `<`、`</`、`mms-b`） */
function getTagNamePrefix(lineText: string, charIndex: number): string | null {
  const before = lineText.slice(0, charIndex)
  const open = before.lastIndexOf('<')
  if (open < 0) {
    return null
  }
  let afterOpen = before.slice(open + 1)
  if (
    afterOpen.includes('>') ||
    afterOpen.trimStart() !== afterOpen ||
    afterOpen.includes(' ')
  ) {
    return null
  }
  if (afterOpen.startsWith('/')) {
    afterOpen = afterOpen.slice(1)
  }
  return afterOpen
}

export function activate(context: vscode.ExtensionContext): void {
  const tagNames = (): string[] => {
    const root = findMmsComponentsRoot()
    if (root == null) {
      return []
    }
    return listMmsTagNames(root)
  }

  const completion = vscode.languages.registerCompletionItemProvider(
    'vue',
    {
      provideCompletionItems(document, position) {
        const lineText = document.lineAt(position.line).text
        const prefix = getTagNamePrefix(lineText, position.character)
        if (prefix == null) {
          return undefined
        }
        const names = tagNames()
        if (names.length === 0) {
          return [
            new vscode.CompletionItem(
              '（未找到 uni_modules/mms-unix/components）',
              vscode.CompletionItemKind.Text,
            ),
          ]
        }
        const items: vscode.CompletionItem[] = []
        for (const name of names) {
          if (prefix.length > 0 && !name.startsWith(prefix)) {
            continue
          }
          const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Class)
          item.detail = 'MMS-UNIX'
          item.documentation = new vscode.MarkdownString(`组件库标签 \`${name}\`（easycom）`)
          items.push(item)
        }
        return items.length > 0 ? items : undefined
      },
    },
    '<',
    '/',
  )

  const hover = vscode.languages.registerHoverProvider('vue', {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position, /mms-[a-z0-9-]+/i)
      if (range == null) {
        return undefined
      }
      const word = document.getText(range)
      if (!word.startsWith('mms-')) {
        return undefined
      }
      const names = tagNames()
      const md = new vscode.MarkdownString()
      if (names.includes(word)) {
        md.appendMarkdown(`**${word}** · MMS-UNIX 组件（easycom，无需 import）\n\n`)
        md.appendMarkdown(`路径: \`${MMS_COMPONENTS_REL}/${word}/\``)
      } else {
        md.appendMarkdown(`**${word}** · 当前工作区未在组件目录中找到对应 \`.uvue\`（请确认已安装 \`uni_modules/mms-unix\`）`)
      }
      md.isTrusted = true
      return new vscode.Hover(md, range)
    },
  })

  context.subscriptions.push(completion, hover)
}

export function deactivate(): void {}
