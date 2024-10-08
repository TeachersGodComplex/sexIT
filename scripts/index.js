import dayjs from "dayjs";
import dayjsDuration from "dayjs/plugin/duration";
import dayjsSVLocale from "dayjs/locale/sv";
import "./add-to-calendar-button";
import { updateHeroHeadingContent } from "./herotitle";
import { updateTimers } from "./timer";

dayjs.extend(dayjsDuration);
dayjs.locale(dayjsSVLocale);

updateHeroHeadingContent();
updateTimers();
