import * as userActionCrator from "./user";
import * as taskActionCreator from "./task";

export default {
    ...userActionCrator,
    ...taskActionCreator
}