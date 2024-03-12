export default function hasValuesFromArray(set, array) {
    let confirm = true;

    array.map((obj) => {
        if (!set.has(obj)) {
            confirm = false;
        }
    });
    return confirm;

}