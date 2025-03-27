# 使用 Node.js 18 作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有项目文件
COPY . .

# 暴露端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "run", "dev"]