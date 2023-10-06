import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_notation_validatePascal_TemplateConstant =
    _test_notation_validateGeneral("TemplateConstant")<TemplateConstant>(
        TemplateConstant
    )<typia.PascalCase<TemplateConstant>>({
        convert: typia.notations.createValidatePascal<TemplateConstant>(),
        assert: typia.createAssert<typia.PascalCase<TemplateConstant>>(),
    });
