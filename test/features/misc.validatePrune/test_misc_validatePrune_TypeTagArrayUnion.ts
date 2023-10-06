import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_validatePrune_TypeTagArrayUnion = _test_misc_validatePrune(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.misc.validatePrune<TypeTagArrayUnion>(input));
