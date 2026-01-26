"use strict";

export const Swipper = ($element) => {
    const $swipperNext = $element.querySelector("[data-swipper-next]");
    const $swipperPrev = $element.querySelector("[data-swipper-prev]");
    const $swipperList = $element.querySelector("[data-swipper-list]");
    const dir = document.documentElement.dir;

    const amount = 500;

    $swipperPrev.addEventListener("click", () => {
        if (dir === "ltr")
            $swipperList.scrollBy({
                left: -amount,
                behavior: "smooth"
            });
        else
            $swipperList.scrollBy({
                left: amount,
                behavior: "smooth"
            });
    });

    $swipperNext.addEventListener("click", () => {
        if (dir === "ltr")
            $swipperList.scrollBy({
                left: amount,
                behavior: "smooth"
            });
        else
            $swipperList.scrollBy({
                left: -amount,
                behavior: "smooth"
            });
    });
};