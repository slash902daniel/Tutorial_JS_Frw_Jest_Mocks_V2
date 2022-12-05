# BASED IN TUTORIAL
https://www.youtube.com/watch?v=giywdKF4SXY

## HOW TO RUN EXAMPLE 1 and 2
npm test src\test\mocks-fundamentals\numberFacts\numberFacts.test.js -- --watch

## HOW TO RUN EXAMPLE 3
npm test src\test\mocks-fundamentals\numberFacts\service\service.test.js -- --watch

# OTHER EXECS TYPES --------------------------------------------------------------

## HOW TO RUN
npm run test
Where tests is a referene to package.json

## HOW TO EXEC - Version simple
npx jest

## HOW TO EXEC - Version for Scripts
npx run test

or

npm t

## WATCH - V1
npx jest --watchAll

## WATCH - V2
npm t -- --watch

## COVERAGE - V2
npm t -- --coverage