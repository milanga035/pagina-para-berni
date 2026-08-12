
/* ==========================================
   ELEMENTOS DE LA PÁGINA
========================================== */

const mainCard =
    document.getElementById("mainCard");

const successCard =
    document.getElementById("successCard");

const yesButton =
    document.getElementById("yesButton");

const yesButton2 =
    document.getElementById("yesButton2");

const restartButton =
    document.getElementById("restartButton");

const heartContainer =
    document.getElementById("heartContainer");


/* ==========================================
   CUANDO BERNI DICE QUE SÍ ❤️
========================================== */

function sayYes() {

    mainCard.classList.add(
        "celebration"
    );

    // Crear 80 corazones
    createHearts(80);

    // Mostrar pantalla final
    setTimeout(() => {

        mainCard.classList.add(
            "hidden"
        );

        successCard.classList.remove(
            "hidden"
        );

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 800);
}


/* ==========================================
   CREAR CORAZONES
========================================== */

function createHearts(amount) {

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💝",
        "🥰"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.classList.add(
            "floating-heart"
        );


        // Emoji aleatorio

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];


        // Posición horizontal

        heart.style.left =
            Math.random()
            * 100
            + "vw";


        // Tamaño aleatorio

        const size =
            Math.random()
            * 25
            + 15;


        heart.style.fontSize =
            size + "px";


        // Duración aleatoria

        const duration =
            Math.random()
            * 3
            + 3;


        heart.style.animationDuration =
            duration
            + "s";


        // Retraso aleatorio

        heart.style.animationDelay =
            Math.random()
            * 0.8
            + "s";


        heartContainer.appendChild(
            heart
        );


        // Eliminar corazón después

        setTimeout(() => {

            heart.remove();

        }, (duration + 1) * 1000);

    }
}


/* ==========================================
   BOTONES "SÍ"
========================================== */

yesButton.addEventListener(
    "click",
    sayYes
);


yesButton2.addEventListener(
    "click",
    sayYes
);


/* ==========================================
   VOLVER A VER
========================================== */

restartButton.addEventListener(
    "click",
    () => {

        successCard.classList.add(
            "hidden"
        );


        mainCard.classList.remove(
            "hidden"
        );


        mainCard.classList.remove(
            "celebration"
        );

    }
);


/* ==========================================
   CORAZÓN AL HACER CLICK
========================================== */

document.addEventListener(
    "click",
    (event) => {

        // No crear corazón extra en los botones

        if (
            event.target === yesButton ||
            event.target === yesButton2
        ) {
            return;
        }


        const heart =
            document.createElement("div");


        heart.classList.add(
            "floating-heart"
        );


        heart.innerText =
            "💗";


        // Aparece donde hiciste click

        heart.style.left =
            event.clientX
            + "px";


        heart.style.bottom =
            (
                window.innerHeight
                - event.clientY
            )
            + "px";


        heart.style.animationDuration =
            "3s";


        heartContainer.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 3000);

    }
);
