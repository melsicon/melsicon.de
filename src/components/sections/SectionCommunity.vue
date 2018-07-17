<template>
    <section class="section community">
        <article class="article">
            <h2 class="sub-heading span2 center">{{community.title}}</h2>
            <p v-for="paragraph in community.paragraphs" :key="paragraph.index" class="right">{{paragraph}}</p>
            <ul class="list service-list span2">
                <li v-for="meetup in community.list" :key="meetup.index" class="meetup">
                    <h4>{{meetup.name}}</h4>
                    <p>{{meetup.description}}</p>
                </li>
            </ul>
            <div class="illustration span2">
                <div/>
            </div>
        </article>
    </section>
</template>

<script>
export default {
  name: 'Community',
  data: () => ({
    community: {
      title: 'Dedicated to the community',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ],
      list: [
        {
          name: 'Community 1'
        },
        {
          name: 'Community 2'
        },
        {
          name: 'Community 3'
        },
        {
          name: 'Community 4'
        }
      ]
    }
  })
}
</script>
