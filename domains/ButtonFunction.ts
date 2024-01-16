export default class ButtonFunction {
  value: number|string;
  text: string;

  constructor(value: number|string, text: string) {
    this.value = value;
    this.text = text;
  }
}

function bind(value: number|string, display?: string) {
  const text = display ?? `${value}`;
  return new ButtonFunction(value, text);
}
