
//softwares in a circle rotating


document.addEventListener("DOMContentLoaded", function() {
    const iconContainer = document.querySelector('.icon-container');
    const icons = document.querySelectorAll('.icon');
    const radius = 150; // Radius of the circular path

    let angle = 0;
    const increment = (2 * Math.PI) / icons.length; // Angle increment for each icon
    let isSpreading = true;
    let spreadProgress = 0;

    function animateIcons() {
        if (isSpreading) {
            // Spread icons out to form a circle
            icons.forEach((icon, index) => {
                const x = radius * Math.cos(angle + increment * index);
                const y = radius * Math.sin(angle + increment * index);
                icon.style.transform = `translate(${x}px, ${y}px)`;
            });

            angle += 0.01; // Angle increment for rotation
            spreadProgress += 0.01;

            if (spreadProgress >= 1) {
                // Start rotating when spreading is complete
                isSpreading = false;
                spreadProgress = 0;
            }
        } else {
            // Rotate icons around the center
            icons.forEach((icon, index) => {
                const x = radius * Math.cos(angle + increment * index);
                const y = radius * Math.sin(angle + increment * index);
                icon.style.transform = `translate(${x}px, ${y}px)`;
            });

            angle += 0.01; // Angle increment for rotation
            spreadProgress += 0.01;

            if (spreadProgress >= 1) {
                // Reset animation by spreading icons again
                isSpreading = true;
                angle = 0;
                spreadProgress = 0;
            }
        }

        requestAnimationFrame(animateIcons); // Loop animation
    }

    // Start the animation
    animateIcons();
});