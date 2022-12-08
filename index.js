function research(call) {
  let startTime;
  let finishTime;
  startTime = Date.now();
  call();
  finishTime = Date.now();
  diffTime = finishTime - startTime;
  return diffTime;
}

function report(diffTime, name) {
  outlet = `Время потраченное на ${name}: ${diffTime} миллисекунд`;
  console.log(outlet);
}

let createElement = (function () {
  let initValue = 0;
  return function () {
    initValue++;
    return initValue;
  };
})();

const researchArray = new Array(1000000).fill().map(() => createElement());
const researchSet = new Set(researchArray);

const diffTimePushArray = research(() => researchArray.push(100000002));
report(diffTimePushArray, "добавление элемента Array");
const diffTimePushSet = research(() => researchSet.add(100000002));
report(diffTimePushSet, "добавление элемента Set");
const diffTimeFindArray = research(() => researchArray.indexOf(100000002));
report(diffTimeFindArray, "поиск элемента Array");
const diffTimeFindSet = research(() => researchSet.has(100000002));
report(diffTimeFindSet, "поиск элемента Set");
const diffTimeDeleteArray = research(
  () => delete researchArray[researchArray.indexOf(100000002)]
);
report(diffTimeDeleteArray, "удаление элемента Array");
const diffTimeDeleteSet = research(() => researchSet.delete(100000002));
report(diffTimeDeleteSet, "удаление элемента Set");
