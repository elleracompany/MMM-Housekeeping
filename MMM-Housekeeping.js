
Module.register("MMM-Housekeeping", {

    // Override dom generator.
    getDom: window.setInterval(
      function () {
        const d = Date.parse('18 Jan 2023 00:00:00 GMT');
        const w =  Math.round((new Date() - d) / (7 * 24 * 60 * 60 * 1000));
        const c = [
            'Ellera',
            'Imara',
            'CSO Partner'
        ];
        var wrapper = document.createElement("div");
        wrapper.innerHTML = c[w%3] + ' har ryddeansvaret denne uken';
        return wrapper;
    },60000),
});