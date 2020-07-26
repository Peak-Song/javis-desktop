import Store from 'electron-store'

const Settings = new Store({
  name: '.javis desktop',
  defaults: {
    globalConfig:
      {
        gitPath: null,
        localGitDir: null
      },
    language: 'en'
  }
})

Settings.set('globalConfig.gitPath', 'test')

export default Settings
