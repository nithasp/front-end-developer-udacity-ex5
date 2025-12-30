import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("should shuffle the indexes of an array", () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(cards);
    // At least one element should be in a different position
    let isDifferent = false;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i] !== shuffled[i]) {
        isDifferent = true;
        break;
      }
    }
    // Note: There's a small chance this could fail if shuffle returns original order
    // but with 10 elements, the probability is 1/10! which is extremely small
    expect(isDifferent).to.be.true;
  });
});
