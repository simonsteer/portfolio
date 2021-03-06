const portfolio = {}

portfolio.touchEvent = 'click';

// Determine the mobile operating system and change how to handle on click events accordingly.
portfolio.getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    portfolio.touchEvent = 'click touchstart';
  }
}

portfolio.data = {
  social: {
    twitter: 'https://twitter.com/simonsteer_',
    linkedin: 'https://www.linkedin.com/in/simon-steer-834612150/',
    github: 'https://github.com/simonsteer'
  },
  skillset: ['react', 'git', 'javascript', 'gulp', 'firebase', 'jquery', 'sass', 'css', 'html'],
  projects: {
    lemmachain: {
      description: 'Lemmachain is a game made with JavaScript/jQuery that combines elements of Boggle, Scrabble, and Word Twist together. It formerly utilized the Oxford English Dictionary’s API to check whether a word exists or not before allowing the player to score it, and currently uses a local dictionary.js file for faster validation.',
      technologies: [
        'javascript',
        'gulp',
        'firebase',
        'sass',
        'css',
        'html'
      ],
      url: 'https://www.lemmachain.com'
    },
    jeopardize: {
      description: 'Jeopardize is a game made with JavaScript and jQuery I made in order to grasp the flow of data better. It allows the user to set up a custom game of Jeopardy and then play it with up to four players.',
      technologies: [
        'javascript',
        'jquery',
        'sass',
        'css',
        'html'
      ],
      url: 'http://www.simonsteer.com/jeopardize'
    },
    jot: {
      description: 'Jot is a not-taking app which requires user authentication and login, and allows the user to quickly type out jot notes and save/edit them in a database. The user can create different classrooms, with different subjects to store different kinds of notes in.',
      technologies: [
        'react',
        'javascript',
        'firebase',
        'gulp',
        'sass',
        'css',
        'html'
      ],
      url: 'https://notes-2f738.firebaseapp.com/'
    },
    coursea: {
      description: 'This is a conversion of a Photoshop file to a responsive website layout. I was given the photoshop file, extracted the assets myself, and recreated the mockup using HTML5 and CSS3. The final design is optimized for mobile, and can be viewed on any device.',
      technologies: [
        'sass',
        'css',
        'html'
      ],
      url: 'http://www.simonsteer.com/coursea'
    }
  },
  about: `My name is Simon Steer and I'm a web developer based in Toronto with a background in graphic design. You can typically find me rebuilding existing jQuery plugins or reading up on different web development-related skills (my current obsession is three.js). My passion towards web development drives me to create seamless, functional, and accessible web experiences.

  I'm constantly looking to better myself as a developer. Although there are many skills I have accumulated already, there is an infinite wealth of knowledge when it comes to web development. What inspires me to further my learning is the unknown; when I visit a website and I really have to think hard about how it was built, that excites me. My first instinct is to try and rebuild it myself and learn a new skill. I love being challenged, and will never settle or let my skills stagnate.

  When I'm not at the computer, I'm probably either at the gym, reading about intersectional politics, or playing video games on outdated consoles... But I'm usually at the computer.`
}

portfolio.page = 'home';

portfolio.replaceContent = () => {
  
  const home = [$('.header__logo'), $('.header__title')]

  home.forEach(e => {
    e.on(`${portfolio.touchEvent}`, function() {
      portfolio.page = 'home'
      $('.header__alt').removeClass('header__before')
      $('section').fadeOut(300, function () {
        $('section').remove()
        $('header').removeClass('header__alt')
      })
      $('footer').fadeOut(300, function () {
        $('footer').remove()
      })
    })
  })

  $('header a').on(`${portfolio.touchEvent}`, function(e) {

    e.preventDefault()

    if (portfolio.page === $(this).text()) {
      return
    }

    portfolio.page = $(this).text()
    
    // Giving the header a class of 'header__alt' will transform it from a splash page to a fixed header
    // The .css() method being applied to .header__logo will return it to its default position, as the function cause it to track towards the cursor will end.
    $('header').addClass('header__alt')
    $('.header__alt').addClass('header__before')
    $('section').fadeOut(300)
    $('footer').fadeOut(300)
    
    setTimeout (function () {
      window.scrollTo(0,0)
      $('section').remove()
      $('footer').remove()
      $('header').after(
        portfolio[portfolio.page],
        $('<footer>').text('design & development © Simon Steer 2017')
      )
      if (portfolio.page === 'projects') {
        portfolio.scrollAnimations('.projects figure')
        portfolio.carousel()
      }
    }, 300)
  })
}

