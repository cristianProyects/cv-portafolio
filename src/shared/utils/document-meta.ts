// Título y descripción del documento según el idioma.
export function setDocumentMeta(title: string, description: string): void {
  document.title = title
  let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.append(meta)
  }
  meta.content = description
}
