import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_validateSnake_TupleUnion =
    _test_notation_validateGeneral("TupleUnion")<TupleUnion>(
        TupleUnion
    )<typia.SnakeCase<TupleUnion>>({
        convert: typia.notations.createValidateSnake<TupleUnion>(),
        assert: typia.createAssert<typia.SnakeCase<TupleUnion>>(),
    });
