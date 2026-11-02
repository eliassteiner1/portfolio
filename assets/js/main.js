// debug: open a certain dialog on page load (for tweaking formatting or writing articles) -----------------------------
document.querySelectorAll("dialog")[9].showModal();


// view transition -----------------------------------------------------------------------------------------------------
let currentTransition = null; // the last started animation, so the next one can wait for it

function transition(update) {
    if (!document.startViewTransition) {
        update(); // older browsers just jump to the new state
        return;
    }
    currentTransition = document.startViewTransition(update);
}

async function openProject(card) {
    const dialog = card.nextElementSibling;

    if (currentTransition) await currentTransition.finished;
    if (dialog.open) return;

    // only the clicked card should morph
    document.querySelectorAll(".card").forEach((c) => c.classList.remove("morphing"));
    card.classList.add("morphing");

    transition(() => {
        dialog.showModal();
        dialog.querySelector(".opencard-body").scrollTop = 0; // always start at the top of the article
    });
}

async function closeProject(card) {
    const dialog = card.nextElementSibling;

    if (currentTransition) await currentTransition.finished;
    if (!dialog.open) return;

    transition(() => dialog.close());
}

document.querySelectorAll(".card").forEach((card) => {
    const dialog = card.nextElementSibling;

    card.addEventListener("click", () => openProject(card));
    dialog.querySelector(".opencard-button").addEventListener("click", () => closeProject(card));

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeProject(card); // only the backdrop counts as the dialog itself
    });

    dialog.addEventListener("cancel", (event) => {
        event.preventDefault(); // stops esc closing it instantly, so it animates too
        closeProject(card);
    });
});

// image carousels -----------------------------------------------------------------------------------------------------
document.querySelectorAll(".carouselfig").forEach((carousel) => {
    const main = carousel.querySelector(".carouselfig-main");
    const thumbs = carousel.querySelectorAll(".carouselfig-thumbs > .carouselfig-thumbimgwrapper");

    // distance from one slide to the next, read live since a closed dialog has no width
    const step = () => main.clientWidth + parseFloat(getComputedStyle(main).columnGap);

    thumbs[0].classList.add("active"); // set by hand, as a closed dialog has no width to calculate from

    thumbs.forEach((thumb, i) => {
        thumb.addEventListener("click", () => {
            main.scrollTo({ left: i * step(), behavior: "smooth" }); // scrollIntoView could also move the article
        });
    });

    main.addEventListener("scroll", () => {
        const current = Math.round(main.scrollLeft / step());
        thumbs.forEach((thumb, i) => thumb.classList.toggle("active", i === current));
    });
});
