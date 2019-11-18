// import { Grid, Row } from "tetris-engine";
import brailleEncode from "braille-encode";

export const BrailleConverter = {
    prefixHex(hex) { return hex.length === 1 ? `0${hex}` : hex },

    getColumnBinary(rows, columnIndex) {
        return rows.map((row) => row[columnIndex]).map(({ val }) => val).join('');
    },

    convert(rows, areaWidth) {
        let braille = '';

        for (let i = 0; i < areaWidth; i += 2) {
            const leftBinary = BrailleConverter.getColumnBinary(rows, i);
            const rightBinary = BrailleConverter.getColumnBinary(rows, i + 1);
            const binaryString = `${leftBinary}${rightBinary}`.replace(/2/g, '1');
            const binary = Number.parseInt(binaryString, 2);

            const hexString = binary.toString(16);
            const hex = BrailleConverter.prefixHex(hexString);
            const buf = new Buffer(hex, 'hex');

            const partial = brailleEncode.encode(buf);
            braille = braille.concat(partial);
        }

        return braille;
    }
}