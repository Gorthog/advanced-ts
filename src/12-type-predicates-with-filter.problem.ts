import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils.ts";

export const values = ["a", "b", undefined, "c", undefined];

const isString = (value: string | undefined): value is string => Boolean(value);

const filteredValues = values.filter((value) => value !== undefined);

it("Should filter out the undefined values", () => {
  expect(filteredValues).toEqual(["a", "b", "c"]);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});
