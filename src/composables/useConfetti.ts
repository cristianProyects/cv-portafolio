import confetti from 'canvas-confetti';
const useConfetti = () => {
/**
 * Lanza confeti a pantalla completa al entrar
 */
const launchFullScreenConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;

    const defaults = {
        startVelocity: 40,
        spread: 360,
        ticks: 70,
        zIndex: 9999,
    };

    const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount = Math.round(120 * (timeLeft / duration));

        // Izquierda
        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.1, 0.3),
                y: randomInRange(0.1, 0.3),
            },
        });

        // Derecha
        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.7, 0.9),
                y: randomInRange(0.1, 0.3),
            },
        });

        // Centro
        confetti({
            ...defaults,
            particleCount: particleCount / 2,
            origin: { x: 0.5, y: randomInRange(0.2, 0.5) },
        });
    }, 250);
};
return { launchFullScreenConfetti };
}
export default useConfetti;