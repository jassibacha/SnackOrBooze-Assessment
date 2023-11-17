const unroll = require('./unroll');

describe('#unroll', function () {
    it('is a function', function () {
        expect(typeof unroll).toEqual('function');
    });

    it('unrolls a 2x2 matrix correctly', function () {
        const square = [
            [1, 2],
            [3, 4],
        ];
        expect(unroll(square)).toEqual([1, 2, 4, 3]);
    });

    it('unrolls a 4x4 matrix correctly', function () {
        const square = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        expect(unroll(square)).toEqual([
            1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
        ]);
    });

    it('unrolls a 3x3 matrix correctly', function () {
        const square = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(unroll(square)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('returns an empty array for an empty matrix', function () {
        expect(unroll([])).toEqual([]);
    });

    it('unrolls a 1x1 matrix correctly', function () {
        const square = [[1]];
        expect(unroll(square)).toEqual([1]);
    });

    it('handles a non-square matrix appropriately', function () {
        const notSquare = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ];

        expect(unroll(notSquare)).toEqual([
            1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7,
        ]);
    });

    // Add more tests if needed
});
