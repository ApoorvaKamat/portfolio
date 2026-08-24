<template>
  <div class="chat-widget-root">
    <transition name="panel-fade">
      <div v-if="open" class="chat-panel">
        <div class="chat-header">
          <div class="chat-header-top">
            <div class="chat-avatar">A</div>
            <div class="chat-header-text">
              <h3>Apoorva's AI Assistant</h3>
              <div class="chat-status"><span class="chat-dot"></span> Online — ask me anything</div>
            </div>
            <button class="chat-close" @click="open = false" aria-label="Close chat">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="chat-header-wave"></div>
        </div>

        <div class="chat-messages" ref="messagesEl">
          <div class="chat-msg assistant">
            Hi! I'm a RAG chatbot trained on Apoorva's resume and portfolio. Ask me about her experience, projects, or skills.
          </div>
          <div
            v-for="(m, i) in messages"
            :key="i"
            :class="['chat-msg', m.role]"
            v-html="m.role === 'assistant' ? renderMarkdown(m.text) : escapeHtml(m.text)"
          ></div>
          <div v-if="loading" class="chat-typing">
            <span class="chat-typing-label">{{ loadingLabel }}</span>
            <span class="chat-typing-dots"><span></span><span></span><span></span></span>
          </div>
        </div>

        <div v-if="messages.length === 0" class="chat-chips">
          <button class="chat-chip" @click="ask(&quot;What did she build at Lumen?&quot;)">What did she build at Lumen?</button>
          <button class="chat-chip" @click="ask(&quot;Tell me about her projects&quot;)">Projects?</button>
          <button class="chat-chip" @click="ask(&quot;What is her AWS experience?&quot;)">AWS experience?</button>
          <button class="chat-chip" @click="ask(&quot;Tell me about her education&quot;)">Education?</button>
        </div>

        <form class="chat-input-row" @submit.prevent="ask(input)">
          <input
            v-model="input"
            type="text"
            placeholder="Type your question..."
            autocomplete="off"
            :disabled="loading"
          />
          <button type="submit" class="chat-send-btn" :disabled="loading || !input.trim()" aria-label="Send">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M3 11.5L21 3L13.5 21L11 13L3 11.5Z" fill="currentColor" />
            </svg>
          </button>
        </form>

        <div class="chat-footer-note">Retrieval-augmented generation • Groq + Spring Boot</div>
      </div>
    </transition>

    <button class="chat-toggle" @click="open = !open" :aria-label="open ? 'Close chat' : 'Open chat'">
      <svg v-if="!open" viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M4 4.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4.5 4V16H4a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z"
          stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
      </svg>
      <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const API_URL = import.meta.env.VITE_ASK_API_URL || 'https://portfolio-rag-backend-71mo.onrender.com/api/ask'

const LOADING_MESSAGES = [
  'Fetching apples...',
  'Waking up the intern...',
  'Digging through the resume...',
  'Consulting the portfolio gods...',
  'Brewing a good answer...',
  'Polishing the response...',
]

const open = ref(false)
const messages = ref([])
const input = ref('')
const loading = ref(false)
const loadingLabel = ref(LOADING_MESSAGES[0])
const messagesEl = ref(null)
let loadingInterval = null

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]))
}

function renderMarkdown(text) {
  const escaped = escapeHtml(text)
  const lines = escaped.split('\n')
  let html = ''
  let inList = false

  for (const rawLine of lines) {
    const line = rawLine.trim()
    const isBullet = /^[-*]\s+/.test(line)

    if (isBullet) {
      if (!inList) { html += '<ul>'; inList = true }
      html += '<li>' + line.replace(/^[-*]\s+/, '') + '</li>'
      continue
    }
    if (inList) { html += '</ul>'; inList = false }
    if (line === '') continue
    html += '<p>' + line + '</p>'
  }
  if (inList) html += '</ul>'

  return html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
}

function startLoadingRotation() {
  loadingLabel.value = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]
  loadingInterval = setInterval(() => {
    loadingLabel.value = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]
  }, 2200)
}

function stopLoadingRotation() {
  clearInterval(loadingInterval)
  loadingInterval = null
}

