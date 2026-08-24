import sanityPluginKitOxlint from '@sanity/plugin-kit/oxlint'
import {defineConfig} from 'oxlint'

export default defineConfig({
  extends: [sanityPluginKitOxlint],
  // ignorePatterns do not propagate through `extends`, so re-spread the preset's
  ignorePatterns: [...(sanityPluginKitOxlint.ignorePatterns ?? []), '.yarn/**'],
})
