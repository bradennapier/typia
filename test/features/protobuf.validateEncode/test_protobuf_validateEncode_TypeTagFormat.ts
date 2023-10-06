import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createValidateEncode_TypeTagFormat = _test_protobuf_validateEncode(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    encode: (input) => typia.protobuf.validateEncode<TypeTagFormat>(input),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
});
