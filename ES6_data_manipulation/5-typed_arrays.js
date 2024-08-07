export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const data = new DataView(arrayBuffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  data.setInt8(position, value);
  return data;
}
