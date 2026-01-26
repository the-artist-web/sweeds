"use strict";

/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";
import { Count } from "./components/Count.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Swipper } from "./components/Swipper.js";

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling.length) $fixedScrolling.forEach($elem => window.addEventListener("scroll", () => FixedScrolling($elem)));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Counts
 */
const $counts = document.querySelectorAll("[data-counts]");
if ($counts.length) $counts.forEach($elem => Count($elem));

/**
 * Swippers
 */
const $swippers = document.querySelectorAll("[data-swippers]");
if ($swippers.length) $swippers.forEach($elem => Swipper($elem));