import Daemon from "../Daemon";
test("show attack value at a distance without stoned", () => {
  const daemon = new Daemon(1);
  daemon.distance = 5;
  daemon.attack = 100;
  expect(daemon.attack).toBe(60);
});

test("show attack value at a distance with stoned", () => {
  const daemon = new Daemon(1);
  daemon.distance = 2;
  daemon.attack = 100;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});
