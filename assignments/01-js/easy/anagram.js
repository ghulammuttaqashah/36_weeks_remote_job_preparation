/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sanitize = str => str.toLowerCase().replace(/\s/g, '');

	const getCharCount = str => {
		const count = {};
		for (let char of str) {
			count[char] = (count[char] || 0) + 1;
		}
		return count;
	};

	const s1 = getCharCount(sanitize(str1));
	const s2 = getCharCount(sanitize(str2));

	if (Object.keys(s1).length !== Object.keys(s2).length) return false;

	for (let key in s1) {
		if (s1[key] !== s2[key]) return false;
	}

	return true;


}

module.exports = isAnagram;
