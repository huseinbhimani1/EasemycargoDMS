<template>
  <div>
    <h1>DMC Dashboard</h1>
    <NuxtLink to="/tenant">Tenant</NuxtLink> | <NuxtLink to="/admin">Admin</NuxtLink> | <NuxtLink to="/login">Validate</NuxtLink>
    <div style="margin-top: 2em;">
      <label>Tenant ID:
        <select v-model="tenantId">
          <option disabled value="">Select Tenant</option>
          <option v-for="id in tenantIds" :key="id" :value="id">{{ id }}</option>
        </select>
      </label>
      <label style="margin-left: 1em;">Industry ID:
        <select v-model="industryId">
          <option disabled value="">Select Industry</option>
          <option v-for="id in industryIds" :key="id" :value="id">{{ id }}</option>
        </select>
      </label>
      <button style="margin-left: 1em;" @click="goToPlatform" :disabled="!tenantId || !industryId">Go to Platform</button>
    </div>
  </div>
</template>azszzs24R

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '#app'

const tenantId = ref('')
const industryId = ref('')
const router = useRouter()

// Fetch config from API
const { data: config, pending, error } = useFetch('/api/docs-config')

// Compute tenant IDs from top-level keys
const tenantIds = computed(() => config.value ? Object.keys(config.value) : [])

// Compute unique industry IDs across all tenants
const industryIds = computed(() => {
  if (!config.value) return []
  const industries = new Set()
  Object.values(config.value).forEach(tenant =>
    Object.keys(tenant).forEach(industry => industries.add(industry))
  )
  return Array.from(industries)
})

function goToPlatform() {
  if (tenantId.value && industryId.value) {
    router.push({ path: '/platform', query: { tenantId: tenantId.value, industryId: industryId.value } })
  }
}
</script>