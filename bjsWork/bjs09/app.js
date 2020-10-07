export function es_primo(possible_prime) {
  if (possible_prime < 2) {
    return false;
  }

  for (let i = 3; i < possible_prime; i++) {
    if (possible_prime % i === 0) {
      return false;
    }
  }

  return true;
}
