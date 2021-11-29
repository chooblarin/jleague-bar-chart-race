import { writable } from "svelte/store";

const elapsed = writable(0);

let prev: number | undefined;
let requestId: number | undefined;

function tick(t: number) {
  if (!prev) {
    prev = t;
  }
  const diff = t - prev;
  elapsed.update(v => v + diff);
  prev = t;
  requestId = requestAnimationFrame(tick);
};

function start() {
  if (!requestId) {
    prev = undefined;
    requestId = requestAnimationFrame(tick);
  }
}

function stop() {
  if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = undefined;
  }
}

function setTime(value: number) {
  elapsed.set(value);
}

const timer = {
  start,
  stop,
  setTime,
};

export { timer, elapsed };