async function ask(question) {
  const q = question?.trim()
  if (!q || loading.value) return

  messages.value.push({ role: 'user', text: q })
  input.value = ''
  loading.value = true
  startLoadingRotation()
  await scrollToBottom()

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    messages.value.push({ role: 'assistant', text: data.answer })
  } catch (err) {
    messages.value.push({
      role: 'assistant',
      text: "Sorry, something went wrong reaching the backend. Please try again in a moment.",
    })
    console.error(err)
  } finally {
    loading.value = false
    stopLoadingRotation()
    await scrollToBottom()
  }
}
</script>

<style scoped>
.chat-widget-root {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.chat-toggle {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: none;
  background: var(--blue);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(0, 113, 227, 0.35);
  transition: transform 0.2s ease, background 0.2s ease;
}

.chat-toggle:hover {
  background: var(--blue-h);
  transform: scale(1.05);
}

.chat-panel {
  width: min(380px, calc(100vw - 48px));
  height: min(560px, calc(100vh - 140px));
  background: var(--card);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-soft);
  display: flex;
  flex-direction: column;
}

.chat-header {
  position: relative;
  background: var(--blue);
  color: #fff;
  padding: 18px 18px 26px;
  flex-shrink: 0;
}

.chat-header-top {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.chat-header-text {
  flex: 1;
  min-width: 0;
}

.chat-header-text h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.chat-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  opacity: 0.9;
  margin-top: 2px;
}

.chat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3cf281;
  flex-shrink: 0;
}

.chat-close {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}

.chat-header-wave {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 18px;
  background: var(--card);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.chat-messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding: 16px 16px 6px;
}

.chat-msg {
  padding: 0.6rem 0.85rem;
  border-radius: 14px;
  max-width: 85%;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--black);
}

.chat-msg :deep(p) { margin: 0 0 0.5rem; }
.chat-msg :deep(p:last-child) { margin-bottom: 0; }
.chat-msg :deep(ul) { margin: 0 0 0.5rem; padding-left: 1.1rem; }
.chat-msg :deep(ul:last-child) { margin-bottom: 0; }
.chat-msg :deep(li) { margin-bottom: 0.25rem; }
.chat-msg :deep(strong) { font-weight: 700; }

.chat-msg.user {
  align-self: flex-end;
  background: var(--blue);
  color: #fff;
  border-bottom-right-radius: 3px;
}

.chat-msg.assistant {
  align-self: flex-start;
  background: var(--off);
  border-bottom-left-radius: 3px;
}

.chat-typing {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0.6rem 0.85rem;
  background: var(--off);
  border-radius: 14px;
  border-bottom-left-radius: 3px;
  font-size: 0.78rem;
  color: var(--mid);
}

.chat-typing-dots {
  display: flex;
  gap: 3px;
  flex-shrink: 0;
}

.chat-typing-dots span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--light);
  animation: chat-bounce 1.2s infinite ease-in-out;
}
.chat-typing-dots span:nth-child(2) { animation-delay: 0.15s; }
.chat-typing-dots span:nth-child(3) { animation-delay: 0.3s; }

@keyframes chat-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-3px); opacity: 1; }
}

.chat-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 4px 16px 12px;
  flex-shrink: 0;
}

.chat-chip {
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 113, 227, 0.35);
  background: transparent;
  color: var(--blue);
  font-size: 0.72rem;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s ease;
}

.chat-chip:hover {
  background: rgba(0, 113, 227, 0.08);
}

.chat-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid var(--border-soft);
  flex-shrink: 0;
}

.chat-input-row input {
  flex: 1;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: var(--off);
  color: var(--black);
  font-size: 0.85rem;
  font-family: inherit;
  outline: none;
}

.chat-input-row input:focus {
  border-color: var(--blue);
}

.chat-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: var(--blue);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease, transform 0.15s ease;
}

.chat-send-btn:hover:not(:disabled) { background: var(--blue-h); transform: scale(1.05); }
.chat-send-btn:disabled { opacity: 0.4; cursor: default; }

.chat-footer-note {
  text-align: center;
  font-size: 0.62rem;
  color: var(--light);
  padding-bottom: 10px;
  flex-shrink: 0;
}

.panel-fade-enter-active, .panel-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.panel-fade-enter-from, .panel-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

@media (max-width: 480px) {
  .chat-widget-root {
    right: 14px;
    bottom: 14px;
  }
}
</style>
