var eslint = require('eslint')
var test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  var CLIEngine = eslint.CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  var code = 'var foo:number = 1\nvar bar = function (input:number):void {}\nbar(foo)\n'

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
