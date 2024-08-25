"use client";
import React, { useEffect, useState } from "react";
import App from "../app/title/page";
import End from "../app/title/end";
import "../app/globals.css";
import { Box, Grid, Typography, Button, TextField, Link } from "@mui/material";
import supabase from "../pages/lib/supabaseClient"; // 引入 supabase 实例
import { useUser } from "../pages/context/UserContext";

export default function User() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
  });
  // 初始表单数据
  const [initialFormData, setInitialFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
  });
  const { user, loading, setUser } = useUser();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    if (user && user.user_metadata) {
      const fetchedData = {
        firstName: user.user_metadata.firstName || "",
        lastName: user.user_metadata.lastName || "",
        companyName: user.user_metadata.companyName || "",
        jobTitle: user.user_metadata.jobTitle || "",
      };
      setFormData(fetchedData);
      setInitialFormData(fetchedData);
    }
  }, [user]);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    // Warn user before leaving the page if there are unsaved changes
    const handleBeforeUnload = (event: {
      preventDefault: () => void;
      returnValue: string;
    }) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = ""; // This is required for the dialog to show
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setHasUnsavedChanges(true);
  };

  const handleSave = async () => {
    const { firstName, lastName, companyName, jobTitle } = formData;

    // 检查是否有任何字段被修改
    if (
      firstName === initialFormData.firstName &&
      lastName === initialFormData.lastName &&
      companyName === initialFormData.companyName &&
      jobTitle === initialFormData.jobTitle
    ) {
      alert("Please enter the information you want to modify.");
      return;
    }

    // 检查是否填写了必填字段
    if (!firstName || !lastName) {
      alert("Please fill in the required fields: First Name and Last Name.");
      return;
    }

    // 执行保存逻辑（发送到后端或更新数据库）
    try {
      const { error } = await supabase.auth.updateUser({
        data: formData,
      });

      if (error) {
        throw new Error(error.message);
      }

      alert("Your profile has been updated successfully.");
      setUser((prevUser: { user_metadata: any }) => ({
        ...prevUser,
        user_metadata: { ...prevUser.user_metadata, ...formData },
      }));
      setIsEditing(false); // 保存成功后退出编辑模式
      setHasUnsavedChanges(false); // 重置未保存更改的状态
    } catch (error) {
      console.error("Error updating user:", (error as Error).message);
      alert("Failed to update profile.");
    }
  };

  const handleDiscard = () => {
    setFormData(initialFormData); // 恢复初始数据
    setIsEditing(false); // 退出编辑模式
    setHasUnsavedChanges(false); // 重置未保存更改的状态
  };

  // 条件渲染页面内容
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // 使容器的高度充满视口高度
        }}
      >
        <Typography variant="body1" sx={{ color: "black" }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // 使容器的高度充满视口高度
        }}
      >
        <Typography variant="body1" sx={{ color: "red" }}>
          User is not logged in
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <App />
      <Box
        style={{
          backgroundColor: "white",
          padding: "2rem",
          width: "90%",
          maxWidth: "600px",
          margin: "2rem auto",
          borderRadius: "8px",
          color: "black", // 设置文字颜色为黑色
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "black",
            marginBottom: "1rem",
            textAlign: "left",
          }}
        >
          {isEditing ? "Edition your information" : "Welcome to Your Profile"}
        </Typography>

        <Typography
          variant="body1"
          style={{
            color: "black",
            marginBottom: "2rem",
            textAlign: "left",
          }}
        >
          {isEditing
            ? "Update your personal information below."
            : "Your personal information is displayed below."}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div style={{ marginBottom: "1.5rem" }}>
              <Typography variant="body1">
                <strong style={{ color: "black" }}>First Name:</strong>{" "}
                {isEditing ? (
                  <TextField
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    margin="normal"
                  />
                ) : (
                  <span style={{ color: "black" }}>{formData.firstName}</span> // Set text color to black
                )}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ marginBottom: "1.5rem" }}>
              <Typography variant="body1">
                <strong style={{ color: "black" }}>Last Name:</strong>{" "}
                {isEditing ? (
                  <TextField
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    margin="normal"
                  />
                ) : (
                  <span style={{ color: "black" }}>{formData.lastName}</span> // Set text color to black
                )}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ marginBottom: "1.5rem" }}>
              <Typography variant="body1">
                <strong style={{ color: "black" }}>Company Name:</strong>{" "}
                {isEditing ? (
                  <TextField
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                ) : (
                  <span style={{ color: "black" }}>{formData.companyName}</span> // Set text color to black
                )}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ marginBottom: "4rem" }}>
              <Typography variant="body1">
                <strong style={{ color: "black" }}>Job Title:</strong>{" "}
                {isEditing ? (
                  <TextField
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                ) : (
                  <span style={{ color: "black" }}>{formData.jobTitle}</span> // Set text color to black
                )}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Box textAlign="right" mt={2}>
          {isEditing ? (
            <>
              <div className="flex justify-end space-x-2 text-sm">
                <button
                  type="button"
                  onClick={handleDiscard} // 关联函数
                  className="justify-right rounded-md bg-customRed px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Discard
                </button>
                <button
                  type="button"
                  onClick={handleSave} // 关联函数
                  className="justify-right rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <div className="text-sm">
              <button
                type="button"
                onClick={handleToggleEdit} // 关联函数
                className="justify-right rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update info
              </button>
            </div>
          )}
        </Box>
      </Box>
      <End />
    </>
  );
}
