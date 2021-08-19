<template>
  <main class="page">
    <h1>résumé</h1>
    <article>This shall be the current most updated resume.</article>
    <resume-entry :entry="testEntry" />
    <footer>
      <div class="footer-body">
        Want to submit a custom resume? Simply check off the cards you want to
        <button @click="getResumeEntries">Press ME to get data</button>
      </div>
    </footer>
  </main>
</template>

<!-- 
  There should be a "PRINT MODE" which just hides the left navbar and footer
  and gives you options to change the font and its size
-->
<script>
import { getResumeEntries } from '@/logic/backend.js';
import ResumeEntry from '../components/ResumeEntry.vue';
export default {
  components: { ResumeEntry },
  created() {
    this.testEntry = {
      show: true,
      section: 'Education',
      subsection: '',
      start_year: '2019',
      end_year: '2023',
      main_title: 'B.S. Computer Science, B.A. Lingusitics, Minor Statistics',
      sub_title: 'The University of North Carolina at Chapel Hill',
      location_title: '',
      sublocation_title: 'GPA - 3.93',
      entry:
        'Coursework in Object-Oriented Foundations, Systems Fundamentals, Data Structures, Files and Databases, Modern Web Programming, and Algorithms.'
    };
  },
  methods: {
    async getResumeEntries() {
      return await getResumeEntries();
    }
  }
};
</script>

<style></style>
