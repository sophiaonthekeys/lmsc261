
function checkLifespan(hoursUsed) {

    const maxLifeSpan = 1000;

    if (typeof hoursUsed !== "number" || Number.isNaN(hoursUsed)) {
        return "please enter valid number";
    }

    if (hoursUsed < 0) {
        return "please enter valid number";
    }

    if (hoursUsed < 800) {
        return "suit in working condition";
    }

    else if (hoursUsed < maxLifeSpan) {
        return "suit needs replacement soon";
    }

    else {
        return "suit no longer safe to use";
    }
}

print(checkLifespan(500));
print(checkLifespan(850));
print(checkLifespan(1100));
print(checkLifespan("hello"));
