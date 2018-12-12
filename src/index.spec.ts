import { unexpected } from "./index";

unexpected("", "to be", "hello");


declare module './index' {
    export interface IUnexpected {
        <T>(actual: T, matcher: 'to be fast' | 'to not be fast', expected: T): Promise<void>;
    }
}

expect.addAssertion('<string> [not] to be fast', function(expect, subject) {
    expect(subject, '[not] to be', 'fast');
});

expect('something', 'not to be fast');
expect('fast', 'to be fast');