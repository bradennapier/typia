import typia from "../../../src";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_MapSimpleProtobufOptional = _test_protobuf_message(
    "MapSimpleProtobufOptional",
)(typia.protobuf.message<MapSimpleProtobufOptional>());