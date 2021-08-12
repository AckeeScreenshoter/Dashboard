export * from './errors';

/**
 * @param {string[]} checkedOptions
 * @example
 * const entries = checkedOptionsToEntries(['a', 'b']);
 * console.log(entries) // { a: true, b: true }
 */
export function checkedOptionsToEntries(checkedOptions) {
    return Object.fromEntries(checkedOptions.map(checkedOption => [checkedOption, true]));
}

let id = 0;
export const uniqueId = () => String(id++);

export const addToEachUniqueId = (items = []) => {
    items.forEach(item => {
        item.id = uniqueId();
    });
};
