/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-09 17:40:52
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-09 19:02:35
 * @FilePath: /lulab_website_next_js/app/loading.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import { Grid, CircularProgress } from "@mui/material";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", backgroundColor: "#f5f5f5" }}>
            <CircularProgress sx={{ color: "#5e72e4" }} />
        </Grid>
    );
}