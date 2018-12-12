/// <reference path="../types/unexpected.d.ts" />
import expect = require("unexpected");

export interface IUnexpected {
  // ANY
  <T>(actual: T, matcher: "to be" | "not to be", expected: T): Promise<void>;
  <T>(
    actual: T,
    matcher: "to be one of" | "not to be one of",
    expected: ReadonlyArray<T>
  ): Promise<void>;
  <T>(actual: T, matcher: "to equal" | "not to equal", expected: T): Promise<
    void
  >;
  <T>(actual: T, matcher: "to be defined" | "not to be defined"): Promise<void>;
  <T>(actual: T, matcher: "to be falsy" | "not to be falsy"): Promise<void>;
  <T>(actual: T, matcher: "to be null" | "not to be null"): Promise<void>;
  <T>(actual: T, matcher: "to be ok" | "not to be ok"): Promise<void>;
  <T>(actual: T, matcher: "to be truthy" | "not to be truthy"): Promise<void>;
  <T>(actual: T, matcher: "to be undefined" | "not to be undefined"): Promise<
    void
  >;
  <T>(
    actual: T,
    matcher: "to satisfy" | "to exhaustively satisfy",
    expected: any
  ): Promise<void>;

  // STRING
  (
    actual: string,
    matcher: "to be empty" | "not to be empty" | "to be non-empty"
  ): Promise<void>;
  (
    actual: string,
    matcher: "to be greater than" | "not to be greater than",
    expected: string
  ): Promise<void>;
  (
    actual: string,
    matcher:
      | "to be greater than or equal to"
      | "not to be greater than or equal to",
    expected: string
  ): Promise<void>;
  (
    actual: string,
    matcher: "to be less than" | "not to be less than",
    expected: string
  ): Promise<void>;
  (
    actual: string,
    matcher: "to be less than or equal to" | "not to be less than or equal to",
    expected: string
  ): Promise<void>;
  (
    actual: string,
    matcher: "to be within" | "not to be within",
    start: string,
    end: string
  ): Promise<void>;
  (
    actual: string,
    matcher: "to begin with" | "not to begin with",
    expected: string | RegExp
  ): Promise<void>;
  (
    actual: string,
    matcher: "to start with" | "not to start with",
    expected: string | RegExp
  ): Promise<void>;
  (
    actual: string,
    matcher: "to end with" | "not to end with",
    expected: string | RegExp
  ): Promise<void>;
  (
    actual: string,
    matcher: "to contain" | "not to contain",
    ...expected: string[]
  ): Promise<void>;
  (
    actual: string,
    matcher: "to match" | "not to match",
    expected: string | RegExp
  ): Promise<void>;
  (
    actual: string,
    matcher: "to have length" | "not to have length",
    expected: number
  ): Promise<void>;

  // NUMBER
  (
    actual: number,
    matcher: "to be close to" | "not to be close to",
    expected: number,
    epsilon?: number
  ): Promise<void>;
  (actual: number, matcher: "to be finite" | "not to be finite"): Promise<void>;
  (actual: number, matcher: "to be infinite" | "not to be infinite"): Promise<
    void
  >;
  (
    actual: number,
    matcher: "to be greater than" | "not to be greater than",
    expected: number
  ): Promise<void>;
  (
    actual: number,
    matcher:
      | "to be greater than or equal to"
      | "not to be greater than or equal to",
    expected: number
  ): Promise<void>;
  (
    actual: number,
    matcher: "to be less than" | "not to be less than",
    expected: number
  ): Promise<void>;
  (
    actual: number,
    matcher: "to be less than or equal to" | "not to be less than or equal to",
    expected: number
  ): Promise<void>;
  (actual: number, matcher: "to be NaN" | "not to be NaN"): Promise<void>;
  (actual: number, matcher: "to be negative" | "not to be negative"): Promise<
    void
  >;
  (actual: number, matcher: "to be positive" | "not to be positive"): Promise<
    void
  >;
  (
    actual: number,
    matcher: "to be within" | "not to be within",
    start: number,
    end: number
  ): Promise<void>;

