import React, { useRef, useLayoutEffect } from 'react'

function DancingCanvas() {
  const canvasRef = useRef(null)
  useLayoutEffect(() => {
    console.log('called')

    const canvas = canvasRef.current
    const WIDTH = canvas.width
    const HEIGHT = canvas.height
    const ctx = canvas.getContext('2d')
    const getHSL = num => `hsl(${num}, 100%, 80%)`

    let i = 0
    function draw() {
      i += 0.1

      const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)

      gradient.addColorStop(0, getHSL(i + 30))
      gradient.addColorStop(0.2, getHSL(i + 60))
      gradient.addColorStop(0.4, getHSL(i + 90))
      gradient.addColorStop(0.6, getHSL(i + 120))
      gradient.addColorStop(0.8, getHSL(i + 150))
      gradient.addColorStop(1, getHSL(i + 180))
      ctx.fillStyle = gradient

      ctx.fillRect(0, 0, WIDTH, HEIGHT)

      requestAnimationFrame(draw)
    }

    draw()
  })

  return (
    <canvas
      style={{
        height: '100%',
        width: '100%',
        zIndex: '0',
      }}
      ref={canvasRef}
    />
  )
}

export default DancingCanvas