const skillList = document.querySelector(".skillList");
console.log(skillList);
async function addSkills() {
  try {
    const res = await fetch("data.json");
    const skills = await res.json();
    console.log(skills);

    skills.map((skill) => {
      // creating skillLeft element
      const skillLeft = document.createElement("div");
      skillLeft.classList.add("skillLeft");

      const skillImg = document.createElement("div");
      skillImg.classList.add("skillImg");
      const image = document.createElement("img");
      image.src = skill.icon;
      image.alt = "skill icon";
      skillImg.appendChild(image);

      const skillName = document.createElement("p");
      skillName.classList.add("skillName");
      skillName.textContent = skill.category;

      //   appending skill image and skill name in skillLeft
      skillLeft.appendChild(skillImg);
      skillLeft.appendChild(skillName);

      // creating skillScore element
      const skillScore = document.createElement("p");
      skillScore.classList.add("skillScore");
      const score = document.createElement("span");
      score.classList.add("score");
      score.textContent = skill.score;
      score.insertAdjacentHTML("beforeend", "/100");

      //   appending skillLeft and skillScore to the skill(list) element;
      const skillElement = document.createElement("li");
      skillElement.classList.add("skill");
      skillElement.appendChild(skillLeft);
      skillElement.appendChild(skillScore);

      //   appending it to the parent skillList element
      skillList.appendChild(skillElement);
    });
  } catch (error) {
    console.error(error);
  }
}

addSkills();
