import { DateTime } from "./luxon.min.js";

const dateTag = document.querySelector('.date');
const luxDate = DateTime.now().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
// const date = new DateTime().DATETIME_FULL_WITH_SECONDS

dateTag.innerHTML = luxDate;