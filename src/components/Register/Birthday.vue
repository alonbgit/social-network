<template>
  <div class="birthday">
    <select class="months" v-model="selectedMonth">
      <option value="-1">Month</option>
      <option v-for="month in months" :value="month.id">{{ month.name }}</option>
    </select>
    <select class="days" v-model="selectedDay">
      <option value="-1">Day</option>
      <option v-for="day in getMonthDays" :value="day">{{ day }}</option>
    </select>
    <select class="years" v-model="selectedYear">
      <option value="-1">Year</option>
      <option v-for="year in years" :value="year">{{ year }}</option>
    </select>
  </div>
</template>

<script>

  export default {

    watch: {
      selectedMonth(val) {
        this.$emit('monthChange', val);
      },
      selectedYear(val) {
        this.$emit('yearChange', val);
      },
      selectedDay(val) {
        this.$emit('dayChange', val);
      }
    },

    data() {
      return {
        months: [
          { name: 'Jan', id: 1 },
          { name: 'Feb', id: 2 },
          { name: 'Mar', id: 3 },
          { name: 'Apr', id: 4 },
          { name: 'May', id: 5 },
          { name: 'Jun', id: 6 },
          { name: 'Jul', id: 7 },
          { name: 'Aug', id: 8 },
          { name: 'Sep', id: 9 },
          { name: 'Oct', id: 10 },
          { name: 'Nov', id: 11 },
          { name: 'Dec', id: 12 }
        ],
        selectedMonth: -1,
        years: [],
        selectedDay: -1,
        selectedYear: -1
      }
    },

    created() {
      this.initYears();
    },

    methods: {

      initYears() {
        for(var i = 1905; i < new Date().getFullYear(); i++)
          this.years.push(i);
      }

    },

    computed: {

      getMonthDays() {
        if (this.selectedMonth == -1)
          return 31;
        return new Date(new Date().getYear(), this.selectedMonth, 0).getDate();
      }

    }

  }

</script>

<style lang="scss" scoped>

  .birthday {

    select {
      height: 30px;
      width: 80px;
      outline: 0;
    }

  }

</style>
