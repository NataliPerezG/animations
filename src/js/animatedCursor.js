const cursorContainer = document.querySelector('.animatedCursor')

if (!cursorContainer) {
    throw new Error('.animatedCursor not found')
}

const throttleMs = 60
let lastSpawn = 0

cursorContainer.addEventListener('mousemove', (e) => {
    const now = performance.now()
    if (now - lastSpawn < throttleMs) return
    lastSpawn = now

    const rect = cursorContainer.getBoundingClientRect()
    const posX = e.clientX - rect.left + cursorContainer.scrollLeft
    const posY = e.clientY - rect.top + cursorContainer.scrollTop

    const span = document.createElement('span')
    const size = Math.max(16, Math.floor(Math.random() * 100))

    span.style.width = `${size}px`
    span.style.height = `${size}px`
    span.style.left = `${posX}px`
    span.style.top = `${posY}px`

    cursorContainer.appendChild(span)

    span.addEventListener(
        'animationend',
        () => {
            span.remove()
        },
        { once: true }
    )
})
