import 'fastify'

declare module 'fastify' {
    export interface ContextConfigDefault {
        customProperty: boolean
    }

}
interface CustomPluginConfig {
    customProperty: boolean
}