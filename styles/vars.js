
let contents = $fs.readFileSync(process.argv[2], 'utf-8')
log(contents.match(/(\$.+?)( |\:|\'|\"|\;)/g))


