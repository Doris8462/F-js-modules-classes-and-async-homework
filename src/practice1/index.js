import getUrl from "./utils";
import * as constant from "./constant";

const url = getUrl(constant.ADDRESS, constant.PORT, constant.PATH);
const region = constant.REGION;
export { url, region };
