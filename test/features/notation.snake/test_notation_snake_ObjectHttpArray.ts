import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_validateSnake_ObjectHttpArray =
    _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray
    )<typia.SnakeCase<ObjectHttpArray>>({
        convert: typia.notations.createValidateSnake<ObjectHttpArray>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectHttpArray>>(),
    });
