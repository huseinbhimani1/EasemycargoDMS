export async function useDocumentValidation(layer: string) {
  try {
    const [configRes, docsRes] = await Promise.all([
      fetch('/api/docs-config'),
      fetch('/api/docs')
    ])

    const config = await configRes.json()
    const allDocsResponse = await docsRes.json()
    const allDocs = allDocsResponse.documents || []

    const requiredDocs = config[layer]?.filter((d: any) => d.required) || []
    const uploadedDocs = allDocs.filter((doc: any) => doc.layer === layer)

    const missing = requiredDocs.filter((req: any) => {
      return !uploadedDocs.some((uploaded: any) => uploaded.name === req.name)
    })

    return {
      missing,
      isComplete: missing.length === 0
    }
  } catch (err) {
    console.error('Document validation failed:', err)
    return {
      missing: [],
      isComplete: false
    }
  }
}
