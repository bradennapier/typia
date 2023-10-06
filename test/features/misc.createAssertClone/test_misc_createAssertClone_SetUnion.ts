import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_misc_createAssertClone_SetUnion = _test_misc_assertClone(
    "SetUnion",
)<SetUnion>(
    SetUnion
)(typia.misc.createAssertClone<SetUnion>());
