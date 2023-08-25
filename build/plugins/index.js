import unplugin from './unplugin'
import vue from './vue'
import windicss from './windicss'

export function setupVitePlugins(viteEnv) {
  const plugins = [vue, windicss, ...unplugin]
  return plugins
}
