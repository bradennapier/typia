import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_notation_validateCamel_FunctionalTuple =
    _test_notation_validateGeneral("FunctionalTuple")<FunctionalTuple>(
        FunctionalTuple
    )<typia.CamelCase<FunctionalTuple>>({
        convert: typia.notations.createValidateCamel<FunctionalTuple>(),
        assert: typia.createAssert<typia.CamelCase<FunctionalTuple>>(),
    });
