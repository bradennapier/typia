import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_notation_createValidateSnake_ToJsonNull =
    _test_notation_validateGeneral("ToJsonNull")<ToJsonNull>(
        ToJsonNull
    )<typia.SnakeCase<ToJsonNull>>({
        convert: (input) => typia.notations.validateSnake<ToJsonNull>(input),
        assert: typia.createAssert<typia.SnakeCase<ToJsonNull>>(),
    });
