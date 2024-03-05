export default function returnHowManyArguments(...Args) {
    let count = 0;
    
    for (const Arg in Args) {
        count = count + 1;
    }
    return count
}