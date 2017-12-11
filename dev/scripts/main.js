const portfolio = {}

portfolio.data = {
  skillset: ['react', 'javascript', 'gulp', 'firebase', 'jquery', 'sass', 'css', 'html'],
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
      url: 'www.lemmachain.com'
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
      url: 'www.projecturl.com'
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
      url: 'www.projecturl.com'
    }
  },
  about: `I'm hoping to do some fun and exciting things with my code. I am interested in the story-telling aspect of code, which takes us beyond looking at elements in the DOM as sections of a webite, and instead prompts us to build websites as experiences.`
}

portfolio.page = 'home';

portfolio.footer = $('<footer>').text('design and development © Simon Steer 2017');

portfolio.replaceContent = () => {
  
  $('.header__logo').on('click', function() {
    portfolio.page = 'home'
    $('section').fadeOut(300, function () {
      $('section').remove()
      $('header').removeClass('header__alt')
    })
    $('footer').fadeOut(300, function () {
      $('footer').remove()
    })
  })

  $('header a').on('click', function(e) {

    e.preventDefault()

    if (portfolio.page === $(this).text()) {
      return
    };

    portfolio.page = $(this).text()
    
    // Giving the header a class of 'header__alt' will transform it from a splash page to a fixed header
    // The .css() method being applied to .header__logo will return it to its default position, as the function cause it to track towards the cursor will end.
    $('header').addClass('header__alt')
    $('.header__logo').css('transform', `translate(0, 0)`)
    $('section').fadeOut(300)
    $('footer').fadeOut(300)
    
    setTimeout (function () {
      window.scrollTo(0,0)
      $('section').remove()
      $('footer').remove()
      $('header').after(
        portfolio[portfolio.page],
        $('<footer>').text('development & design © Simon Steer 2017')
      )
      portfolio.scrollAnimations()
    }, 300)
  })
}

portfolio.about = () => {
  let about = $('<section>').addClass('about');
  let heading = $('<h1>').addClass('section__h1').text('About');
  let subheading = $('<h2>').addClass('subheading').text('Skillset');
  let figure = $('<figure>');
  let figcaption = $('<figcaption>').addClass('slide-from-left');
  let content = $('<p>').text(portfolio.data.about).addClass('slide-down');
  let ul = $('<ul>').addClass('skills').addClass('slide-up');

  portfolio.data.skillset.forEach(skill => {
    ul.append($('<li>').append($('<img>').attr({
      src: `public/assets/icons/${skill}.svg`,
      alt: `${skill} logo`
    })))
  })

  let wrapper = $('<div>').addClass('wrapper')

  figcaption.append(
    content,
    subheading,
    ul
  )

  figure.append(
    figcaption,
    $('<img>').attr({
      src: 'public/assets/images/me.jpg',
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
            .text(portfolio.data.projects[project].url)
            .attr({
              href: `https://${portfolio.data.projects[project].url}`,
              target: '_blank',
            }),
          $('<h2>').addClass('subheading').text('Technologies Used'),
          ul
        ),
        $('<div>').addClass('projects__project-images').append (
          $('<img>').attr({
            src: `public/assets/images/projects/${project}/${project}-macbook.gif`,
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
          <form class="contact__form slide-from-right" method="POST" action="https://formspree.io/simonpsteer@gmail.com">
            <input type="text" placeholder="enter your email here" name="email">
            <textarea name="message" placeholder="enter your message here"></textarea>
            <button>send email</button>
          </form>
        </div>
      </div>
    </section>
  `)

}

portfolio.scrollAnimations = () => {

  $(window).resize(function () {
    $('.projects figure').each(function () {
      let el = $(this)
      if (el.offset().top <= $(window).height()) {
        el.addClass('fade-in');
      }
    })
  })

  $('.projects figure').each(function() {
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

portfolio.floatLogo = () => {
  $(window).on('mousemove', function (e) {
    if (portfolio.page === 'home') {
      let x = (e.clientX / $(window).width());
      let y = (e.clientY / $(window).height());
      $('.header__logo').css('transform', `translate(calc(${x}rem - 0.5rem), ${y}rem)`)
    }
  })
}

portfolio.init = () => {
  portfolio.replaceContent();
  portfolio.floatLogo();
}

$(function () {
  portfolio.init()
});