export function frickity() {
  // Select all the carousel elements in the document
  let carousels = document.querySelectorAll('.projects__project-images.carousel')

  // In each carousel, grab all of its images and give it some styling
  // Set each image's 'image' attribute to its index + 1. this will be used to determine which image to display at any given time in the carousel.
  carousels.forEach(carousel => {
    Object.assign(carousel.style, {
      overflow: 'hidden'
    })
    let images = carousel.querySelectorAll('img')
    images.forEach((img, i) => {
      const imageStyles = {
        position: 'absolute',
        top: 0,
        left: 'calc(50% - 7.5rem)',
        width: '15rem',
        padding: '0rem',
        transition: 'left 0.3s',
        display: 'none'
      }
      img.setAttribute('image', i + 1)
      Object.assign(img.style, imageStyles)
    })

    // Set each carousel's 'images' attribute to the amount of image nodes it contains. Used to determine which image to display at any given time in the carousel.
    // Give each carousel an attribute of 'current' with the value of 1. This will start the carousel on the first image node.
    // Set each carousel's styling so that the images inside may be positioned properly and so that the previous and next images won't overflow during transition.
    carousel.setAttribute('images', images.length)
    carousel.setAttribute('current', 1)
    Object.assign(
      carousel.style, {
        position: 'relative',
        overflow: 'hidden'
      }
    )

    // Styling to be applied to the next and prev arrows
    const arrow = {
      'user-select': 'none',
      position: 'absolute',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      width: '1,2rem',
      height: '1.2rem',
      top: 'calc(50% - 0.8rem)'
    }
    const next = {
      left: 'calc(50% + 6.9rem)'
    }
    const prev = {
      right: 'calc(50% + 6.9rem)'
    }

    let nextArrow = document.createElement('img')
    nextArrow.className = 'carousel-next'
    nextArrow.setAttribute('src', 'public/assets/images/right-arrow.svg')
    nextArrow.setAttribute('alt', 'a black chevron arrow pointing to the right')
    Object.assign(
      nextArrow.style,
      arrow,
      next
    )
    carousel.appendChild(nextArrow)

    let prevArrow = document.createElement('img')
    prevArrow.className = 'carousel-prev'
    prevArrow.setAttribute('src', 'public/assets/images/left-arrow.svg')
    prevArrow.setAttribute('alt', 'a black chevron arrow pointing to the left')
    Object.assign(
      prevArrow.style,
      arrow,
      prev
    )
    carousel.appendChild(prevArrow)

    carousel.querySelector('[image="1"]').style.display = 'block'

  })
}

export function frickityInit() {
  function carouselButton() {

    document.querySelector('body').removeEventListener('click', carouselButton)
    setTimeout(function () {
      document.querySelector('body').addEventListener('click', carouselButton)
    }, 300)

    const button = event.target,
      btn = event.target.className,
      carousel = button.parentNode,
      images = carousel.childElementCount - 2

    let current = Number(carousel.getAttribute('current'))
    let next = current + 1;
    if (btn === 'carousel-next') {
      if (current === images) {
        next = 1
      } else {
        next = current + 1;
      }
    } else if (btn === 'carousel-prev') {
      if (current === 1) {
        next = images
      } else {
        next = current - 1;
      }
    }

    const currentImage = carousel.querySelector(`img[image="${current}"]`),
      nextImage = carousel.querySelector(`[image="${next}"]`)
    let currentLeft,
      nextLeft;
    { btn === 'carousel-next' ? currentLeft = '-100%' : currentLeft = '100%' }
    { btn === 'carousel-next' ? nextLeft = '100%' : nextLeft = '-100%' }
    Object.assign(
      currentImage.style, {
        top: 0,
        left: currentLeft
      }
    )
    setTimeout(function () {
      currentImage.style.display = 'none';
      currentImage.style.left = 0;
    }, 300)
    console.log(carousel.querySelector(`[image="${next}"]`))
    Object.assign(
      nextImage.style, {
        top: 0,
        left: nextLeft,
        display: 'block'
      }
    )
    setTimeout(function () {
      nextImage.style.left = 'calc(50% - 7.5rem)';
    }, 1)

    if (btn === 'carousel-next') {
      if (current === images) {
        carousel.setAttribute('current', 1)
      } else {
        carousel.setAttribute('current', current + 1)
      }
    } else {
      if (current === 1) {
        carousel.setAttribute('current', images)
      } else {
        carousel.setAttribute('current', current - 1)
      }
    }
  }

  document.querySelector('body').addEventListener('click', carouselButton)
}