---
layout: home
hero:
  name: PharmaReg Global Docs
  text: 全球药品注册法规知识库
  image:
    src: /hero.svg
    alt: PharmaReg Global
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/YIMAI-AI-Doc/PharmaReg-Global
features:
  - title: 🇨🇳 NMPA
    details: 中国国家药品监督管理局（National Medical Products Administration）。
    link: /zh/nmpa/
    linkText: 查看
  - title: 🇺🇸 FDA
    details: 美国食品药品监督管理局（U.S. Food and Drug Administration）。
    link: /zh/fda/
    linkText: 查看
  - title: 🇪🇺 EMA
    details: 欧洲药品管理局（European Medicines Agency）。
    link: /zh/ema/
    linkText: 查看
  - title: 🇯🇵 PMDA
    details: 日本医药品医疗器械综合机构（Pharmaceuticals and Medical Devices Agency）。
    link: /zh/pmda/
    linkText: 查看
---

<div class="hotdocs-title">实时热搜文档</div>

<div class="hotdocs">
  <div class="hotdocs-head">
    <div class="hotdocs-kicker">🔥 最近 7 天热门文档</div>
    <div class="hotdocs-badge">Top 10</div>
  </div>

  <div class="hotdocs-grid">
    <a class="hotdocs-item" href="/zh/guide/ectd-intro">
      <span class="hotdocs-rank">1</span>
      <span class="hotdocs-text">eCTD 申报流程详解</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/fda-requirements">
      <span class="hotdocs-rank">2</span>
      <span class="hotdocs-text">FDA 药品注册资料要求</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/eu-gmp">
      <span class="hotdocs-rank">3</span>
      <span class="hotdocs-text">欧盟 GMP 附录最新版</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/country-class">
      <span class="hotdocs-rank">4</span>
      <span class="hotdocs-text">药品全球注册国家分类</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/ectd-versions">
      <span class="hotdocs-rank">5</span>
      <span class="hotdocs-text">eCTD v3.2 与 v4.0 区别</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/nmpa-template">
      <span class="hotdocs-rank">6</span>
      <span class="hotdocs-text">NMPA 申报资料目录模板</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/ich-guidelines">
      <span class="hotdocs-rank">7</span>
      <span class="hotdocs-text">ICH 指导原则全文汇总</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/ctd-structure">
      <span class="hotdocs-rank">8</span>
      <span class="hotdocs-text">CTD 文档结构标准</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/reg-timeline">
      <span class="hotdocs-rank">9</span>
      <span class="hotdocs-text">药品注册周期与时间线</span>
    </a>
    <a class="hotdocs-item" href="/zh/guide/common-failures">
      <span class="hotdocs-rank">10</span>
      <span class="hotdocs-text">常见申报失败原因汇总</span>
    </a>
  </div>
</div>

<div class="hotdocs-title">💬 医药法规智能问答</div>

<div id="pharma-ai-container" style="margin: 20px 0; padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 16px; background: var(--vp-c-bg-soft);">
  <textarea
    id="question-input"
    placeholder="请输入你的医药法规问题（如：eCTD申报流程、FDA药品注册要求）"
    style="width: 100%; max-width: 800px; height: 100px; padding: 10px 12px; border: 1px solid var(--vp-c-divider); border-radius: 12px; font-size: 14px; line-height: 1.6; background: var(--vp-c-bg); color: var(--vp-c-text-1);"
  ></textarea>
  <div style="margin: 10px 0;">
    <button
      id="submit-question"
      type="button"
      style="padding: 10px 18px; background: var(--vp-c-brand-3); color: var(--vp-c-neutral-inverse); border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent); border-radius: 12px; cursor: pointer; font-size: 14px; font-weight: 700;"
    >
      提交提问
    </button>
  </div>
  <div
    id="answer-output"
    style="padding: 14px; border: 1px solid var(--vp-c-divider); border-radius: 12px; max-width: 800px; min-height: 150px; font-size: 14px; line-height: 1.7; background: var(--vp-c-bg); color: var(--vp-c-text-1); word-break: break-word;"
  >
    请输入问题并点击提交，我会为你解答全球药品注册法规相关问题。
  </div>
</div>

<style>
.pharma-ai-spinner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: rgba(255, 255, 255, 1);
  display: inline-block;
  vertical-align: -2px;
  margin-right: 8px;
  animation: pharma-ai-spin 0.8s linear infinite;
}
@keyframes pharma-ai-spin {
  to { transform: rotate(360deg); }
}
</style>

<script>
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
(() => {
  const AI_API_URL = 'https://pharma-reg-ai-5gqddef6cd04c140-1303835249.ap-shanghai.app.tcloudbase.com/pharma-ai';
  const MARKED_SRC = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
  const IDLE_TEXT = '提交提问';

  function $(id) {
    return document.getElementById(id)
  }

  function loadMarked() {
    if (window.marked && typeof window.marked.parse === 'function') return Promise.resolve(window.marked)
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${MARKED_SRC}"]`)
      if (existing) {
        existing.addEventListener('load', () => resolve(window.marked), { once: true })
        existing.addEventListener('error', reject, { once: true })
        return
      }

      const script = document.createElement('script')
      script.src = MARKED_SRC
      script.async = true
      script.onload = () => resolve(window.marked)
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  function renderMarkdown(text) {
    const output = $('answer-output')
    if (!output) return

    const md = window.marked
    if (md && typeof md.parse === 'function') {
      output.innerHTML = md.parse(text ?? '')
    } else {
      output.textContent = text ?? ''
    }
  }

  function setLoading(isLoading) {
    const button = $('submit-question')
    const output = $('answer-output')
    if (!button || !output) return

    if (isLoading) {
      button.disabled = true
      button.innerHTML = '<span class="pharma-ai-spinner"></span>正在思考...'
      output.textContent = '正在检索专业知识库并生成回答，请稍候...'
    } else {
      button.disabled = false
      button.textContent = IDLE_TEXT
    }
  }

  async function submitQuestion() {
    const input = $('question-input')
    const output = $('answer-output')
    if (!input || !output) return

    const question = input.value.trim()
    if (!question) {
      output.textContent = '请输入有效的问题！'
      return
    }

    setLoading(true)

    try {
      await loadMarked().catch(() => undefined)

      const response = await fetch(AI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      })

      if (response.ok) {
        const data = await response.json().catch(() => null)
        if (data && data.answer) {
          renderMarkdown(data.answer)
        } else {
          output.textContent = '未获取到回答，请换个问题试试！'
        }
      } else {
        const errorData = await response.json().catch(() => null)
        output.textContent = `出错了：${errorData?.error ?? `请求失败（状态码：${response.status}）`}`
      }
    } catch (error) {
      console.error('请求失败：', error)
      output.textContent = '网络错误，请检查网络或稍后再试！'
    } finally {
      setLoading(false)
    }
  }

  function bind() {
    const button = $('submit-question')
    const input = $('question-input')
    if (!button || !input) return

    button.addEventListener('click', submitQuestion)
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.ctrlKey) submitQuestion()
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true })
  } else {
    bind()
  }
})()
}
</script>