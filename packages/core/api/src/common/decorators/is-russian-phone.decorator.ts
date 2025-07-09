import { registerDecorator, ValidationOptions } from "class-validator";

export function IsRussianPhone(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isRussianPhone",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown) {
          return typeof value === "string" && /^(\+7|7|8)\d{10}$/.test(value);
        },
        defaultMessage() {
          return "Номер телефона должен начинаться с +7, 7 или 8 и содержать 11 цифр";
        },
      },
    });
  };
}
