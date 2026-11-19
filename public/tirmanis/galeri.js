const scenes = [...document.querySelectorAll('.scene')]
const captions = ['Çam tacında budama', 'İple erişim hazırlığı', 'Sahada dal incelemesi']
const controls = document.querySelector('.controls')
const caption = document.querySelector('#caption')
const count = document.querySelector('#count')
const photoNote = document.querySelector('.photo-note')
const playback = document.querySelector('#playback')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const slideDuration = 5000
let active = 0
let playing = !reducedMotion.matches
let timer

function advance(step) {
  scenes[active].classList.remove('current')
  scenes[active].setAttribute('aria-hidden', 'true')
  active = (active + step + scenes.length) % scenes.length
  scenes[active].classList.add('current')
  scenes[active].removeAttribute('aria-hidden')
  caption.textContent = captions[active]
  count.textContent = [active + 1, scenes.length].map(n => String(n).padStart(2, '0')).join(' / ')
}

function scheduleSlides() {
  window.clearInterval(timer)
  if (playing && !document.hidden) {
    timer = window.setInterval(() => advance(1), slideDuration)
  }
}

function setPlaying(value) {
  playing = value
  const label = playing ? 'Otomatik geçişi duraklat' : 'Otomatik geçişi başlat'
  playback.setAttribute('aria-label', label)
  playback.title = label
  playback.textContent = playing ? 'Ⅱ' : '▶'
  photoNote.setAttribute('aria-live', playing ? 'off' : 'polite')
  scheduleSlides()
}

controls.hidden = false
setPlaying(playing)
playback.addEventListener('click', () => setPlaying(!playing))
controls.addEventListener('click', event => {
  const button = event.target.closest('button[data-step]')
  if (!button) return
  advance(Number(button.dataset.step))
  scheduleSlides()
})
document.addEventListener('visibilitychange', scheduleSlides)
reducedMotion.addEventListener('change', event => {
  if (event.matches) setPlaying(false)
})

const plate = document.querySelector('.service-plate img')
for (const service of document.querySelectorAll('.service-list details')) {
  service.addEventListener('toggle', () => {
    if (service.open) plate.src = service.querySelector('img').src
  })
}
document.querySelector('.service-grid').classList.add('interactive')
