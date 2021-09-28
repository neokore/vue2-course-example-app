export default {
  directives: {
    'my-directive': function (_, binding) {
      console.log('Arg', binding.arg);
    }
  },
  data: () => ({
    logEntries: []
  }),
  methods: {
    addLog(logEntry) {
      this.logEntries.push(logEntry);
    }
  },
  created() {
    console.log('Logger initialized');
  }
};
