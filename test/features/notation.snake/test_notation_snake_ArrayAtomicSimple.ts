import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_validateSnake_ArrayAtomicSimple =
    _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
        ArrayAtomicSimple
    )<typia.SnakeCase<ArrayAtomicSimple>>({
        convert: typia.notations.createValidateSnake<ArrayAtomicSimple>(),
        assert: typia.createAssert<typia.SnakeCase<ArrayAtomicSimple>>(),
    });
