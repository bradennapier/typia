import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createAssertEncode_CommentTagTypeBigInt = _test_protobuf_assertEncode(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagTypeBigInt>(input),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
});
