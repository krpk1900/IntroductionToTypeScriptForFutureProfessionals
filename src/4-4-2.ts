const repeat_2 = function<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
const p = pair<string, number>("uhyo", 26);
