const genPage = function(items) {
	var pageInfo = {};
	for(const item of items) {
		pageInfo[item] = {
			entry: "src/main.js",
			template: "public/index.html",
			filename: item + "/index.html"
		}
	}
	return pageInfo;
}

module.exports = {
  publicPath: '/ARcam-fabric.js-test/',
  outputDir: './docs',
  pages: {
		home: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home',
    },
    signature: {
      entry: 'src/signature.js',
      template: 'public/signature.html',
      filename: 'signature.html',
    },
    ...genPage([
			"captureFabric",
			"captureFabricTest",
      "facingMode",
      "landing",
      "edit"
		])
  },
}