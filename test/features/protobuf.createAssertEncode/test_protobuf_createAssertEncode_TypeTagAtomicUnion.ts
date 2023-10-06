import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createAssertEncode_TypeTagAtomicUnion = _test_protobuf_assertEncode(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
    encode: typia.protobuf.createAssertEncode<TypeTagAtomicUnion>(),
    decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    message: typia.protobuf.message<TypeTagAtomicUnion>(),
});
