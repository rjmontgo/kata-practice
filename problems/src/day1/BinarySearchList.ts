function binary_search(haystack: number[], needle: number, min: number, max: number): boolean {
  // base case 
  if (min >= max) {
    return haystack[min] === needle;
  }

  const check = Math.floor((max + min) / 2);
  if (haystack[check] === needle) {
    return true
  }

  // recurse
  if (haystack[check] > needle) {
    return binary_search(haystack, needle, min, check - 1)
  }

  if (haystack[check] < needle) {
    return binary_search(haystack, needle, check + 1, max)
  }

  // unreachable, just to make javascript happy
  return true;
}

export default function bs_list(haystack: number[], needle: number): boolean {
  return binary_search(haystack, needle, 0, haystack.length - 1);
}
