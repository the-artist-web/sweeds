"use strict";

export const FixedScrolling = ($element) => {
    if (scrollY >= 100)
        $element.classList.add("fixed-scrolling");
    else
        $element.classList.remove("fixed-scrolling");
};