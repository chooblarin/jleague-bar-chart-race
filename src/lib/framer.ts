import { writable } from "svelte/store";

const frame = writable(0);

const duration = 1000;

let elapsed = 0;

let prev: number | undefined;
let requestId: number | undefined;

function tick(t: number) {
  if (!prev) {
    prev = t;
  }
  const diff = t - prev;
  elapsed += diff;

  const f = Math.floor(elapsed / duration);
  frame.set(f);

  prev = t;
  requestId = requestAnimationFrame(tick);
};

function startFrame() {
  if (!requestId) {
    prev = undefined;
    requestId = requestAnimationFrame(tick);
  }
}

function stopFrame() {
  if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = undefined;
  }
}

frame.subscribe((value) => {
  elapsed = value * duration;
})

export { frame, startFrame, stopFrame };
