type StringLabel = {
  name: string;
};

type NumberLabel = {
  id: number;
};

type IsString<T> = T extends string ? T : never;

const newVar: IsString<number> = "Test";

type GetLabel<T> = T extends string | StringLabel ? StringLabel : NumberLabel;

// function createLabel<T extends string | number | StringLabel | NumberLabel>(
//   input: T
// ): GetLabel<T> {
//   if (typeof input === "number") {
//     return { id: input };
//   } else if (typeof input === "string") {
//     return { name: input };
//   } else if ("id" in input) {
//     return { id: input.id };
//   } else {
//     return { name: input.name };
//   }
// }

function createLabel<T extends number | string | StringLabel | NumberLabel>(
  input: T
): GetLabel<T> {
  if (typeof input === "number") {
    return { id: input } as GetLabel<T>;
  } else if (typeof input === "string") {
    return { name: input } as GetLabel<T>;
  } else if ("id" in input) {
    return { id: input.id } as GetLabel<T>;
  } else {
    return { name: input.name } as GetLabel<T>;
  }
}

createLabel(12);

{
  abstract class ApplicationError {
    abstract status: number;
    abstract message: string;
  }

  class ServerError extends ApplicationError {
    status = 500;
    constructor(public message: string, ...rest: any[]) {
      super();
    }
  }

  type ErrorType<T extends { error: ApplicationError | Error }> =
    T["error"] extends ApplicationError ? ApplicationError : Error;

  type error = ErrorType<{ error: Error }>;
}
