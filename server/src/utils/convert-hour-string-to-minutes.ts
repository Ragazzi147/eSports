export function convertHourStringToMinutes(hoursStrng: string){
    const [hours, minutes] = hoursStrng.split(':').map(Number)
    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}
