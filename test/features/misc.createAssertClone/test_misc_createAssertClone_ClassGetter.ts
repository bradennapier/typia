import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_createAssertClone_ClassGetter = _test_misc_assertClone(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.misc.createAssertClone<ClassGetter>());
