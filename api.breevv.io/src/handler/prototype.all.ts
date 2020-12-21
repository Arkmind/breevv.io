import '../interfaces/prototype.endswithany.interface'

String.prototype.endsWithAny = function(suffix: Array<string>) {
  return suffix.map(e => this.endsWith(e)).filter(e => e).length > 0
}
