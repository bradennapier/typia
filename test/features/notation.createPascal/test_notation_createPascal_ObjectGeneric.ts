import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_createValidatePascal_ObjectGeneric =
    _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(
        ObjectGeneric
    )<typia.PascalCase<ObjectGeneric>>({
        convert: (input) => typia.notations.validatePascal<ObjectGeneric>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectGeneric>>(),
    });
