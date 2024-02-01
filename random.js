const button = document.querySelector('button')
const baraban = document.querySelector('.baraban')
const gift = document.querySelector('.random-value')
const refresh = document.querySelector('.refresh')

const data = [
  {
    title: 'Damas',
    bgColor: 'green'
  },
  {
    title: '60 million',
    bgColor: 'yellow'
  },
  {
    title: 'Yana bir urunish',
    bgColor: 'red'
  },
  {
    title: 'Yutqazdingiz',
    bgColor: 'black'
  },
  {
    title: 'Damas',
    bgColor: 'green'
  },
  {
    title: '60 million',
    bgColor: 'yellow'
  },
  {
    title: 'Yana bir urunish',
    bgColor: 'red'
  },
  {
    title: 'Yutqazdingiz',
    bgColor: 'black'
  },
  {
    title: 'Damas',
    bgColor: 'green'
  },
  {
    title: '60 million',
    bgColor: 'yellow'
  },
  {
    title: 'Yana bir urunish',
    bgColor: 'red'
  },
  {
    title: '30 million',
    bgColor: 'red'
  },
  {
    title: '2 ta Damas',
    bgColor: 'gray'
  },
  {
    title: '10 millionlik vaucher',
    bgColor: 'blue'
  },
  {
    title: 'Yana bir urinish',
    bgColor: 'green'
  },
]


button.addEventListener('click', () => {
  baraban.classList.add('animate')
  let item = (Math.random() * 20).toFixed(0)
  console.log(item)
  setTimeout(() => {
    if(item){
      gift.textContent = data[item].title
      gift.style.backgroundColor = data[item].bgColor
    }else {
      gift.textContent = data[item].title
      gift.style.backgroundColor = data[item].bgColor
    }
  }, 3000)
})

refresh.onclick = () => {
  location.reload()
}





