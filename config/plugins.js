const { join } = require("path");


module.exports = {
    graphql: {
        config: {
            generateArtifacts: true,
            artifacts: {
                schema: join(__dirname, '..', 'schema.graphql'),
                typegen: join(__dirname, '..', 'types.d.ts'),
            },
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    }
}
