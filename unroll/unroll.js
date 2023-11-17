/**
 * Unrolls a square array by extracting and concatenating its outer layer in a clockwise direction.
 */
function unroll(squareArray) {
    // Check if the array is a valid array or if the length has become 0
    if (!Array.isArray(squareArray) || squareArray.length === 0) {
        return [];
    }

    // Extract the top row
    const top = squareArray.shift();

    // Extract the right column
    const right = squareArray.map((arr) => arr.pop());

    // Extract the bottom row
    let bottom = [];
    if (squareArray.length > 0) {
        bottom = squareArray.pop().reverse();
    }

    // Extract the left column
    const left = squareArray.map((arr) => arr.shift()).reverse();

    // Combine the extracted parts
    const outerLayer = [...top, ...right, ...bottom, ...left];

    // Recursively unroll the remaining inner square array
    return [...outerLayer, ...unroll(squareArray)];
}

module.exports = unroll;
