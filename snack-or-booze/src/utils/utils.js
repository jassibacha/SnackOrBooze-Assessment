/**
 * Capitalizes the first letter of a string.
 */
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Capitalizes the first letter of a string and also removes the last
 */
export function capitalizeFirstLetterAndRemoveLast(string) {
    return capitalizeFirstLetter(string).slice(0, -1);
}
