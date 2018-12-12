# unexpected-ts

A typescript friendly wrapper around http://unexpected.js.org, the extensible BDD assertion toolkit

## Rational

While it's possible to create typescript typings for unexpected, it's difficult (impossible?) to create _extensible_ typings
for the _expect_ function.

There's no point in having typings for an extensible library that aren't extensible!

So instead this is a little wrapper around [unexpected](http://unexpected.js.org) that adjusts how it's exported, so that
the types are extensible.

## How to extend

Because we're using an interface to define `unexpected`, and because we're exporting this interface alongside `unexpected`,
it becomes possible to add additional overrides.

This approach can be used to add support for custom assertions, or to add support for plugins.

```typescript
import { unexpected as expect } from "unexpected-ts";

declare module "unexpected-ts" {
  export interface IUnexpected {
    <T>(
      actual: T,
      matcher: "to be fast" | "to not be fast",
      expected: T
    ): Promise<void>;
  }
}

expect.addAssertion("<string> [not] to be fast", function(expect, subject) {
  expect(subject, "[not] to be", "fast");
});

expect("something", "not to be fast");
expect("fast", "to be fast");
```
