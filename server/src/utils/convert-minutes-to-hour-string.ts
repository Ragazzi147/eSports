export function convertMinutesStringToHourString(minutesAmount: number){
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;
     
    return `${String(hours).padEnd(2,'0')}:${String(minutes).padEnd(2,'0')}`;
}
