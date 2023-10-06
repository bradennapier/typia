import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_notation_validateSnake_FunctionalTupleUnion =
    _test_notation_validateGeneral("FunctionalTupleUnion")<FunctionalTupleUnion>(
        FunctionalTupleUnion
    )<typia.SnakeCase<FunctionalTupleUnion>>({
        convert: typia.notations.createValidateSnake<FunctionalTupleUnion>(),
        assert: typia.createAssert<typia.SnakeCase<FunctionalTupleUnion>>(),
    });
