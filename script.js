/* ════════════════════════════════════════
   MODULE DATA
   ════════════════════════════════════════ */
const pages = {

  character: `
<div class="out-block">
  <div class="out-title">CHARACTER PROFILE — SYSTEM SPECS</div>
  <div class="out-row"><span class="out-key">HOSTNAME</span><span class="out-val">SPIDYCHOI</span></div>
  <div class="out-row"><span class="out-key">ARCHITECTURE</span><span class="out-val">Developer</span></div>
  <div class="out-row"><span class="out-key">VERSION</span><span class="out-val">24 (build 2000)</span></div>
  <div class="out-row"><span class="out-key">KERNEL</span><span class="out-val">Windows 11 x86_64 / Ubuntu 24.04</span></div>
  <div class="out-row"><span class="out-key">SHELL</span><span class="out-val">/bin/zsh</span></div>
  <div class="out-row"><span class="out-key">EDITOR</span><span class="out-val">nvim / code</span></div>
  <div class="out-row"><span class="out-key">UPTIME</span><span class="out-val">12,847 hours</span></div>
  <div class="out-row"><span class="out-key">LOCALE</span><span class="out-val">Asia/Seoul</span></div>
  <div class="out-row"><span class="out-key">TIMEZONE</span><span class="out-val">KST (UTC+9)</span></div>
  <div class="out-row"><span class="out-key">STATUS</span><span class="out-val">ACTIVE</span></div>
</div>`,

  quests: `
<div class="out-block">
  <div class="out-title">QUEST LOG — 2 ACTIVE</div>
  <div class="out-row"><span class="out-key">QST-001</span><span class="out-val">Master React Server Components</span></div>
  <div class="out-row"><span class="out-key">&nbsp;</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:50%"></span></span><span class="out-bar-pct">50%</span></span></div>
  <div class="out-row"><span class="out-key">UPDATED</span><span class="out-val">2026-06-15</span></div>
  <div style="height:4px"></div>
  <div class="out-row"><span class="out-key">QST-002</span><span class="out-val">Build personal dashboard v2</span></div>
  <div class="out-row"><span class="out-key">&nbsp;</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:30%"></span></span><span class="out-bar-pct">30%</span></span></div>
  <div class="out-row"><span class="out-key">UPDATED</span><span class="out-val">2026-06-17</span></div>
  <div style="height:4px"></div>
  <div class="out-row"><span class="out-key">QST-003</span><span class="out-val">Learn Go concurrency</span></div>
  <div class="out-row"><span class="out-key">&nbsp;</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:70%"></span></span><span class="out-bar-pct">70%</span></span></div>
  <div class="out-row"><span class="out-key">UPDATED</span><span class="out-val">2026-06-14</span></div>
  <div style="height:6px"></div>
  <div class="out-row"><span class="out-key">COMPLETED</span><span class="out-val">12</span></div>
  <div class="out-row"><span class="out-key">PENDING</span><span class="out-val">3</span></div>
</div>`,

  skills: `
<div class="out-block">
  <div class="out-title">SKILL TREE — SYSTEM CAPABILITIES</div>
  <div class="out-row"><span class="out-key">JavaScript</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:82%"></span></span><span class="out-bar-pct">82%</span></span></div>
  <div class="out-row"><span class="out-key">TypeScript</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:65%"></span></span><span class="out-bar-pct">65%</span></span></div>
  <div class="out-row"><span class="out-key">React</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:70%"></span></span><span class="out-bar-pct">70%</span></span></div>
  <div class="out-row"><span class="out-key">Node.js</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:60%"></span></span><span class="out-bar-pct">60%</span></span></div>
  <div class="out-row"><span class="out-key">Python</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:55%"></span></span><span class="out-bar-pct">55%</span></span></div>
  <div class="out-row"><span class="out-key">Linux</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:68%"></span></span><span class="out-bar-pct">68%</span></span></div>
  <div class="out-row"><span class="out-key">Docker</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:62%"></span></span><span class="out-bar-pct">62%</span></span></div>
  <div class="out-row"><span class="out-key">SQL</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:45%"></span></span><span class="out-bar-pct">45%</span></span></div>
  <div class="out-row"><span class="out-key">Go</span><span class="out-val out-bar"><span class="out-bar-track"><span class="out-bar-fill" style="width:20%"></span></span><span class="out-bar-pct">20%</span></span></div>
</div>`,

  inventory: `
<div class="out-block">
  <div class="out-title">INVENTORY — AVAILABLE TOOLS</div>
  <div class="out-row"><span class="out-key">EDITORS</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;nvim</span><span class="out-val">v0.10.0  —  Primary editor</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;code</span><span class="out-val">v1.91.0  —  Secondary editor</span></div>
  <div style="height:2px"></div>
  <div class="out-row"><span class="out-key">VERSION CONTROL</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;git</span><span class="out-val">v2.45.0  —  Daily driver</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;gh</span><span class="out-val">v2.50.0  —  GitHub CLI</span></div>
  <div style="height:2px"></div>
  <div class="out-row"><span class="out-key">CONTAINERS</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;docker</span><span class="out-val">v26.1.0  —  Container engine</span></div>
  <div style="height:2px"></div>
  <div class="out-row"><span class="out-key">API &amp; TESTING</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;postman</span><span class="out-val">v11.0.0  —  API client</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;curl</span><span class="out-val">v8.7.0   —  HTTP tool</span></div>
  <div style="height:2px"></div>
  <div class="out-row"><span class="out-key">DATABASE</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;psql</span><span class="out-val">v16.3    —  PostgreSQL client</span></div>
  <div class="out-row"><span class="out-key">&nbsp;&nbsp;redis-cli</span><span class="out-val">v7.4.0   —  Redis client</span></div>
</div>`,

  logs: `
<div class="out-block">
  <div class="out-title">SYSTEM LOGS — RECENT ACTIVITY</div>
  <div class="out-log"><span class="out-log-time">[03:42:15]</span><span class="hl-info">INFO</span>  System initialized</div>
  <div class="out-log"><span class="out-log-time">[03:42:16]</span><span class="hl-debug">DEBUG</span> User session started</div>
  <div class="out-log"><span class="out-log-time">[03:42:17]</span><span class="hl-info">INFO</span>  Display: dark mode</div>
  <div class="out-log"><span class="out-log-time">[03:42:18]</span><span class="hl-warn">WARN</span>  Preferred hours: 22:00–02:00</div>
  <div class="out-log"><span class="out-log-time">[03:42:19]</span><span class="hl-info">INFO</span>  Audio output: lofi / synthwave</div>
  <div class="out-log"><span class="out-log-time">[03:42:20]</span><span class="hl-debug">DEBUG</span> Cognitive load: moderate</div>
  <div class="out-log"><span class="out-log-time">[03:42:21]</span><span class="hl-info">INFO</span>  Active window: code editor</div>
  <div class="out-log"><span class="out-log-time">[03:42:22]</span><span class="hl-warn">WARN</span>  Memory: 14/32 GB</div>
  <div class="out-log"><span class="out-log-time">[03:42:23]</span><span class="hl-debug">DEBUG</span> Personality: [INTJ] [perfectionist]</div>
  <div class="out-log"><span class="out-log-time">[03:42:24]</span><span class="hl-info">INFO</span>  External input: keyboard</div>
  <div class="out-log"><span class="out-log-time">[03:42:25]</span><span class="hl-debug">DEBUG</span> Mood: focused</div>
  <div class="out-log"><span class="out-log-time">[03:42:26]</span><span class="hl-info">INFO</span>  Idle threshold: not exceeded</div>
  <div class="out-log"><span class="out-log-time">[03:42:27]</span><span class="hl-warn">WARN</span>  Caffeine level: elevated</div>
  <div class="out-log"><span class="out-log-time">[03:42:28]</span><span class="hl-debug">DEBUG</span> System status: nominal</div>
  <div class="out-log"><span class="out-log-time">[03:42:29]</span><span class="hl-info">INFO</span>  Profile: system interface online</div>
</div>`

};

