import typia from "typia"
import { SetAlias } from "../../../structures/SetAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_SetAlias = 
    _test_json_application("swagger")("SetAlias")(
        typia.json.application<[SetAlias], "swagger">(),
    );