import React, { useRef, useLayoutEffect } from 'react'

const getHSL = num => `hsl(${num + 180}, 50%, 60%)`

function DancingCanvas({ base = 0 }) {
  const canvasRef = useRef(null)

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    const WIDTH = canvas.width
    const HEIGHT = canvas.height
    const ctx = canvas.getContext('2d')

    let i = 0
    let shouldAdd = false
    function draw() {
      if (shouldAdd) {
        i += 0.1
      } else {
        i -= 0.1
      }

      if (i <= -180) {
        shouldAdd = true
      } else if (i > 180) {
        shouldAdd = false
      }

      const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)

      gradient.addColorStop(0, getHSL(base + i))
      gradient.addColorStop(1, getHSL(base + i + 10))
      ctx.fillStyle = gradient

      ctx.fillRect(0, 0, WIDTH, HEIGHT)

      requestAnimationFrame(draw)
    }

    draw()
  })

  const fallbackGradient = `linear-gradient(
      110deg, 
      ${getHSL(base)},
      ${getHSL(base + 50)},
  )`

  return (
    <canvas
      style={{
        height: '100%',
        width: '100%',
        zIndex: '0',
        backgroundColor: getHSL(base),
        background: fallbackGradient,
      }}
      ref={canvasRef}
    />
  )
}

export default DancingCanvas
