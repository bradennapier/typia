import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_notation_createValidatePascal_ObjectAlias =
    _test_notation_validateGeneral("ObjectAlias")<ObjectAlias>(
        ObjectAlias
    )<typia.PascalCase<ObjectAlias>>({
        convert: (input) => typia.notations.validatePascal<ObjectAlias>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectAlias>>(),
    });