portfolio.about = () => {
  let about = $('<section>').addClass('about');
  let heading = $('<h1>').addClass('section__h1').text('About');
  let skillset = $('<h2>').addClass('subheading').text('Skillset');
  let findmeon = $('<h2>').addClass('subheading').text('Find me on');
  let figure = $('<figure>');
  let figcaption = $('<figcaption>').addClass('slide-from-left');
  let content = $('<p>').text(portfolio.data.about).addClass('slide-down');
  let skills = $('<ul>').addClass('skills').addClass('slide-up');
  let platforms = $('<ul>').addClass('skills').addClass('slide-up');

  portfolio.data.skillset.forEach(skill => {
    skills.append($('<li>').append($('<img>').attr({
      src: `public/assets/icons/${skill}.svg`,
      alt: `${skill} logo`
    })))
  })


  for (let platform in portfolio.data.social) {
    platforms.append($('<li>').append($('<a>').attr({
      href: `${portfolio.data.social[platform]}`,
      target: '_blank'
    }).append($('<img>').attr({
      src: `public/assets/icons/${platform}.svg`,
      alt: `${platform} logo`
    }))))
  }

  let wrapper = $('<div>').addClass('wrapper')

  figcaption.append(
    content,
    skillset,
    skills,
    findmeon,
    platforms
  )

  figure.append(
    figcaption,
    $('<img>').attr({
      src: 'public/assets/images/portrait.jpg',
      alt: 'portrait photo of Simon Steer',
      class: 'slide-from-right'
    })
  )

  wrapper.append(
    heading,
    figure)

  about.append(wrapper)

  return about

}

portfolio.projects = () => {
  let projects = $('<section>').addClass('projects');
  let heading = $('<h1>').addClass('section__h1').text('Projects');
  let subheading = $('<h2>').addClass('subheading').text('Skillset');
  let figcaption = $('<figcaption>').addClass('slide-from-left');

  let wrapper = $('<div>').addClass('wrapper')

  wrapper.append(heading)

  for (let project in portfolio.data.projects) {

    let ul = $('<ul>').addClass('skills').addClass('slide-up');

    portfolio.data.projects[project].technologies.forEach(skill => {
      ul.append($('<li>').append($('<img>').attr({
        src: `public/assets/icons/${skill}.svg`,
        alt: `${skill} logo`
      })))
    })

    wrapper.append(
      $('<figure>').append(
        $('<figcaption>').append(
          $('<h2>').addClass('projects__heading').text(project),
          $('<p>').text(portfolio.data.projects[project].description),
          $('<a>')
            .addClass('projects__project-url')
            .text('view live')
            .attr({
              href: `${portfolio.data.projects[project].url}`,
              target: '_blank',
            }),
          $('<h2>').addClass('subheading').text('Technologies Used'),
          ul
        ),
        $('<div>').addClass('projects__project-images carousel').append (
          $('<img>').attr({
            src: `public/assets/images/projects/${project}/${project}-macbook.gif`,
            alt: `mockup of ${project} on a macbook`
          }),
          $('<img>').attr({
            src: `public/assets/images/projects/${project}/${project}-ipad.gif`,
            alt: `mockup of ${project} on a macbook`
          }),
          $('<img>').attr({
            src: `public/assets/images/projects/${project}/${project}-iphone.gif`,
            alt: `mockup of ${project} on a macbook`
          })
        )
      )
    )
  }

  projects.append(wrapper)

  return projects

}

portfolio.contact = () => {
  return(`
    <section class="contact">
      <div class="wrapper">
        <h1 class="section__h1">Contact</h1>
        <div class="slide-up">
          <h2 class="contact__h2">Let's make something beautiful together.</h2>
          <a class="contact__link" href="mailto:simon@simonsteer.com">simon@simonsteer.com</a>
        </div>
        <div>
          <img src="public/assets/images/me.svg" alt="line drawing of a man leaning to the side" class="slide-from-left">
          <form class="contact__form slide-from-right" method="POST" action="https://formspree.io/simon@simonsteer.com">
            <input type="text" placeholder="enter your email here" name="email">
            <textarea name="message" placeholder="enter your message here"></textarea>
            <button>send email</button>
          </form>
        </div>
      </div>
    </section>
  `)

}

portfolio.scrollAnimations = (e) => {

  $(window).resize(function () {
    $(e).each(function () {
      let el = $(this)
      if (el.offset().top <= $(window).height()) {
        el.addClass('fade-in');
      }
    })
  })

  $(e).each(function() {
      let el = $(this)

      if (el.offset().top <= $(window).height()) {
        el.addClass('fade-in');
      }

      $(window).scroll(() => {
        let trigger = el.offset().top
        let position = $(window).scrollTop() + ($(window).height() - 5);
        if (position >= trigger) {
          $(this).addClass('fade-in')
        }
        if (position < trigger) {
          $(this).removeClass('fade-in')
        }
    })
  });
}

