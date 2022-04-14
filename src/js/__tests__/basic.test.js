import Character from '../app';
test("show attack value at a distance without stoned", () => {
    const daemon = new Character(1, "Daemon");
    daemon.distance = 2;
    const equal = 9;
    expext(daemon.attack).toEqual(equal);
});