  // FUNCTION
  (
    actual: () => void,
    matcher: "to throw" | "not to throw",
    error?: string | RegExp
  ): Promise<void>;
  (
    actual: () => void,
    matcher: "to throw a" | "not to throw a",
    error: Error
  ): Promise<void>;
  (
    actual: () => void,
    matcher: "to error" | "not to error",
    error?: string | RegExp
  ): Promise<void>;
  (actual: (...args: any[]) => any, matcher: "to call the callback"): Promise<
    void
  >;
  (
    actual: (...args: any[]) => any,
    matcher: "to call the callback with error"
  ): Promise<void>;
  (
    actual: (...args: any[]) => any,
    matcher: "to call the callback without error"
  ): Promise<void>;

  // BOOLEAN
  (actual: boolean, matcher: "to be true" | "not to be true"): Promise<void>;
  (actual: boolean, matcher: "to be false" | "not to be false"): Promise<void>;

  // OBJECTS
  (actual: object, matcher: "to be canonical"): Promise<void>;
  (actual: object, matcher: "to be empty" | "not to be empty"): Promise<void>;
  (actual: object, matcher: "to be empty" | "not to be empty"): Promise<void>;
  (
    actual: object,
    matcher: "to have a value satisfying" | "not to have a value satisfying",
    expected: any
  ): Promise<void>;
  (
    actual: object,
    matcher:
      | "to have a value exhaustively satisfying"
      | "not to have a value exhaustively satisfying",
    expected: any
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have a key" | "not to have a key",
    expected: string
  ): Promise<void>;
  (
    actual: object,
    matcher: "to only have a key" | "to not only have a key",
    expected: string
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have keys" | "not to have keys",
    ...expected: string[]
  ): Promise<void>;
  (
    actual: object,
    matcher: "to only have keys" | "to not only have keys",
    ...expected: string[]
  ): Promise<void>;
  (actual: object, matcher: "to have keys satisfying", expected: any): Promise<
    void
  >;
  (
    actual: object,
    matcher: "to have properties" | "not to have properties",
    expected: ReadonlyArray<string>
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have own properties" | "not to have own properties",
    expected: ReadonlyArray<string>
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have properties" | "to have own properties",
    expected: object
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have property" | "not to have property",
    expected: string,
    value?: any
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have own property" | "not to have own property",
    expected: string,
    value?: any
  ): Promise<void>;
  (
    actual: object,
    matcher:
      | "to have values satisfying"
      | "to have values exhaustively satisfying",
    expected: any
  ): Promise<void>;

  // PROMISE

  <T>(actual: Promise<T>, matcher: "to be fulfilled"): Promise<void>;
  <T>(
    actual: Promise<T>,
    matcher: "to be fulfilled with",
    expected: T
  ): Promise<void>;
  <T>(
    actual: Promise<T>,
    matcher: "to be fulfilled with value satisfying",
    expected: any
  ): Promise<void>;
  <T>(
    actual: Promise<T>,
    matcher: "to be fulfilled with value exhaustively satisfying",
    expected: any
  ): Promise<void>;

  <T>(actual: Promise<T>, matcher: "to be rejected"): Promise<void>;
  <T>(
    actual: Promise<T>,
    matcher: "to be rejected with",
    expected: any
  ): Promise<void>;
  <T>(
    actual: Promise<T>,
    matcher: "to be rejected with error satisfying",
    expected: any
  ): Promise<void>;

  // ERROR
  (
    actual: Error,
    matcher: "to have message",
    expected: string | RegExp
  ): Promise<void>;

  // ARRAY
  (
    actual: ReadonlyArray<any>,
    matcher: "to be empty" | "not to be empty" | "to be non-empty"
  ): Promise<void>;
  <T>(
    actual: ReadonlyArray<T>,
    matcher: "to contain" | "not to contain",
    ...expected: T[]
  ): Promise<void>;
  (
    actual: object,
    matcher: "to have an item satisfying" | "not to have an item satisfying",
    expected: any
  ): Promise<void>;
  (
    actual: object,
    matcher:
      | "to have an item exhaustively satisfying"
      | "not to have an item exhaustively satisfying",
    expected: any
  ): Promise<void>;
  (
    actual: object,
    matcher:
      | "to have items satisfying"
      | "to have items exhaustively satisfying",
    expected: any
  ): Promise<void>;
  (
    actual: ReadonlyArray<any>,
    matcher: "to have length" | "not to have length",
    expected: number
  ): Promise<void>;
}

export type Unexpected = typeof expect & IUnexpected;

export const unexpected: Unexpected = expect;
