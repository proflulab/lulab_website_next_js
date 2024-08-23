import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const AdvancedDigitalTechClubData : Club = {
    
    mainTitle: "AdvancedDigitalTech Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/advanced-1.jpeg",
    promotionContent: `${spaces}At AdvancedDigitalTechClub, we transform knowledge into impactful action through hands-on projects.
${warp}${spaces}After building a strong foundation, we dive into projects, turning innovative ideas into tangible results. 
${warp}${spaces}It's more than learning; it's creating a future where your skills make a difference. Join us today, and let's shape tomorrow together!
`,
    firstExampleImage: "/advanced-2.jpg",
    secondExampleImage: "/Tech.png",
    harvestTitle: "Harvests from the AdvancedDigitalTech Club",
    harvestContent: [  
        {  
            subheading: "Practical Skill Development",  
            description: "Engage in hands-on projects that transform theoretical knowledge into real-world skills, ensuring you're prepared to tackle future challenges."  
        },  
        {  
            subheading: "Innovative Thinking",  
            description: "Learn to take innovative ideas and turn them into tangible, impactful results through collaborative projects."  
        },  
        {  
            subheading: "Strong Foundational Knowledge",  
            description: "Build a solid foundation in advanced digital technologies, equipping you with the essential knowledge needed for success."  
        },  
        {  
            subheading: "Future-Ready Competence",  
            description: "Prepare for the future by developing the skills that will make a difference in tomorrow's digital landscape."  
        },  
        {  
            subheading: "Collaborative Experience",  
            description: "Work alongside like-minded peers to create solutions that shape a better future, enhancing both teamwork and leadership abilities."  
        }  
    ]
};