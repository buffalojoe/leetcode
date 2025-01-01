let maxScore = function(s) {

    let score = 0;

    for (i = 1; i < s.length; i++) {

        let counter = 0;

        let stringArrayLeft = s.substring(0, i).split('');

        stringArrayLeft.forEach((item) => {            
            if (item == '0') {
                counter += 1;
            }
        })

        let stringArrayRight = s.substring(i, s.length).split('');

        stringArrayRight.forEach((item) => {            
            if (item == '1') {
                counter += 1;
            }
        })

        if (counter > score) {
            score = counter;
        }
    }

    return score;
};

console.log(maxScore("011101"));