<template>
    <article class="article-section about">
        <figure class="illustration"/>
        <section class="melsicon">
            <h2 class="sub-heading">{{melsicon.title}}</h2>
            <p v-for="paragraph in melsicon.paragraphs" :key="paragraph.index" class="span2">{{paragraph}}</p>
        </section>
        <section class="services">
            <h3 class="sub-heading">{{services.title}}</h3>
            <p v-for="paragraph in services.paragraphs" :key="paragraph.index">{{paragraph}}</p>
            <ul class="service-list">
                <li v-for="service in services.list" :key="service.index" class="service">
                    <h4>{{service.name}}</h4>
                    <p>{{service.description}}</p>
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    melsicon: {
      title: 'Our company',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Our team of developers sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    },
    services: {
      title: 'Our services',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ],
      list: [
        {
          name: 'Service 1',
          description: 'Service 1 description'
        },
        {
          name: 'Service 2',
          description: 'Service 2 description'
        },
        {
          name: 'Service 3',
          description: 'Service 3 description'
        }
      ]
    }
  })
}
</script>

<style lang="sass">

  .services
    grid-column: 1 / -1

  .service-list
    grid-column: 1 / -1
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
    grid-auto-rows: repeat(4, auto)
    grid-gap: 1rem
    margin: 1.5rem 0

  .clients
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 1rem
    margin: 2rem 0

    .client
      background: $color-secondary
      height: 80px
  </style>
