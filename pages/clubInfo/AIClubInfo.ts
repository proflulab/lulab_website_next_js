import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const AIClubData : Club = {
    
    mainTitle: "AI Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/ai-1.jpeg",
    promotionContent: `${spaces}The AI Club is at the forefront of cutting-edge technology, partnering with industry leaders to develop "Lulab Exclusive ChatGPT." 
${warp}${spaces}In a world where AI skills are essential, we're committed to cultivating top-tier talent ready to excel independently in the AI era. 
${warp}${spaces}As the demand for AI expertise grows, join us to be part of the future, where your skills will set you apart in a rapidly evolving industry.
`,
    firstExampleImage: "/ai-2.jpeg",
    secondExampleImage: "/AIclub.jpg",
    harvestTitle: "Harvests from the AI Club",
    harvestContent: [  
        {  
            "subheading": "Cutting-Edge AI Knowledge",  
            "description": "Gain in-depth understanding of the latest AI technologies through hands-on experience with \"Lulab Exclusive ChatGPT,\" developed in partnership with industry leaders."  
        },  
        {  
            "subheading": "Industry-Relevant Expertise",  
            "description": "Acquire the skills most demanded by today's rapidly evolving AI industry, ensuring you stay ahead in your career."  
        },  
        {  
            "subheading": "Independent Problem-Solving Skills",  
            "description": "Develop the ability to work independently and solve complex AI challenges, preparing you for leadership roles in the AI era."  
        },  
        {  
            "subheading": "Networking Opportunities",  
            "description": "Connect with industry leaders and experts, expanding your professional network and gaining valuable insights from pioneers in AI."  
        },  
        {  
            "subheading": "Future-Ready Career Preparation",  
            "description": "Position yourself at the forefront of the AI industry, with the skills and knowledge that will set you apart in a competitive job market."  
        }  
    ]
};