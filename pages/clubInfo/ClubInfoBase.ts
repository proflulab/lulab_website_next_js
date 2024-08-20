
/**
 *  俱乐部数据模块基础结构
 */

export interface Club {  
    mainTitle: string;   // 主标题
    overview: string;  // 概述
    impressionImage: string;  // 印象图URL
    promotionContent: string;  // 宣传内容
    firstExampleImage: string;  // 案例图1
    secondExampleImage: string;  // 案例图2
    harvestTitle: string;  //  学员收获标题
    harvestContent: { subheading: string; description: string }[];   // 列举学员将在这个俱乐部的收获
}  

// TODO: 使用时直接复制如下，进行编辑
// mainTitle: "",
// overview: "",
// impressionImage: "",
// promotionContent: "",
// firstExampleImage: "",
// secondExampleImage: "",
// harvestTitle: "",
// harvestContent: [
//     {
//         subheading: "",
//         description: ""
//     }
// ]