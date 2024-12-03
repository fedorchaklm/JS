describe("validateInput", function () {
    [
        {value: '1=1', expected: true},
        {value: '1=1 1', expected: false},
        {value: 'aba= aba cd', expected: false},
        {value: 'hgfn =hgnhgn', expected: true},
        {value: ',,=**', expected: false},
        {value: '2aa11 = 2bb11', expected: true},
        {value: ' = ', expected: false},
    ].forEach(({value, expected}) =>
        it(`should validateInput value ${value} expected ${expected}`, function () {
            const actual = validateInput(value);
            assert.equal(actual, expected);
        }));
});

describe('sortByName', () => {
    it('should return sorted array', () => {
        const actual = [
            {
                "name": "name",
                "value": "luba"
            },
            {
                "name": "small",
                "value": "haj"
            },
            {
                "name": "jkjl",
                "value": "aaaa"
            },
            {
                "name": "gfhdgd",
                "value": "111"
            },
            {
                "name": "hghgh",
                "value": "222"
            },
            {
                "name": "fghfgh",
                "value": "888"
            },
            {
                "name": "1111",
                "value": "gfhfgh"
            },
            {
                "name": "4444",
                "value": "gfhgfhh"
            },
            {
                "name": "9999",
                "value": "hgfhfgh"
            },
            {
                "name": "aaa",
                "value": "444"
            },
            {
                "name": "AA",
                "value": "fhkdlh"
            },
            {
                "name": "katya",
                "value": "vdfkv"
            },
            {
                "name": "aaa",
                "value": "sdgflk"
            },
            {
                "name": "aa",
                "value": "hjvhj"
            },
            {
                "name": "000",
                "value": "jghjh"
            }
        ];
        const expected = [];
        assert.equal(actual, expected);
    });
});