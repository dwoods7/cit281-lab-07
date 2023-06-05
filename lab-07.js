class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwGenericError() {
  throw new Error("Generic error");
}

function throwCustomError() {
  throw new CustomError("Custom error");
}

try {
  console.log("Force generic error");
  throwGenericError();
} catch (error) {
  console.log("Generic error try block");
  console.log("Generic error catch block");
  console.log("Error: Generic Error");
} finally {
  console.log("Generic error finally block");
}

try {
  console.log("\nForce custom error");
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Custom error try block");
    console.log("Custom error catch block");
    console.log("CustomError: Custom Error");
  } else {
    console.log("Unknown error:", error);
  }
} finally {
  console.log("Custom error finally block");
}
