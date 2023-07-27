import dayjs from "dayjs";

export const fillEmptycolumns = (columns, start, end) => {
    const filledColumns = columns.slice(0);

    //1. 첫날 이전 공백 채우기
    const startDay = dayjs(start).get("day");
    for(let i = 1; i <=startDay; i +=1){
        const date = dayjs(start).subtract(i,"day");
        filledColumns.unshift(date);
    }
    //2. 마지막 날 이후 공백 채우기
    const endDay = dayjs(end).get("day");
    /**
     * 0 -> 6
     * 1 -> 5
     * 2 -> 4
     * endDay + ? =6
     */
    for (let i = 1; i <=6 - endDay; i+=1){
        const date = dayjs(end).add(i,"day");
        filledColumns.push(date);
    }

    return filledColumns;
};
export const getCalendarColumns = (selectedDate) => {
    const start  = dayjs(selectedDate).startOf("month");
    const end = dayjs(selectedDate).endOf("month");
    const endDate = dayjs(end).get("date");

    const columns = [];
    for(let i = 0; i < endDate; i += 1){
        const date = dayjs(start).add(i, "day");
        columns.push(date);
    }

    const filledColumns = fillEmptycolumns(columns, start, end);
    return filledColumns;
}

/**
 * @param day  0~6
 * @return 일~월
 */
const dayTexts = ["일","월","화","수","목","금","토"]
export const  getDayText = (day) => {
   
    /* EX 1 */
        return dayTexts[day];
    /* EX 2 */
    //switch (day){
        // case 0: return '일';
        // case 1: return '월';
        // case 2: return '화';
        // case 3: return '수';
        // case 4: return '목';
        // case 5: return '금';
        // case 6: return '토';
        // default: return '';
    //}
}
export const getDayColor = (day) => {
    /*Ex 1 */
    return day === 0? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";

    // /*Ex 2 */
    // switch (day){
    //     case 0: return '#e67639';
    //     case 6: return '#5872d1';
    //     default: return '#2b2b2b';
    // }
}