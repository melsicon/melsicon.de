<template>
    <section
        id="jobs"
        class="section profiles">
        <article class="article vacancies">
            <h2 class="sub-heading">{{ $t('team-page.jobs.heading') }}</h2>
            <p>{{ $t('team-page.jobs.paragraphs')[0] }}</p>
        </article>
        <img
            src=""
            alt=""
            class="illustration">
        <article
            v-for="job in $t('team-page.jobs.vacancies')"
            :key="job.index"
            class="article article-job">
            <h3 class="sub-heading">{{ job.title }}</h3>
            <ul class="list list-skills">
                <li
                    v-for="skill in job.skills"
                    :key="skill.index"
                    class="skill">{{ skill }}</li>
            </ul>
            <p class="job-description">{{ job.description }}</p>
        </article>
        <h2 class="cta-heading span-full center"> {{ $t('team-page.jobs.cta-heading') }} </h2>
        <div class="btn-wrap">
            <button class="btn btn-cta">{{ $t('buttons.apply') }}</button>
        </div>
    </section>
</template>

<style lang="sass" scoped>

  .vacancies
    margin-bottom: 4em

  .job
    margin-bottom: 2em

  .list-skills
    justify-content: flex-start

    li
      font-weight: 600
      margin-right: 1em

</style>
