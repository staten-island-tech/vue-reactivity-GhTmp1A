import { reactive } from 'vue'

export const cart = reactive({
  money: 0,
  item: [
    {
      name: 'Monsieur Grenouille',
      description: 'What a polite chap. He seems to be having a splendid day.',
      price: 2,
      img: 'https://wiki.teamfortress.com/w/images/thumb/b/b3/RED_Monsieur_Grenouille_Paint_Hat.png/85px-RED_Monsieur_Grenouille_Paint_Hat.png'
    },
    {
      name: 'Tropical Camo',
      description: 'A well made clothing item for sure. Seems to be a vacation piece.',
      price: 53,
      img: 'https://wiki.teamfortress.com/w/images/thumb/0/07/RED_Tropical_Camo_Bold.png/80px-RED_Tropical_Camo_Bold.png'
    },
    {
      name: 'Fizzy Pharmacist',
      description: 'Hm. A turn from the expected, but welcome nevertheless.',
      price: 62,
      img: 'https://wiki.teamfortress.com/w/images/thumb/5/5d/RED_Fizzy_Pharmacist_Bubbly.png/84px-RED_Fizzy_Pharmacist_Bubbly.png'
    },
    {
      name: 'Lawnmaker',
      description:
        'Are those earmuffs and lenses real? What a great question, and only $45 away from finding out',
      price: 45,
      img: 'https://wiki.teamfortress.com/w/images/thumb/7/78/RED_Lawnmaker.png/73px-RED_Lawnmaker.png'
    },
    {
      name: 'Tactical Turtleneck',
      description:
        'Well, well, well. Another suit piece. Almost seems like they just keep being made.',
      price: 106,
      img: 'https://wiki.teamfortress.com/w/images/thumb/1/12/RED_Tactical_Turtleneck.png/85px-RED_Tactical_Turtleneck.png'
    },
    {
      name: 'Decorated Veteran',
      description:
        'Hm.. Now THIS is a fine piece indeed. Might not look like it, but lots of customization AND all-class.',
      price: 200,
      img: 'https://wiki.teamfortress.com/w/images/thumb/9/96/Painted_Decorated_Veteran_UNPAINTED.png/85px-Painted_Decorated_Veteran_UNPAINTED.png'
    }
  ]
})

export const cartDisplay = []
