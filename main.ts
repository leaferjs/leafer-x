import { Leafer, Rect } from 'leafer-ui'

import { Selector, SelectEvent } from './src' // 引入插件代码


const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

leafer.add(rect)

console.log(Selector, SelectEvent)