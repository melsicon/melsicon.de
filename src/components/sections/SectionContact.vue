<template>
    <section class="section">
        <article class="article">
            <h2 class="sub-heading span2">{{contact.title}}</h2>
            <p v-for="paragraph in contact.paragraphs" :key="paragraph.index">{{paragraph}}</p>
            <span class="btn-wrap"><button>Contact us</button></span>
            <div class="illustration">
                <div/>
            </div>
        </article>
    </section>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    contact: {
      title: 'Get in touch with us',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    }
  })
}
</script>
