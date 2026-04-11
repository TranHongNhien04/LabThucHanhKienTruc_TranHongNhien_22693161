# Dùng Node.js image
FROM node:18

# Thư mục làm việc trong container
WORKDIR /bai04

# Copy package.json
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ code
COPY . .

# Mở port
EXPOSE 3000

# Chạy app
CMD ["npm", "start"]