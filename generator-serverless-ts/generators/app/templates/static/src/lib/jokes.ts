/**
 * Jokes module.
 */

/** A person */
export interface Person {
  /** The person's name. */
  firstName: string
  /** The person's surname. */
  lastName: string
  /** The person's age in years. */
  age: number
  /** The person's favourite colour. */
  colour?: string
}

/**
 * @param person The person of interest.
 */
export const greeter = (person: Person) =>
  `Hello, ${person.firstName} ${person.lastName}.` +
  ` Your age is: ${person.age * 12} months`

/**
 * Multiples two numbers together.
 * @param num1 The first number.
 * @param num2 The second number.
 * @returns The result of the multiplication.
 */
export const hello = (num1: number, num2: number): number => num1 * num2
