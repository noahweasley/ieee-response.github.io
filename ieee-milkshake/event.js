var counter = document.getElementById("count");
var dec = document.getElementById("dec");
var inc = document.getElementById("inc");
let count = 0;
let updateInterval;

document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('mouseup', e => {
        if (!updateInterval) {
            if (e.target.id == "inc") ++count
            else if (e.target.id == "dec") count = --count < 0 ? 0 : count;
            else count = 0;
            counter.innerHTML = count + " cups";
        } else {
            clearInterval(updateInterval);
            updateInterval = undefined;
        }

    });

    element.addEventListener('click', e => {
        if (e.target.id == "inc") count++;
        else if (e.target.id == "dec") count = --count < 0 ? 0 : count;
        else count = 0;
        counter.innerHTML = count + " cups";

    });

    element.addEventListener('mousedown', e => {
        if (e.target.id == "inc") {
            updateInterval = setInterval(() => {
                count++;
                counter.innerHTML = count + " cups";
            }, 500);

        } else if (e.target.id == "dec") {
            updateInterval = setInterval(() => {
                count = --count < 0 ? 0 : count;
                counter.innerHTML = count + " cups";
            }, 500);
        }

    });
})