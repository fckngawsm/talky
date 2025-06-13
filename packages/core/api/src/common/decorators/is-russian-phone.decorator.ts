import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";
export function IsRussianPhone(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isRussianPhone",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          return typeof value === "string" && /^(\+7|7|8)\d{10}$/.test(value);
        },
        defaultMessage(_args: ValidationArguments) {
          return "Номер телефона должен начинаться с +7, 7 или 8 и содержать 11 цифр";
        },
      },
    });
  };
}
