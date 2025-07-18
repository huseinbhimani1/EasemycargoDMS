<template>
  <div>
    <h1>Login Check</h1>
    <label>Tenant:
      <select v-model="tenant">
        <option v-for="t in tenantList" :key="t" :value="t">{{ t }}</option>
      </select>
    </label>
    <label>Industry:
      <select v-model="industry">
        <option v-for="i in industryList" :key="i" :value="i">{{ i }}</option>
      </select>
    </label>
    <button @click="checkDocs">Validate</button>

    <div v-if="checked">
      <p v-if="result?.isComplete" style="color: green;">✅ All required documents are uploaded</p>
      <div v-else style="color: red;">
        ❌ Missing Documents:
        <ul>
          <li v-for="doc in result.missing" :key="doc.name">{{ doc.name }}</li>
        </ul>
      </div>
    </div>

    <!-- Debug: Show all uploaded docs for this tenant/industry -->
    <div v-if="uploadedDocs.length" style="margin-top:2em;">
      <h3>Uploaded Documents (Debug)</h3>
      <ul>
        <li v-for="doc in uploadedDocs" :key="doc._id || doc.name">
          {{ doc.name }} ({{ doc.fileUrl }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useDocumentValidation } from '~/composables/useDocumentValidation'

const tenant = ref('')
const industry = ref('')
const tenantList = ref([])
const industryList = ref([])
const result = ref(null)
const checked = ref(false)
const uploadedDocs = ref([])

onMounted(async () => {
  const res = await fetch('/api/docs-config')
  const config = await res.json()
  tenantList.value = Object.keys(config)
  tenant.value = tenantList.value[0] || ''
  updateIndustryList(config)
  await fetchUploadedDocs()
})

watch(tenant, async (newTenant) => {
  const res = await fetch('/api/docs-config')
  const config = await res.json()
  updateIndustryList(config)
  await fetchUploadedDocs()
})

watch(industry, async () => {
  await fetchUploadedDocs()
})

function updateIndustryList(config) {
  if (tenant.value && config[tenant.value]) {
    industryList.value = Object.keys(config[tenant.value])
    industry.value = industryList.value[0] || ''
  } else {
    industryList.value = []
    industry.value = ''
  }
}

async function checkDocs() {
  result.value = await useDocumentValidation(tenant.value, industry.value)
  checked.value = true
  uploadedDocs.value = result.value.uploadedDocs || []
}

async function fetchUploadedDocs() {
  if (!tenant.value || !industry.value) {
    uploadedDocs.value = []
    return
  }
  try {
    const res = await fetch('/api/docs')
    const data = await res.json()
    uploadedDocs.value = (data.documents || []).filter(
      d => d.tenantId === tenant.value && d.industryId === industry.value
    )
  } catch {
    uploadedDocs.value = []
  }
}
</script>
