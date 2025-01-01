const bundleNames: string[] = [];

export const printBundleSizes = () => {
  let isSomeBundleNew = false;
  const bundles = performance
    .getEntriesByType("resource")
    .filter((resource) =>
      resource.name.startsWith("http://localhost:3000/static/js/")
    )
    .reduce((acc, curr) => {
      const _chunkName = curr.name.split("js/")[1];
      const chunkName = _chunkName.endsWith(".chunk.js")
        ? _chunkName.split("src_specific_")[1]
        : _chunkName;

      if (!bundleNames.includes(chunkName)) {
        bundleNames.push(chunkName);
        isSomeBundleNew = true;
      }
      return { ...acc, [chunkName]: (curr as any).encodedBodySize };
    }, {});

  if (isSomeBundleNew) {
    console.table(bundles);
  }
};
