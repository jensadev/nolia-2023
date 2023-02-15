window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    const layer3 = document.querySelector('.layer-3');

    window.addEventListener('mousemove', (e) => {
        console.log(e.clientX, e.clientY);
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        layer1.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
        layer2.style.transform = `translate(-${x * 100}px, -${y * 100}px)`;
        layer3.style.transform = `translate(-${x * 200}px, -${y * 200}px)`;
    });
    window.addEventListener('mouseout', () => {
        console.log('out');
        layer1.style.transform = `translate(0px, 0px)`;
        layer2.style.transform = `translate(0px, 0px)`;
        layer3.style.transform = `translate(0px, 0px)`;
    });
    // let x = 0;
    // let y = 0;
    // let deltaX = 1;
    // let deltaY = 1;
    // const move = () => {
    //     layer1.style.transform = `translate(-${x * 5 * deltaX}px, -${
    //         y * 50
    //     }px)`;
    //     layer2.style.transform = `translate(-${x * 10 * deltaX}px, -${
    //         y * 100
    //     }px)`;
    //     layer3.style.transform = `translate(-${x * 20 * deltaX}px, -${
    //         y * 200
    //     }px)`;

    //     x += 1 * deltaX;
    //     // y += 0.01 * deltaY;

    //     if (x > 20 || x < -40) {
    //         deltaX *= -1;
    //     }
    //     if (y > 0.5 || y < -0.5) {
    //         deltaY *= -1;
    //     }

    //     console.log(x, y);

    //     requestAnimationFrame(move);
    // };

    // requestAnimationFrame(move);
});
