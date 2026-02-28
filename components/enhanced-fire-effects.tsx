"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    size: number
    type: 'ember' | 'sparkle' | 'firework' | 'spear'
    hue: number
    opacity: number
}

interface Firework {
    x: number
    y: number
    particles: Particle[]
    exploded: boolean
}

export default function EnhancedFireEffects() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        const fireworks: Firework[] = []
        const maxParticles = 60 // Balanced performance

        // Create different particle types
        const createEmber = () => {
            return {
                x: Math.random() * canvas.width,
                y: canvas.height + 10,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -Math.random() * 1.5 - 0.5,
                life: 1,
                maxLife: Math.random() * 80 + 60,
                size: Math.random() * 4 + 2,
                type: 'ember' as const,
                hue: Math.random() * 30, // Red-orange
                opacity: 1,
            }
        }

        const createSparkle = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.7,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                life: 1,
                maxLife: Math.random() * 40 + 30,
                size: Math.random() * 2 + 1,
                type: 'sparkle' as const,
                hue: 45, // Golden
                opacity: 1,
            }
        }

        const createSpear = () => {
            const fromLeft = Math.random() > 0.5
            return {
                x: fromLeft ? 0 : canvas.width,
                y: Math.random() * canvas.height * 0.5,
                vx: fromLeft ? Math.random() * 4 + 2 : -(Math.random() * 4 + 2),
                vy: Math.random() * 2 - 1,
                life: 1,
                maxLife: 60,
                size: 3,
                type: 'spear' as const,
                hue: Math.random() * 30,
                opacity: 1,
            }
        }

        const createFirework = () => {
            return {
                x: Math.random() * canvas.width,
                y: canvas.height,
                particles: [],
                exploded: false,
            }
        }

        // Initialize particles
        for (let i = 0; i < maxParticles * 0.5; i++) {
            particles.push(createEmber())
        }
        for (let i = 0; i < maxParticles * 0.3; i++) {
            particles.push(createSparkle())
        }

        // Periodically create spears and fireworks
        const spearInterval = setInterval(() => {
            if (particles.filter(p => p.type === 'spear').length < 3) {
                particles.push(createSpear())
            }
        }, 3000)

        const fireworkInterval = setInterval(() => {
            if (fireworks.length < 2) {
                fireworks.push(createFirework())
            }
        }, 4000)

        // Animation loop
        const animate = () => {
            // Clear with fade effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Scroll effect multiplier
            const scrollEffect = 1 + (scrollY / 1000) * 0.5

            // Draw and update particles
            particles.forEach((p, index) => {
                p.x += p.vx * scrollEffect
                p.y += p.vy * scrollEffect
                p.life -= 1

                const alpha = p.life / p.maxLife

                if (p.type === 'ember') {
                    // Glowing ember effect
                    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
                    gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${alpha * 0.9})`)
                    gradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 50%, ${alpha * 0.5})`)
                    gradient.addColorStop(1, `hsla(${p.hue}, 100%, 40%, 0)`)
                    ctx.fillStyle = gradient
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
                    ctx.fill()
                }

                if (p.type === 'sparkle') {
                    // Twinkling sparkle
                    const twinkle = Math.sin(Date.now() * 0.01 + index) * 0.5 + 0.5
                    ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${alpha * twinkle})`
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                    ctx.fill()

                    // Star rays
                    ctx.strokeStyle = `hsla(${p.hue}, 100%, 90%, ${alpha * twinkle * 0.5})`
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(p.x - p.size * 2, p.y)
                    ctx.lineTo(p.x + p.size * 2, p.y)
                    ctx.moveTo(p.x, p.y - p.size * 2)
                    ctx.lineTo(p.x, p.y + p.size * 2)
                    ctx.stroke()
                }

                if (p.type === 'spear') {
                    // Shooting spear trail
                    const gradient = ctx.createLinearGradient(
                        p.x, p.y,
                        p.x - p.vx * 10, p.y - p.vy * 10
                    )
                    gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${alpha})`)
                    gradient.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`)

                    ctx.strokeStyle = gradient
                    ctx.lineWidth = p.size
                    ctx.lineCap = 'round'
                    ctx.beginPath()
                    ctx.moveTo(p.x, p.y)
                    ctx.lineTo(p.x - p.vx * 10, p.y - p.vy * 10)
                    ctx.stroke()
                }

                // Reset particle if dead
                if (p.life <= 0 || p.x < -20 || p.x > canvas.width + 20 || p.y < -20) {
                    if (p.type === 'ember') {
                        particles[index] = createEmber()
                    } else if (p.type === 'sparkle') {
                        particles[index] = createSparkle()
                    } else if (p.type === 'spear') {
                        particles.splice(index, 1)
                    }
                }
            })

            // Handle fireworks
            fireworks.forEach((fw, fwIndex) => {
                if (!fw.exploded) {
                    fw.y -= 3

                    // Draw ascending firework
                    ctx.fillStyle = 'hsla(30, 100%, 60%, 0.8)'
                    ctx.beginPath()
                    ctx.arc(fw.x, fw.y, 3, 0, Math.PI * 2)
                    ctx.fill()

                    if (fw.y < canvas.height * 0.3) {
                        fw.exploded = true
                        // Create explosion particles
                        for (let i = 0; i < 30; i++) {
                            const angle = (Math.PI * 2 * i) / 30
                            const speed = Math.random() * 3 + 2
                            fw.particles.push({
                                x: fw.x,
                                y: fw.y,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed,
                                life: 1,
                                maxLife: Math.random() * 40 + 30,
                                size: Math.random() * 2 + 1,
                                type: 'firework',
                                hue: Math.random() * 60,
                                opacity: 1,
                            })
                        }
                    }
                } else {
                    // Draw explosion particles
                    fw.particles.forEach((p, pIndex) => {
                        p.x += p.vx
                        p.y += p.vy
                        p.vy += 0.05 // Gravity
                        p.life -= 1

                        const alpha = p.life / p.maxLife
                        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha})`
                        ctx.beginPath()
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                        ctx.fill()

                        if (p.life <= 0) {
                            fw.particles.splice(pIndex, 1)
                        }
                    })

                    if (fw.particles.length === 0) {
                        fireworks.splice(fwIndex, 1)
                    }
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            clearInterval(spearInterval)
            clearInterval(fireworkInterval)
        }
    }, [scrollY])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        />
    )
}