portfolio.carousel = () => {
  $('body .carousel').each(function () {

    const arrow = {
      'user-select': 'none',
      position: 'absolute',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      width: '1,2rem',
      height: '1.2rem',
      top: 'calc(50% - 1.6rem)'
    }
    const next = {
      left: 'calc(50% + 6.9rem)'
    }
    const prev = {
      right: 'calc(50% + 6.9rem)'
    }
    const images = {
      position: 'absolute',
      top: 0,
      left: 'calc(50% - 7.5rem)',
      width: '15rem',
      padding: '0 1rem',
      transition: 'left 0.3s'
    }

    $(this).find('img').css(images)
    $(this).css({
      position: 'relative',
      overflow: 'hidden'
    })
    $(this).append(
      $('<img>')
        .css(arrow)
        .css(next)
        .attr({
          src: 'public/assets/images/right-arrow.svg',
          alt: 'a black chevron arrow pointing to the right'
        })
        .addClass('carousel-next'),
      $('<img>')
        .css(arrow)
        .css(prev)
        .attr({
          src: 'public/assets/images/left-arrow.svg',
          alt: 'a black chevron arrow pointing to the left'
        })
        .addClass('carousel-prev')
    )
    $(this).attr({
      images: $(this).children('img').length,
      current: 1
    })

    let arr = $(this).children('img')

    for (let i = 0; i < arr.length; i = i + 1) {
      $(arr[i]).attr('image', `${i + 1}`)
    }

    $(this).children('img').not('[image="1"]').not('[class*="carousel"]').hide()

  })
}

portfolio.initCarousel = () => {
  $('body').on(portfolio.touchEvent, '.carousel-next', function () {

    $('[class*="carousel"]').prop('disabled', true)

    let current = Number($(this).parent().attr('current')) + 1;
    if (current > $(this).parent().children('img').not('[class*="carousel"]').length) {
      current = 1
    }

    $(this).parent().attr('current', current)

    let next = current - 1;
    if (next < 1) {
      next = $(this).parent().children('img').not('[class*="carousel"]').length
    }

    $(this).siblings(`img[image="${next}"]`)
      .css({
        top: 0,
        left: '-100%'
      })
      .delay(300)
      .fadeOut(0, function () {
        $(this).css({
          top: 0,
          left: 0
        })
      })
    $(this).siblings(`[image="${current}"]`)
      .css({
        top: 0,
        left: '100%'
      })
      .show()
      .css({
        top: 0,
        left: 'calc(50% - 7.5rem)'
      })

    setTimeout(function () {
      $('[class*="carousel"]').prop('disabled', false)
    }, 300)


  })

  $('body').on(portfolio.touchEvent, '.carousel-prev', function () {

    $('[class*="carousel"]').prop('disabled', true)

    let current = Number($(this).parent().attr('current')) - 1;
    if (current < 1) {
      current = $(this).parent().children('img').not('[class*="carousel"]').length
    }

    $(this).parent().attr('current', current)

    let next = current + 1;
    if (next > $(this).parent().children('img').not('[class*="carousel"]').length) {
      next = 1
    }

    $(this).siblings(`img[image="${next}"]`)
      .css({
        top: 0,
        left: '100%'
      })
      .delay(300)
      .fadeOut(0, function () {
        $(this).css({
          top: 0,
          left: 0
        })
      })
      $(this).siblings(`[image="${current}"]`)
      .css({
        top: 0,
        left: '-100%'
      })
      .show()
      .css({
        top: 0,
        left: 'calc(50% - 7.5rem)'
      })
      
      setTimeout (function() {
        $('[class*="carousel"]').prop('disabled', false)
      }, 300)

  })
}

portfolio.floatLogo = () => {
  $(window).on('mousemove', function (e) {
    if (portfolio.page === 'home') {
      let x = (e.clientX / $(window).width());
      let y = (e.clientY / $(window).height());
      $('.header__logo').css('transform', `translate(calc(${x}rem - 0.5rem), ${y}rem)`)
    }
  })
}

portfolio.threejs = () => {
  // Create a new scene and set the camera's perspective
  // 75 => the amount of the scene in view
  // window.innerWidth / window.innerHeight => use this as the standard for now
  // 0.1, 1000 => represents the field of depth (min, max) that objects will render within
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Pass 'true' to the 'alpha' parameter to gain access to transparency
  let renderer = new THREE.WebGLRenderer({
    alpha: true
  });

  // Set the clear color and its opacity
  renderer.setClearColor(0xffffff, 1);

  renderer.setSize(window.innerWidth, window.innerHeight);
  // Appends a <canvas> element to the body of the document
  document.body.appendChild(renderer.domElement);


  let geometry = new THREE.BoxGeometry(7, 7, 7);
  let material = new THREE.MeshBasicMaterial({
    color: 0xe6e6e6,
    wireframe: true
  });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.0008;
    cube.rotation.y += 0.001;
    cube.rotation.z += 0.0009;
    renderer.render(scene, camera);
  }
  animate();

  // A function which allows the render to adjust to window resizing
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

}

portfolio.init = () => {
  portfolio.getMobileOperatingSystem()
  portfolio.replaceContent()
  portfolio.floatLogo()
  portfolio.initCarousel()
  portfolio.threejs()
}

$(function () {
  portfolio.init()
});