// Type definitions for unexpected 10.39
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Studds <https://github.com/studds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

declare module "unexpected" {
  /*~ This declaration specifies that the function
   *~ is the exported object from the file
   */
  export = expect;

  // ANY
  function expect(
    actual: any,
    matcher: string,
    ...expected: any[]
  ): Promise<void>;

  function failFn<A extends Array<any> = []>(format: string, ...args: A): void;
  function failFn<E extends Error>(error: E): void;

  /*~ If you want to expose types from your module as well, you can
   *~ place them in this block. Often you will want to describe the
   *~ shape of the return type of the function; that type should
   *~ be declared in here, as this example shows.
   */
  namespace expect {
    export interface PluginDefinition {
      name?: string;
      version?: string;
      dependencies?: Array<string>;
      installInto(unexpected: typeof expect): void;
    }

    export interface TypeDefinition<T> {
      name: string;
      identify(value: any): value is T;
      base?: string;
      equal?(a: T, b: T, equal: (a: any, b: any) => boolean): boolean;
      inspect?(
        value: T,
        depth: number,
        output: any,
        inspect: (value: any, depth: number) => any
      ): void;
    }
    /**
     * @see http://unexpected.js.org/api/clone/
     */
    export const clone: () => typeof expect;

    /**
     * @see http://unexpected.js.org/api/addAssertion/
     */
    export const addAssertion: <T, A extends Array<any> = []>(
      pattern: string,
      handler: (unexpected: typeof expect, subject: T, ...args: A) => void
    ) => typeof expect;

    /**
     * @see http://unexpected.js.org/api/addType/
     */
    export const addType: <T>(
      typeDefinition: TypeDefinition<T>
    ) => typeof expect;

    /**
     * @see http://unexpected.js.org/api/fail/
     */
    export const fail: typeof failFn;

    /**
     * @see http://unexpected.js.org/api/freeze/
     */
    export const freeze: () => typeof expect;

    /**
     * @see http://unexpected.js.org/api/use/
     */
    export const use: (plugin: PluginDefinition) => typeof expect;
  }
}
