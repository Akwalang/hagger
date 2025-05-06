import { RequestParameter } from "../types";

export const createEmptyParam = (): RequestParameter => ({
  isPinned: false,
  isRemovable: true,
  isRequired: false,
  isNullable: true,
  isValid: true,

  active: [true, true],
  key: ["", true],
  value: ["", true],
  description: ["", true],
});
