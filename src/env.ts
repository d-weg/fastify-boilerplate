import { parseBoolean } from "./shared/utils/parse";



export default {
    IS_LOCAL: parseBoolean(process.env.IS_LOCAL),
    PORT: process.env.PORT
}