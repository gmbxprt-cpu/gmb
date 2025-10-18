import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7y3yobqx',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
     appId: 'zlsqmk3dz5gr0f4dojhib9gi',
    autoUpdates: true,
  }
})


