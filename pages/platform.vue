<template>
  <div>
    <h1>Platform Page</h1>
    <div>Tenant ID: {{ tenantId }}</div>
    <div>Industry ID: {{ industryId }}</div>

    <div v-if="loading">Loading document types...</div>
    <div v-else>
      <h2>Upload Documents</h2>
      <div v-for="doc in documentTypes" :key="doc.name" style="margin-bottom: 1em;">
        <label>
          {{ doc.name }} <span v-if="doc.required" style="color:red">*</span>
          <input type="file" @change="e => handleFileChange(e, doc.name)" />
        </label>
        <button @click="() => uploadFile(doc.name)" :disabled="!selectedFiles[doc.name] || uploading[doc.name]">
          {{ uploading[doc.name] ? 'Uploading...' : 'Upload' }}
        </button>
        <span v-if="uploaded[doc.name]" style="color:green; margin-left:1em;">Uploaded!</span>
        <span v-if="uploadError[doc.name]" style="color:red; margin-left:1em;">{{ uploadError[doc.name] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tenantId = route.query.tenantId || ''
const industryId = route.query.industryId || ''

const documentTypes = ref([])
const loading = ref(true)
const selectedFiles = ref({})
const uploading = ref({})
const uploaded = ref({})
const uploadError = ref({})

onMounted(async () => {
  loading.value = true
  try {
    const res = await fetch('/api/docs-config')
    const config = await res.json()
    if (
      config[tenantId] &&
      config[tenantId][industryId]
    ) {
      // Combine required and optional docs, marking required ones
      const requiredDocs = (config[tenantId][industryId].required || []).map(doc => ({ ...doc, required: true }))
      const optionalDocs = (config[tenantId][industryId].optional || []).map(doc => ({ ...doc, required: false }))
      documentTypes.value = [...requiredDocs, ...optionalDocs]
    } else {
      documentTypes.value = []
    }
  } catch (e) {
    documentTypes.value = []
  }
  loading.value = false
})

function handleFileChange(event, docName) {
  selectedFiles.value[docName] = event.target.files[0]
}

async function uploadFile(docName) {
  if (!selectedFiles.value[docName]) return
  uploading.value[docName] = true
  uploadError.value[docName] = ''
  try {
    const formData = new FormData()
    formData.append('file', selectedFiles.value[docName])
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    if (!res.ok) throw new Error('Upload failed')
    uploaded.value[docName] = true
  } catch (e) {
    uploadError.value[docName] = e.message || 'Upload error'
  }
  uploading.value[docName] = false
}
</script> 