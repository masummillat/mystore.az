module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.node = {
            fs: 'empty',
        };
        // if (dev) {
        //   config.module.rules.push({
        //     test: /\.(j|t)sx?$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader',
        //   })
        // }
        return config;
    },
};
