import dayjs from "dayjs";

export function updateTimers() {
  const timers = document.querySelectorAll(".timer > span");
  const time = dayjs.duration(dayjs("2023-12-06T20:00:00.000Z").diff(dayjs()));
  for (const el of timers) {
    el.textContent = time.format("DD:HH:mm:ss");
  }

  setTimeout(updateTimers, 1000);
}