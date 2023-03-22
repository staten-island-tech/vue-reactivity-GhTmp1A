import { reactive } from 'vue'

export const cart = reactive({
  money: 1,
  item: [
    {
      name: 'Blizzard Breather',
      description: 'Check',
      price: 10,
      img: 'https://wiki.teamfortress.com/w/images/thumb/6/68/Item_icon_Blizzard_Breather.png/75px-Item_icon_Blizzard_Breather.png'
    },
    {
      name: 'Tom-Readers',
      description: 'Check',
      price: 11,
      img: 'https://wiki.teamfortress.com/w/images/thumb/d/d7/RED_Tomb_Readers.png/85px-RED_Tomb_Readers.png'
    },
    {
      name: 'Dr. Woah',
      description: 'Check',
      price: 12,
      img: 'https://wiki.teamfortress.com/w/images/thumb/a/a0/Item_icon_Dr._Whoa.png/75px-Item_icon_Dr._Whoa.png'
    }
  ]
})
