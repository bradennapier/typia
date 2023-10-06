import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_createAssertStringify_SetAlias = _test_json_assertStringify(
    "SetAlias",
)<SetAlias>(
    SetAlias
)(typia.json.createAssertStringify<SetAlias>());
