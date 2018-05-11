module.exports = function(source, sourceMap) {
  source += "\n/*# sourceMappingURL=data:application/json;base64," + encodeURIComponent(Buffer.from(JSON.stringify(sourceMap)).toString('base64')) + " */";

  return source
};
