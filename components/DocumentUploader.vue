
<template>
  <div>
    <h2>{{ layer.toUpperCase() }} Document Upload</h2>
    <div v-if="config[layer]">
      <div v-for="doc in config[layer]" :key="doc.name" style="margin-bottom: 1em;">
        <label>{{ doc.name }} <span v-if="doc.required">*</span></label>
        <input type="file" @change="e => handleFileUpload(e, doc)" />
        <span v-if="uploaded[doc.name]">✅ Uploaded</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ layer: String })
const config = ref({})
const uploaded = ref({})

onMounted(async () => {
  const res = await fetch('/api/docs-config')
  config.value = await res.json()
})

async function handleFileUpload(e, doc) {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('file', file)

  const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData })
  const { url } = await uploadRes.json()

  await fetch('/api/docs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: doc.name,
      fileUrl: url,
      required: doc.required,
      layer: props.layer,
      uploadedAt: new Date()
    })
  })

  uploaded.value[doc.name] = true
}
</script>
