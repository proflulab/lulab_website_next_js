import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const DigitalMicroprojectsClubData : Club = {
    
    mainTitle: "DigitalMicroprojects Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/digitalMicroprojects-1.jpeg",
    promotionContent: `${spaces}The DigitalMicroprojectsClub goes beyond coding, equipping members with vital life skills crucial for future success. Through practical projects, they gradually build the foundational skills needed for real-world challenges. 
${warp}${spaces}As they grow, these experiences lay the groundwork for personal and professional excellence. 
${warp}${spaces}Don't miss the chance to empower the next generation with the tools they need to lead and innovate. Join the DigitalMicroprojectsClub today and start shaping a brighter future!
`,
    firstExampleImage: "/digitalMicroprojects-2.jpeg",
    secondExampleImage: "/microprojects.png",
    harvestTitle: "Harvests from the DigitalMicroprojects Club",
    harvestContent: [  
        {  
            subheading: "Coding Proficiency",  
            description: "Children gain essential programming skills, providing a strong foundation in technology."  
        },  
        {  
            subheading: "Research Skills",  
            description: "Members enhance their ability to effectively find and utilize information, a crucial skill for problem-solving."  
        },  
        {  
            subheading: "Communication Abilities",  
            description: "Students develop strong communication skills, enabling them to convey ideas clearly and collaborate with others."  
        },  
        {  
            subheading: "Leadership Development",  
            description: "The club fosters leadership qualities, preparing children to take initiative and lead teams."  
        },  
        {  
            subheading: "Real-World Readiness",  
            description: "Through hands-on projects, students build practical skills, making them better prepared for future career challenges."  
        }  
    ]
};