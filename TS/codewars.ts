function countPositivesSumNegatives(input: any) {
    if (!input || input.length === 0) {
          return [];
      }
    const countPositives = input.filter((num: number) => num > 0).length;
    const sumNegatives = input.filter((num: number) => num < 0).reduce((sum: number, num: number) => sum + num, 0);
  
    return [countPositives, sumNegatives];
      
  }

//Возвращает инициалы
function abbrevName(name: string): string {
    const words = name.split(" ");
    return words.map(word => word[0].toUpperCase()).join(".");
}

function hero(bullets: number, dragons: number): boolean {
    return bullets >= dragons * 2;
}

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array: number[]): number[] {
  return array.map(num => -num);
}

function createPhoneNumber(numbers: number[]): string {
  if (numbers.length !== 10) {
        throw new Error("Input must be an array of exactly 10 integers.");
    }
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
}


//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s: string): string {
  return s
        .split("")
        .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
        .join("-");
}

function countSmileys(arr: string[]): number {
  const smileyRegex = /^[:;][-~]?[)D]$/;
  return arr.filter(face => smileyRegex.test(face)).length;
}