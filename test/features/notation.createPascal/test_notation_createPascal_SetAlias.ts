import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_createValidatePascal_SetAlias =
    _test_notation_validateGeneral("SetAlias")<SetAlias>(
        SetAlias
    )<typia.PascalCase<SetAlias>>({
        convert: (input) => typia.notations.validatePascal<SetAlias>(input),
        assert: typia.createAssert<typia.PascalCase<SetAlias>>(),
    });
