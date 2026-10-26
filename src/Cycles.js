/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let result = 0;
    for (let i = start; i < end + 1; ++i) {
        if (i % 2 == 0) {
            result += i;
        }
    }
    return result;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let result = a;
    let iteration = 0;
    while (result > 0.1) {
        result = result / 2;
        ++iteration;
    }
    return iteration;
}

/*
  В функцию symbolsReplace() приходит строка текста
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let chars = message.split('');
    let i = 2;

    do {
        if (i >= chars.length) break;

        chars[i] = '_';
        i += 3;
    } while (true);

    return chars.join('');
}
