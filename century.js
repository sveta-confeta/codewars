function century(year) {

    if (year.length < 3) {

        return 1;
    }

    else if (year % 100 === 0) {

        return year / 100;
    }

    return Math.floor(year / 100) + 1;
}