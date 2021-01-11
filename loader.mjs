export async function getFormat(url, context, defaultGetFormat) {
    const format = await defaultGetFormat(url, context, defaultGetFormat);
    if (!format.format) {
        format.format = 'commonjs';
    }
    return format;
}