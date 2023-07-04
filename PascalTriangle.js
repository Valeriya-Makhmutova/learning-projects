const getNextRow = (row) => {
    console.log(row)
    let result = [1];
    if (row.length === 1) return [1, 1];
    for (let i = 1; i <= row.length; i += 1) {
      const firstNum = row[i - 1] || 0;
      const num = row[i] || 0;
      const sum = firstNum + num;
      result.push(sum);
    }
    console.log(result);
    return result;
  }
  
  const generate = (num) => {
    let result = [1];
    for (let i = 1; i <= num; i += 1) {
      result = getNextRow(result);
    }
    return result;
  }

  console.log(generate(4));