/* ════════════════════════════════════════
   MODULE SWITCHING
   ════════════════════════════════════════ */
const modules = document.querySelectorAll('.module');
const outputBody = document.getElementById('output-body');
const cursorHTML = '<span class="cursor-blink">_</span>';

modules.forEach(mod => {
  mod.addEventListener('click', function () {
    modules.forEach(m => m.classList.remove('active'));
    this.classList.add('active');
    const key = this.getAttribute('data-mod');
    outputBody.innerHTML = pages[key] || '<span class="out-ready">module not found</span>';
  });
});

/* ════════════════════════════════════════
   UPTIME COUNTER
   ════════════════════════════════════════ */
(function startUptime() {
  const start = Date.now();
  const el = document.getElementById('sys-uptime');
  function pad(n) { return String(n).padStart(2, '0'); }
  function tick() {
    const s = Math.floor((Date.now() - start) / 1000);
    el.textContent = `UPTIME: ${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
  }
  tick();
  setInterval(tick, 1000);
})();

/* ════════════════════════════════════════
   SIGNAL BAR
   ════════════════════════════════════════ */
(function buildSignal() {
  const bar = document.getElementById('signal-bar');
  const blockCount = 12;
  for (let i = 0; i < blockCount; i++) {
    const b = document.createElement('div');
    b.className = 'signal-block';
    bar.appendChild(b);
  }

  function update() {
    const blocks = bar.querySelectorAll('.signal-block');
    const active = Math.floor(Math.random() * 4) + 5;
    blocks.forEach((b, i) => {
      b.classList.toggle('on', i < active);
    });
  }

  update();
  setInterval(update, 2400);
})();
