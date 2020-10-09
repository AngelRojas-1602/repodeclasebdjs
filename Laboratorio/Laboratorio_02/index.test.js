import { isSubset } from "./index";

describe("Probando función isSubset", function () {
  test("El conjunto vacío es subconjunto de cualquier conjunto", function () {
    expect(isSubset([1, 2, 3, 4, 5, 6], [])).toBe(true);
    expect(isSubset([3, 4, 5, 6], [])).toBe(true);
    expect(isSubset([], [])).toBe(true);
  });

  test("Prueba cuando el subconjunto es de 1 elemento", function () {
    expect(isSubset([1, 2, 3, 4, 5, 6, 7, 8], [1])).toBe(true);
    expect(isSubset([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [5])).toBe(true);

    const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14];
    const randomIndex = Math.floor(Math.random() * set.length);

    expect(isSubset(set, [set[randomIndex]])).toBe(true);
  });

  test("Prueba cuando un elemento NO es subconjunto", function () {
    expect(isSubset([1, 2, 3, 4, 5, 6, 7, 8], [9])).toBe(false);
  });

  test("Prueba cuando el subconjunto es de varios elementos", function () {
    expect(isSubset([1, 2, 3, 4, 5, 6, 7, 8], [1, 9, 6, 4])).toBe(false);
    expect(isSubset([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [5, 11, 3, 8])).toBe(
      true
    );
  });
});
