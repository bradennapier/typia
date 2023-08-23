import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import { Spoiler } from "../helpers/Spoiler";

export interface ArraySimpleProtobufNullable {
    boolean: null | boolean[];
    /**
     * @type int32
     */
    int32: null | number[];
    /**
     * @type uint32
     */
    uint32: null | number[];
    int64: null | bigint[];
    /**
     * @type uint64
     */
    uint64: null | bigint[];
    /**
     * @type float
     */
    float: null | number[];
    double: null | number[];
    string: null | string[];
    bytes: null | Uint8Array[];
    object: null | ArraySimpleProtobufNullable[];
}
export namespace ArraySimpleProtobufNullable {
    export const ADDABLE = false;
    export const JSONABLE = false;

    export function generate(level: number = 0): ArraySimpleProtobufNullable {
        return {
            boolean: RandomGenerator.array(() => Math.random() < 0.5, 4),
            int32: RandomGenerator.array(
                () => Math.floor(Math.random() * 200) - 100,
                4,
            ),
            uint32: RandomGenerator.array(
                () => Math.floor(Math.random() * 100),
                4,
            ),
            int64: RandomGenerator.array(
                () =>
                    BigInt(
                        Math.floor(Math.random() * 900_000_000_000) -
                            450_000_000_000,
                    ),
                4,
            ),
            uint64: RandomGenerator.array(
                () => BigInt(Math.floor(Math.random() * 900_000_000_000)),
                4,
            ),
            float: RandomGenerator.array(RandomGenerator.number, 4),
            double: RandomGenerator.array(RandomGenerator.number, 4),
            string: RandomGenerator.array(() => RandomGenerator.string(10), 4),
            bytes: RandomGenerator.array(
                () => new Uint8Array([1, 2, 1, 2, 1, 2]),
                4,
            ),
            // objects:
            //     level < 2
            //         ? RandomGenerator.array(() => generate(level + 1), 4)
            //         : [],
            object: [],
        };
    }

    export const SPOILERS: Spoiler<ArraySimpleProtobufNullable>[] = [
        (input) => {
            input.boolean![3] = 0 as any;
            return ["$input.boolean[3]"];
        },
        (input) => {
            input.int32![2] = 3.141592;
            return ["$input.int32[2]"];
        },
        (input) => {
            input.uint32![1] = -1;
            return ["$input.uint32[1]"];
        },
        (input) => {
            input.int64![0] = 3 as any;
            return ["$input.int64[0]"];
        },
        (input) => {
            input.uint64![3] = BigInt(-1);
            return ["$input.uint64[3]"];
        },
        (input) => {
            input.float![2] = "3.14" as any;
            return ["$input.float[2]"];
        },
        (input) => {
            input.double![1] = "3.14" as any;
            return ["$input.double[1]"];
        },
        (input) => {
            input.string = undefined!;
            return ["$input.string"];
        },
    ];
}
