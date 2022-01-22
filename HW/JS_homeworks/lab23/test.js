let scores = [5, 4, 6];

function getHighestScoreIndex(scores) {
  for (let index = 0; index < scores.length; index++) {
      let currentGrade = scores[index];
      if(currentGrade >= index){
          maxGrade = currentGrade
      }
      return maxGrade
  }
  
}