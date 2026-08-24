import pluginKitOxfmt from '@sanity/plugin-kit/oxfmt'
import {defineConfig} from 'oxfmt'

export default defineConfig({
  ...pluginKitOxfmt,
  // .yarn holds the committed Yarn release; .yarnrc.yml is Yarn-managed
  ignorePatterns: [...(pluginKitOxfmt.ignorePatterns ?? []), '.yarn/**', '.yarnrc.yml'],
})
