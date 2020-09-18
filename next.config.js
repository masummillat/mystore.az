const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
    basePath: '',
    // exportPathMap: async function (
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId }
    // ) {
    //     return {
    //         'category/1': { page: 'category', query: { id: '1' } },
    //         'shop/1': { page: 'shop', query: { id: '1' } },
    //     }
    // },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.node = {
            fs: 'empty',
        };

        return config;
    },
});
