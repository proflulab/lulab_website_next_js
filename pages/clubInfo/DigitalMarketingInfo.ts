import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const DigitalMarketingClubData : Club = {
    
    mainTitle: "DigitalMarketing Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/digitalMarketing-1.jpeg",
    promotionContent: `${spaces}In the Digital Marketing Club, you'll explore the latest trends on top platforms like Douyin, WeChat Video, and Xiaohongshu. 
${warp}${spaces}We regularly host industry experts and leading digital marketers for insightful discussions. As digital marketing evolves, mastering these essential skills is crucial. 
${warp}${spaces}Join us and equip yourself with the tools to excel in today's competitive landscape.
`,
    firstExampleImage: "/digitalMarketing-2.jpeg",
    secondExampleImage: "/Marketing.jpg",
    harvestTitle: "Harvests from the DigitalMarketing Club",
    harvestContent: [  
        {  
            subheading: "Mastery of Top Digital Platforms",  
            description: "Learn the latest strategies and techniques on leading platforms like Douyin, WeChat Video, and Xiaohongshu, staying ahead in the fast-evolving digital marketing space."  
        },  
        {  
            subheading: "Hands-On Experience",  
            description: "Gain practical experience by directly participating in the IP account operations of Tsinghua University's Professor Lu Xiangqian, applying what you learn to real-world scenarios."  
        },  
        {  
            subheading: "Insights from Industry Experts",  
            description: "Benefit from regular discussions with top industry professionals and digital marketing experts, gaining valuable insights and staying updated on industry trends."  
        },  
        {  
            subheading: "Essential Marketing Skills",  
            description: "Develop the critical marketing skills needed to excel in today's competitive landscape, ensuring you're well-equipped for success."  
        },  
        {  
            subheading: "Career-Enhancing Knowledge",  
            description: "Equip yourself with the tools and knowledge necessary to thrive in the digital marketing field, setting a strong foundation for your future career."  
        }  
    ]
};