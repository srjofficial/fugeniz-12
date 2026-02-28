"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    size: number
    hue: number
}

export default function FireParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        const particles: Particle[] = []
        const maxParticles = 80

        // Create particles
        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: canvas.height + 10,
                vx: (Math.random() - 0.5) * 0.8,
                vy: -Math.random() * 2 - 1,
                life: 1,
                maxLife: Math.random() * 60 + 40,
                size: Math.random() * 3 + 1,
                hue: Math.random() * 30 + 0, // Red-orange hues (0-30)
            }
        }

        // Initialize particles
        for (let i = 0; i < maxParticles; i++) {
            particles.push(createParticle())
        }

        // Animation loop
        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p, index) => {
                p.x += p.vx
                p.y += p.vy
                p.life -= 1

                // Fade and glow effect
                const alpha = p.life / p.maxLife
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
                gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${alpha * 0.8})`)
                gradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 50%, ${alpha * 0.4})`)
                gradient.addColorStop(1, `hsla(${p.hue}, 100%, 40%, 0)`)

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
                ctx.fill()

                // Add sparkle effect
                if (Math.random() > 0.95) {
                    ctx.fillStyle = `hsla(45, 100%, 80%, ${alpha})`
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
                    ctx.fill()
                }

                // Reset particle if dead
                if (p.life <= 0) {
                    particles[index] = createParticle()
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        />
    )
}
