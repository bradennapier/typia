import typia from "typia"
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_TupleRestObject = 
    _test_json_application("ajv")("TupleRestObject")(
        typia.json.application<[TupleRestObject], "ajv">(),
    );