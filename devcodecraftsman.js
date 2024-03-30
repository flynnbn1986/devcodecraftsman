// Create a class named DevCodeCraftsman
class DevCodeCraftsman {
    constructor() {
        this.skills = [];
    }

    // Method: acquire a new skill
    acquireSkill(skill) {
        this.skills.push(skill);
        console.log(`Acquired ${skill} as a new skill.`);
    }

    // Method: relinquish a skill
    relinquishSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index !== -1) {
            this.skills.splice(index, 1);
            console.log(`Relinquished ${skill} as a skill.`);
        } else {
            console.log(`${skill} is not found in the acquired skills.`);
        }
    }

    // Method: list all acquired skills
    listSkills() {
        console.log("Acquired skills:");
        this.skills.forEach(skill => {
            console.log(skill);
        });
    }
}

// Create an instance of DevCodeCraftsman named myDevCodeCraftsman
const myDevCodeCraftsman = new DevCodeCraftsman();

// Acquire skills
myDevCodeCraftsman.acquireSkill("JavaScript");
myDevCodeCraftsman.acquireSkill("Python");
myDevCodeCraftsman.acquireSkill("Java");

// List all acquired skills
myDevCodeCraftsman.listSkills();

// Relinquish a skill
myDevCodeCraftsman.relinquishSkill("Python");

// List all acquired skills after relinquishing
myDevCodeCraftsman.listSkills();
