export default function getStudentIdsSum(list) {
    return list.reduce((accumulator, currentStd) => accumulator + currentStd.id, 0);
}