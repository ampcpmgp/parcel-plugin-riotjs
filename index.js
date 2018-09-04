module.exports = function (bundler) {
  bundler.addAssetType('.tag.html', require.resolve('./riotAssetType'))
}
