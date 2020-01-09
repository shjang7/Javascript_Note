# The importance of Test driven development
- think through your requirements or design before your write your functional code
  * 1st: just enough test for your code to fail
  * 2nd: run your tests
  * 3rd: update your functional code to make it pass
  * 4th: run your tests again
  * 5th: fail? update your functional code and retest until the tests pass

- advantages of test driven development
  * save time from debugging, reduces bugs, reduce time of changing, improve design, <br />
    encourages refactoring, build safty from other developer's miss development, <br />
    force to think, eliminating waste, reduce fear

- disadvantages of test driven development
  * slow development time down, test suites are tedious to manage

# Why we should do test
- [video 1](https://www.youtube.com/watch?v=Eu35xM76kKY)
  * scale-able software development is not that simple saving in one's head
  * to be able to keep scale-able software in the real market, we need some strategy
  * for that, we need to save test cases for software, and TDD helps this easier

# "jest" usage
1. install
```
$ npm i --save-dev jest
```

2. matching
- [matcher documentation](https://jestjs.io/docs/en/using-matchers)
```
$ jest my-test --notify --config=config.json
```
[jest CLI options](https://jestjs.io/docs/en/cli)

3. creating config file for jest
```
$ jest --init
```

4. more documentations
- [expect types](https://jestjs.io/docs/en/expect)
- [async testing](https://jestjs.io/docs/en/asynchronous)
