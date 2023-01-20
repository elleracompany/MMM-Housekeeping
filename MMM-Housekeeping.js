
Module.register("MMM-Housekeeping", {

    // Override dom generator.
    getDom: function () {
        const d = Date.parse('18 Jan 2022 00:00:00 GMT');
        const w =  Math.round((new Date() - d) / (7 * 24 * 60 * 60 * 1000));
        const c = [
            'Ellera',
            'Imara',
            'CSO Partner'
        ];
        var wrapper = document.createElement("div");
        wrapper.innerHTML = w%3;
        return wrapper;
    },
});