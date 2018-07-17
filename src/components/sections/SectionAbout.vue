<template>
    <section class="section">
        <article class="article">
            <div class="illustration">
                <div/>
            </div>
            <article>
                <h2 class="sub-heading">{{melsicon.title}}</h2>
                <p v-for="paragraph in melsicon.paragraphs" :key="paragraph.index" class="right">{{paragraph}}</p>
                <h3 class="sub-heading">{{services.title}}</h3>
                <p v-for="paragraph in services.paragraphs" :key="paragraph.index" class="right">{{paragraph}}</p>
            </article>
            <ul class="list service-list span2">
                <li v-for="service in services.list" :key="service.index" class="service">
                    <h4>{{service.name}}</h4>
                    <p>{{service.description}}</p>
                </li>
            </ul>
        </article>
        <article class="article clients">
            <h3 class="sub-heading span2">{{clients.title}}</h3>
            <p v-for="paragraph in clients.paragraphs" :key="paragraph.index">{{paragraph}}</p>
            <ul class="list client-list span2">
                <li v-for="client in clients.list" :key="client.index" class="client">
                    <h4>{{client.name}}</h4>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    melsicon: {
      title: 'Our company',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Our team of developers sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    },
    services: {
      title: 'Our services',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat. Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
    },
    clients: {
      title: 'Our clients',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ],
      list: [
        {
          name: 'Client 1'
        },
        {
          name: 'Client 2'
        },
        {
          name: 'Client 3'
        },
        {
          name: 'Client 4'
        }
      ]
    }
  })
}
</script>
