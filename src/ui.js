'use strict'
const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'GitHub',
    url: 'https://github.com/yossiee',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/yossiee_jp',
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/egashira.yoshimitsu',
  },
  {
    label: 'Qiita',
    url: 'https://qiita.com/yossiee',
  },
  {
    label: '---------'
  },
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>Hey, I'm yossiee! I work as a Software Developer.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
