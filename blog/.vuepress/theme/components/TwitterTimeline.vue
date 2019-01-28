<template>
  <div>
    <a class="twitter-timeline" data-dnt="true" data-link-color="#6464E1" href="https://twitter.com/melsicon?ref_src=twsrc%5Etfw">Tweets by melsicon</a>
  </div>
</template>

<script>
export default {
  beforeMount(){
    const script = document.createElement('script')
    const src = "https://platform.twitter.com/widgets.js"
    script.setAttribute('src', src)
    script.setAttribute('charset', 'utf-8')
    document.head.appendChild(script)
  }
}
</script>

