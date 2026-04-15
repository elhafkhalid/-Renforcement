const T = [1, 2, 3, 2, 1, 7];

function isPalindrome(arr) {
  const copy = arr.slice();
  const rev = arr.reverse();
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== rev[i]) return false;
  }

  return true;
}

console.log(isPalindrome(T));
