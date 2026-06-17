/* ════════════════════════════════════════
   BOOT SEQUENCE
   ════════════════════════════════════════ */
(function () {

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const bootLog = document.getElementById('boot-log');
  const progressFill = document.getElementById('progress-bar');
  const progressLabel = document.getElementById('progress-label');
  const bootScreen = document.getElementById('boot-screen');
  const dashboard = document.getElementById('dashboard');

  /* ---------- boot messages ---------- */
  const steps = [
    { msg: 'MY-DASHBOARD BIOS v1.0.0 (build 2026)',         cls: 'system',  delay: 300, prog: 0 },
    { msg: 'Copyright (c) 2026 swpar@system',                cls: 'system',  delay: 200, prog: 0 },
    { msg: 'All rights reserved.',                             cls: 'system',  delay: 180, prog: 0 },
    { msg: '',                                                 cls: '',        delay: 120, prog: 0 },
    { msg: 'CPU:  x86_64  |  RAM:  32 GB  |  SYS:  ONLINE',   cls: 'system',  delay: 250, prog: 4 },
    { msg: '',                                                 cls: '',        delay: 100, prog: 0 },
    { msg: 'Initializing system components…',                  cls: '',        delay: 350, prog: 12, status: 'ok' },
    { msg: 'Loading kernel modules…',                          cls: '',        delay: 350, prog: 22, status: 'ok' },
    { msg: 'Configuring memory management…',                   cls: '',        delay: 300, prog: 32, status: 'ok' },
    { msg: 'Starting network services…',                       cls: '',        delay: 400, prog: 44, status: 'ok' },
    { msg: 'Initializing display interface…',                  cls: '',        delay: 350, prog: 56, status: 'ok' },
    { msg: 'Mounting storage devices…',                        cls: '',        delay: 300, prog: 66, status: 'warn', statusText: '[WARN]' },
    { msg: 'Configuring security protocols…',                  cls: '',        delay: 350, prog: 76, status: 'ok' },
    { msg: 'Starting user session…',                           cls: '',        delay: 350, prog: 86, status: 'ok' },
    { msg: 'Loading dashboard interface…',                     cls: '',        delay: 500, prog: 95, status: 'ok' },
    { msg: '',                                                 cls: '',        delay: 150, prog: 0 },
    { msg: '────────────────────────────────────────',         cls: 'divider', delay: 200, prog: 100 },
    { msg: 'Boot sequence complete.  System ready.',          cls: 'system',  delay: 600, prog: 100 },
    { msg: 'Redirecting to dashboard…',                        cls: 'system',  delay: 900, prog: 100 },
  ];

  let aborted = false;

  function addLine({ msg, cls, status, statusText }) {
    const line = document.createElement('div');
    line.className = `boot-line${cls ? ' ' + cls : ''}`;

    const left = document.createElement('span');
    left.className = 'boot-msg';
    left.textContent = msg;
    line.appendChild(left);

    if (status) {
      const right = document.createElement('span');
      right.className = `boot-status ${status}`;
      right.textContent = statusText || '[ OK ]';
      line.appendChild(right);
    }

    bootLog.appendChild(line);
    bootLog.scrollTop = bootLog.scrollHeight;
  }

  function setProgress(pct) {
    progressFill.style.width = pct + '%';
    progressLabel.textContent = pct + '%';
  }

  async function boot() {
    for (let i = 0; i < steps.length; i++) {
      if (aborted) return;
      const s = steps[i];
      await sleep(s.delay);
      if (aborted) return;
      addLine(s);
      if (s.prog !== undefined) setProgress(s.prog);
    }

    await sleep(400);
    if (aborted) return;

    /* transition to dashboard */
    bootScreen.classList.add('hidden');
    dashboard.classList.add('visible');

    /* kick off dashboard animations */
    setTimeout(() => {
      startTyping();
      animateSkills();
    }, 400);

    /* start uptime clock */
    startUptime();
  }

  /* start boot on load */
  boot();

  /* ---------- expose for gc / safety ---------- */
  window.__abortBoot = () => { aborted = true; };

  /* ════════════════════════════════════════
     TYPING ANIMATION
     ════════════════════════════════════════ */
  function startTyping() {
    const target = document.getElementById('typing-text');
    const cursor = document.getElementById('typing-cursor');
    const fullText =
      'Hello. I\'m swpar.\n'
      + 'I design & build systems for the web.\n'
      + 'Architect by day, creative coder by night.\n'
      + 'Focused on performance, security, and clean UX.\n'
      + '\n'
      + '> system status: BUILDING\n'
      + '> current project: This dashboard\n'
      + '> ready for: collaboration\n';

    let idx = 0;
    let timer;

    function type() {
      if (idx < fullText.length) {
        target.textContent = fullText.slice(0, idx + 1);
        idx++;
        /* variable speed for realism */
        const base = 28;
        const variance = 22;
        const ch = fullText[idx - 1];
        const pause = ch === '\n' ? 180 : ch === '.' || ch === ':' ? 80 : 0;
        timer = setTimeout(type, base + Math.random() * variance + pause);
      } else {
        cursor.style.animation = 'none';
        cursor.style.opacity = '1';
      }
    }

    /* small initial delay before typing begins */
    setTimeout(type, 600);
  }

  /* ════════════════════════════════════════
     SKILL BAR ANIMATION
     ════════════════════════════════════════ */
  function animateSkills() {
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach((m, i) => {
      const label = m.querySelector('.metric-pct');
      const fill = m.querySelector('.metric-fill');
      const target = parseInt(label.getAttribute('data-target'), 10);

      setTimeout(() => {
        /* animate fill bar */
        fill.style.width = target + '%';

        /* animate counter */
        let current = 0;
        const stepTime = Math.max(12, Math.floor(400 / target));
        const interv = setInterval(() => {
          current++;
          label.textContent = current + '%';
          if (current >= target) {
            label.textContent = target + '%';
            clearInterval(interv);
          }
        }, stepTime);
      }, i * 120); /* stagger */
    });
  }

  /* ════════════════════════════════════════
     UPTIME COUNTER
     ════════════════════════════════════════ */
  function startUptime() {
    const start = Date.now();
    const dashUptime = document.getElementById('uptime-display');
    const footerUptime = document.getElementById('footer-uptime');

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(elapsed / 3600);
      const m = Math.floor((elapsed % 3600) / 60);
      const s = elapsed % 60;
      const str = `UPTIME: ${pad(h)}:${pad(m)}:${pad(s)}`;
      const short = `UP ${pad(h)}:${pad(m)}:${pad(s)}`;
      dashUptime.textContent = str;
      footerUptime.textContent = short;
    }

    tick();
    setInterval(tick, 1000);
  }

})();
