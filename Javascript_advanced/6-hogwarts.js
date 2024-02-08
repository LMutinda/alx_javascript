const studentHogwarts = (function() {
    function Student() {
        let privateScore = 0;
        let name = null;

        function changeScoreBy(points) {
            privateScore += points;
        }

        return {
            setName: function(newName) {
                name = newName;
            },
            rewardStudent: function() {
                changeScoreBy(1);
            },
            penalizeStudent: function() {
                changeScoreBy(-1);
            },
            getScore: function() {
                return `${name}: ${privateScore}`;
            }
        };
    }

    return {
        createStudent: function() {
            return Student();
        }
    };
})();

// Create an instance of studentHogwarts for Harry
const harry = studentHogwarts.createStudent();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// Create an instance of studentHogwarts for Draco
const draco = studentHogwarts.createStudent();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
