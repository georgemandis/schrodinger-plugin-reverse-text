// Reverse Text plugin for Schrodinger
// Reverses the clipboard text content.

export default {
    id: "reverse-text",
    label: "Reverse Text",
    appliesTo(entry) {
        return entry.formats.some(f => f.format === schrodinger.textFormat());
    },
    async apply(entry) {
        const buf = await schrodinger.readFormat(entry, schrodinger.textFormat());
        const text = schrodinger.decode(buf);
        const reversed = [...text].reverse().join('');
        return [
            { format: schrodinger.textFormat(), data: schrodinger.encode(reversed) }
        ];
    }
};
