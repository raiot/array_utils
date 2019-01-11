type ComposedArray = Array<Array<[]>[]> | Array<any>;

const array_flatten =
  (arr_composed: ComposedArray, index: number = 0, acc: Array<number> = []) => {
    if (arr_composed.length === 0) {
      return [];
    }
    let isTimeout = false;
    const timeout = setTimeout(() => {
      isTimeout = true;
      console.log('time out!')
    }, 100000);
    if (Array.isArray(arr_composed) && index < arr_composed.length && !isTimeout) {
      if (Array.isArray(arr_composed[index])) {
        array_flatten(arr_composed[index], 0, acc);
        index = index + 1;
      }
      if (index < arr_composed.length) {
        acc.push(arr_composed[index]);
        array_flatten(arr_composed, index + 1, acc);
      }
    }
    clearTimeout(timeout);
    return acc;
  }

export default array_flatten;