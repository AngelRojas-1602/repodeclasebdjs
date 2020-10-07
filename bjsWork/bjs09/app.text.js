import { es_primo } from "./index";

describe("Probando la función es_primo", function () {
  test("El número 1 no es primo", function () {
    const resultado = es_primo(1);

    // Espero que la variable resultado tenga valor false
    expect(resultado).toBe(false);
  });

  test("Cualquier número par diferente de 2, no es primo", function () {
    const aleatorio = Math.ceil(Math.random() * 10000);
    const numero_par = 2 * aleatorio;
    const resultado = es_primo(numero_par);

    expect(resultado).toBe(false);
  });

  test("Los números 2, 3, 5, 7, 11, 13, 17, 19 son primos", function () {
    const casos_prueba = [2, 3, 5, 7, 11, 13, 17, 19];

    for (let i = 0; i < casos_prueba.length; i++) {
      expect(es_primo(casos_prueba[i])).toBe(true);
    }
  });
});
