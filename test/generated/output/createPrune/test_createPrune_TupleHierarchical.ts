import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_createPrune_TupleHierarchical = _test_prune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (
        input: [
            boolean,
            null,
            number,
            [boolean, null, [number, [boolean, string]]],
            [
                number,
                Array<
                    [
                        string,
                        boolean,
                        Array<[number, number, [boolean, string]]>,
                    ]
                >,
            ],
        ],
    ): void => {},
);