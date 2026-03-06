<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, useRouter, withBase } from 'vitepress'

const { lang } = useData()
const route = useRoute()
const router = useRouter()

const buttonLabel = computed(() => (lang.value.startsWith('zh') ? 'English' : '简体中文'))

function switchLocale() {
  const p = route.path

  if (p.startsWith('/en/')) {
    router.go(withBase(p.replace('/en/', '/zh/')))
    return
  }

  if (p.startsWith('/zh/')) {
    router.go(withBase(p.replace('/zh/', '/en/')))
    return
  }

  if (lang.value.startsWith('zh')) {
    router.go(withBase('/en/'))
    return
  }

  router.go(withBase('/zh/'))
}
</script>

<template>
  <button class="nav-btn-lang" :title="buttonLabel" :aria-label="buttonLabel" @click="switchLocale">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  </button>
</template>

<style scoped>
.nav-btn-lang {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}

.nav-btn-lang:hover {
  color: var(--vp-c-brand-1);
}

.nav-btn-lang svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .nav-btn-lang {
    padding: 0 8px;
  }
}
</style>
