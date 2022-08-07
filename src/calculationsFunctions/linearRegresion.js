const linearRegressionDataPoint = (x,y) => {
  const xMultiplyY = x*y;
  const xSquared = x**2;
  const ySquared = y**2;

  return { x, y, xMultiplyY, xSquared, ySquared };
}


const createLinearRegressionData =  (data) => {
  const valuesArray = [];
  const resultsArray = [];
  let counter = 0;

  for (const dataPoint of data) {
    const values = linearRegressionDataPoint(++counter,dataPoint.value);

    valuesArray.push(values);
  }

  const xSum = valuesArray.reduce((prev,cur) =>  prev + cur.x ,0);
  const ySum = valuesArray.reduce((prev,cur) => prev + cur.y, 0);
  const xMultiplyYSum = valuesArray.reduce((prev,cur) => prev + cur.xMultiplyY, 0);
  const xSquaredSum = valuesArray.reduce((prev,cur) => prev + cur.xSquared, 0);
  const ySquaredSum = valuesArray.reduce((prev,cur) => prev + cur.ySquared, 0);
  const nConstant = valuesArray.length;
  const mConstant = nConstant * xMultiplyYSum - xSum * ySum / nConstant * xSquaredSum - xSum ** 2;
  const bConstant = ySum - mConstant * xSum / nConstant;

  for (const element in valuesArray) {
    const regressionValueAtX = element.regressionValueAtX = mConstant * element.x + bConstant;
    const x = element.x;
    resultsArray.push({ x, regressionValueAtX });
  }

  return resultsArray;
}

export default createLinearRegressionData;