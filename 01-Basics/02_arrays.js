const marvel_heros = ["thor", "Ironman", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//  const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);  concat

// entries
const iterator1 = marvel_heros.entries();
//console.log(iterator1.next().value);
//console.log(iterator1.next().value);
//console.log(iterator1.next().value);

//   ...marvel_heros, ...dc_heros := ... means array is not a array (array ata spread zale)
// concat/strad operatior chya jagi hi process use karaych 
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("superman"));
console.log(Array.from("superman"));
console.log(Array.from({name: "superman"}));  // intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
